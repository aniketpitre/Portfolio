import Image from 'next/image';
import { userProfileImage, professionalProfileImage } from '@/lib/app-data';
import './UserProfileView.css';

export const AvatarIcon = () => {
    if (!userProfileImage || !professionalProfileImage) {
        return (
            <div className="w-[160px] h-[160px] rounded-full bg-secondary flex items-center justify-center border-4 border-primary/50 shadow-lg" />
        );
    }

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Image
                        src={professionalProfileImage.imageUrl}
                        alt="Aniket Pitre Professional Portrait"
                        width={160}
                        height={160}
                        className="object-cover w-full h-full rounded-full border-4 border-primary/50 shadow-lg"
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        src={userProfileImage.imageUrl}
                        alt="Aniket Pitre Avatar"
                        width={160}
                        height={160}
                        className="object-cover w-full h-full rounded-full border-4 border-primary/50 shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};
