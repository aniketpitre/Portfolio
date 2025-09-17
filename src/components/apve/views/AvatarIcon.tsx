export const AvatarIcon = () => (
    <div className="w-[160px] h-[160px] rounded-full bg-secondary flex items-center justify-center border-4 border-accent shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="144" height="144" className="relative top-1">
            <defs>
                <clipPath id="clip">
                    <circle cx="100" cy="100" r="90"/>
                </clipPath>
            </defs>
            
            <g clipPath="url(#clip)">
                <rect width="200" height="200" fill="#292d3e" />
                
                {/* Neck and Shirt */}
                <path d="M100 135 C 90 145, 110 145, 100 135 L 120 180 L 80 180 Z" fill="#4c2a4c"/>
                <path d="M100 140 v 20 l 15 0 l -5 -20 z" fill="#e0e0e0" opacity="0.8"/>
                <path d="M100 140 v 20 l -15 0 l 5 -20 z" fill="#e0e0e0" opacity="0.8"/>
                
                {/* Face */}
                <circle cx="100" cy="100" r="40" fill="#ffcfa0"/>
                <path d="M100 130 C 120 130, 125 110, 115 95 C 120 80, 80 80, 85 95 C 75 110, 80 130, 100 130 Z" fill="#ffcfa0"/>

                {/* Hair */}
                <path d="M100 60 C 70 60, 65 100, 85 100 C 80 80, 120 80, 115 100 C 135 100, 130 60, 100 60 Z" fill="#1e1e1e"/>
                <path d="M100 65 Q 80 55, 70 70 T 80 85" stroke="#333" strokeWidth="3" fill="none" />

                {/* Sunglasses */}
                <g transform="translate(0, -2)">
                    <rect x="68" y="92" width="28" height="15" rx="5" fill="#1a1a1a"/>
                    <rect x="104" y="92" width="28" height="15" rx="5" fill="#1a1a1a"/>
                    <path d="M96 98 h8" stroke="#1a1a1a" strokeWidth="2"/>
                    <path d="M68 98 h-5" stroke="#1a1a1a" strokeWidth="2"/>
                    <path d="M132 98 h5" stroke="#1a1a1a" strokeWidth="2"/>
                </g>

                {/* Moustache */}
                <path d="M92 115 C 94 112, 98 112, 100 115 C 102 112, 106 112, 108 115" stroke="#1e1e1e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </g>
        </svg>
    </div>
);
