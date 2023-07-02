const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Post IT.
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Project
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/sarthakk24/mercor"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.youtube.com/"
                    className="hover:underline"
                  >
                    Youtube Video
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Presentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Sarthak Sachdeva
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/sarthakk24/"
                    className="hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/sarthakk24"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://twitter.com/sarthakk73"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://sarthakk24.s3.ap-south-1.amazonaws.com/Sarthak_Sachdeva_Resume.pdf"
                    className="hover:underline"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Saransh Sinha
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/saranshsinhaa"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/saranshsinhaa/"
                    className="hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://sarthakk24.s3.ap-south-1.amazonaws.com/Saransh_Sinha_Resume.pdf"
                    className="hover:underline "
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Sorabh Singh
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
