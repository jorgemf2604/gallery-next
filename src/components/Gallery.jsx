import ImageCard from "./ImageCard";

const fetchImages = async (url) => {
  const res = await fetch(url, {
    headers: {
      Authorization: process.env.PEXEL_API_KEY,
    },
  });

  const images = await res.json();
  return images;
};

const Gallery = async () => {
  const images = await fetchImages("https://api.pexels.com/v1/curated");

  return (
    <section className="my-3 grid gap-4 grid-cols-gallery">
      {images.photos.map((image) => (
        <ImageCard key={image.id} photo={image} />
      ))}
    </section>
  );
};

export default Gallery;
