import Image from "next/image";
import Link from "next/link";

const ImageCard = ({ photo }) => {
  return (
    <div className="h-96 rounded-xl bg-gray-200 relative overflow-hidden">
      <Link href={photo.url}>
        <Image
          src={photo.src.large}
          alt={photo.alt}
          fill={true}
          quality={100}
          className="object-cover opacity-80 hover:scale-110 hover:opacity-100 transition duration-200"
        />
      </Link>
    </div>
  );
};

export default ImageCard;
