import ImageCard from "./ImageCard";

const fetchImages = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: process.env.PEXEL_API_KEY,
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      throw new Error("Could not fetch the images");
    }

    const images = await res.json();
    return images;
  } catch (e) {
    console.log(e);
  }
};

const Gallery = async ({ topic }) => {
  const url = !topic
    ? "https://api.pexels.com/v1/curated"
    : `https://api.pexels.com/v1/search?query=${topic}`;

  const images = await fetchImages(url);

  if (!images) {
    return (
      <h2 className="text-center text-3xl font-semibold">No images found</h2>
    );
  }

  return (
    <section className="my-3 grid gap-4 grid-cols-gallery">
      {images.photos.map((image) => (
        <ImageCard key={image.id} photo={image} />
      ))}
    </section>
  );
};

export default Gallery;
