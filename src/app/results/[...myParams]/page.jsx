import Gallery from "@/components/Gallery";

const SearchResults = ({ params }) => {
  const topic = params.myParams[0] ?? "curated";
  // const page = params.myParams[1] ?? "1";

  return <Gallery topic={topic} />;
};

export default SearchResults;
