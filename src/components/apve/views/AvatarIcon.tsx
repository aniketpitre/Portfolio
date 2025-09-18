import Image from 'next/image';
import { userProfileImage, professionalProfileImage } from '@/lib/app-data';
import './UserProfileView.css';

// A tiny, gray SVG that will serve as a blur-up placeholder
const placeholderSvg = `
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#333" />
</svg>
`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);


export const AvatarIcon = () => {
    if (!userProfileImage?.imageUrl || !professionalProfileImage?.imageUrl) {
        return (
            <div className="w-[200px] h-[200px] rounded-full bg-secondary flex items-center justify-center border-4 border-primary/50 shadow-lg" />
        );
    }

    return (
        <div className="flip-card large">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Image
                        src={professionalProfileImage.imageUrl}
                        alt="Aniket Pitre Professional Portrait"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full rounded-full border-4 border-primary/50 shadow-lg"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(placeholderSvg)}`}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        src={userProfileImage.imageUrl}
                        alt="Aniket Pitre Avatar"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full rounded-full border-4 border-primary/50 shadow-lg"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(placeholderSvg)}`}
                    />
                </div>
            </div>
        </div>
    );
};
