import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-10">
      <nav className="flex flex-col sm:flex-row items-center sm:justify-between max-w-7xl mx-auto p-4">
        <h1 className="text-2xl sm:text-3xl whitespace-nowrap hover:text-emerald-300">
          <Link href="/">Image Gallery</Link>
        </h1>
        <p>Search</p>
      </nav>
    </header>
  );
};

export default Navbar;
