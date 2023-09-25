import Image from "next/image";
import Link from "next/link";

const ImageCard = ({ photo }) => {
  return (
    <Link href={photo.url}>
      <div className="h-96 rounded-xl bg-gray-200 relative overflow-hidden">
        <Image
          src={photo.src.large}
          alt={photo.alt}
          fill={true}
          quality={100}
          className="object-cover opacity-80 hover:scale-110 hover:opacity-100 transition duration-200"
          sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        />
      </div>
    </Link>
  );
};

export default ImageCard;
