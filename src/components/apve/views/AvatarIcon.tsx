import Image from 'next/image';

export const AvatarIcon = () => (
    <div className="w-[160px] h-[160px] rounded-full bg-secondary flex items-center justify-center border-4 border-accent shadow-lg overflow-hidden">
        <Image
            src="https://avatars.githubusercontent.com/u/125744373?v=4"
            alt="Aniket Pitre Avatar"
            width={160}
            height={160}
            className="object-cover w-full h-full"
        />
    </div>
);
