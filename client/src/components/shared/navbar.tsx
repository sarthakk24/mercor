import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Post IT.
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
