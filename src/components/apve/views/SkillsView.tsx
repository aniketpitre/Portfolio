'use client';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { SKILL_CATEGORIES, SKILLS_LIST } from '@/lib/app-data';
import { useIsMobile } from '@/hooks/use-mobile';
import './SkillsView.css';

// Dynamically import ForceGraph2D to avoid SSR issues
import type { ForceGraphProps } from 'react-force-graph-2d';
let ForceGraph2D: React.ComponentType<ForceGraphProps> | null = null;
if (typeof window !== 'undefined') {
  ForceGraph2D = require('react-force-graph-2d').default;
}

const SkillsGraph = () => {
  const [graphData, setGraphData] = useState<{ nodes: any[], links: any[] }>({ nodes: [], links: [] });
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [hoverNode, setHoverNode] = useState<any | null>(null);

  const isMobile = useIsMobile();

  useEffect(() => {
    const nodes: any[] = [];
    const links: any[] = [];

    Object.keys(SKILL_CATEGORIES).forEach(category => {
      nodes.push({
        id: category,
        name: category,
        isCategory: true,
        val: isMobile ? 20 : 30, // Larger nodes for categories
        color: SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES]?.color || '#ffffff'
      });
    });

    SKILLS_LIST.forEach(skill => {
      nodes.push({
        id: skill.name,
        name: skill.name,
        isCategory: false,
        val: isMobile ? 5 : 8, // Smaller nodes for skills
        level: skill.level,
        color: SKILL_CATEGORIES[skill.category as keyof typeof SKILL_CATEGORIES]?.color || '#a9a9a9'
      });
      links.push({
        source: skill.name,
        target: skill.category
      });
    });

    setGraphData({ nodes, links });
  }, [isMobile]);

  const handleNodeHover = (node: any | null) => {
    if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;
    
    highlightNodes.clear();
    highlightLinks.clear();
    
    if (node) {
      highlightNodes.add(node);
      // Find neighbors
      graphData.links.forEach(link => {
        if (link.source.id === node.id) {
          highlightNodes.add(link.target);
          highlightLinks.add(link);
        } else if (link.target.id === node.id) {
          highlightNodes.add(link.source);
          highlightLinks.add(link);
        }
      });
    }

    setHoverNode(node);
    setHighlightNodes(new Set(highlightNodes));
    setHighlightLinks(new Set(highlightLinks));
  };
  
  const paintNode = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const label = node.name;
    const fontSize = node.isCategory ? 16 / globalScale : 10 / globalScale;
    ctx.font = `${fontSize}px Inter`;
    
    const isHighlighted = highlightNodes.size === 0 || highlightNodes.has(node);
    
    ctx.fillStyle = isHighlighted ? node.color : 'rgba(150, 150, 150, 0.5)';
    
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.val, 0, 2 * Math.PI, false);
    ctx.fill();
    
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = isHighlighted ? 'white' : 'rgba(200, 200, 200, 0.5)';
    ctx.fillText(label, node.x, node.y);

    node.__bckgDimensions = [ctx.measureText(label).width, fontSize].map(n => n + fontSize * 0.2); // some padding
  }, [highlightNodes]);


  if (!ForceGraph2D) {
    return <div className="flex items-center justify-center h-full">Loading Skill Graph...</div>;
  }

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] bg-transparent rounded-lg">
      <ForceGraph2D
        graphData={graphData}
        nodeLabel="name"
        nodeVal="val"
        nodeCanvasObject={paintNode}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          const bckgDimensions = node.__bckgDimensions;
          bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, bckgDimensions[0], bckgDimensions[1]);
        }}
        onNodeHover={handleNodeHover}
        linkWidth={link => highlightLinks.has(link) ? 2 : 0.5}
        linkColor={link => highlightLinks.has(link) ? '#ffffff' : '#555555'}
        linkDirectionalParticles={4}
        linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 3 : 0}
        linkDirectionalParticleColor={link => highlightNodes.has(link.source) || highlightNodes.has(link.target) ? 'white' : '#555555'}
        cooldownTicks={100}
        onEngineStop={ (fg: any) => fg.zoomToFit(400, 100)}
        height={isMobile ? 400 : 600}
      />
      {hoverNode && (
        <div className="skill-tooltip">
          <p className="font-bold">{hoverNode.name}</p>
          {!hoverNode.isCategory && <p className="text-sm">{hoverNode.level}</p>}
        </div>
      )}
    </div>
  );
};


export function SkillsView() {
  return (
    <div>
      <h1 className="font-headline font-bold text-2xl text-foreground mb-2">/usr/lib/skills</h1>
      <p className="text-muted-foreground mb-6">- Live Skill Graph. Hover over nodes to explore.</p>
      <SkillsGraph />
    </div>
  );
}
