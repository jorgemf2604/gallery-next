import Link from "next/link";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-10">
      <nav className="flex flex-col sm:flex-row items-center sm:justify-between max-w-7xl mx-auto p-4 gap-3">
        <h1 className="text-2xl sm:text-3xl whitespace-nowrap font-semibold px-2 py-1 rounded border-none hover:underline decoration-pink-300 decoration-2 decoration-wavy underline-offset-8">
          <Link href="/">Image Gallery</Link>
        </h1>
        <SearchInput />
      </nav>
    </header>
  );
};

export default Navbar;
