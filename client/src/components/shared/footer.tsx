import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/"
              className="flex items-center"
            >
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Post IT.
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Project
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/sarthakk24/mercor"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/watch?v=PhFdfvbm3MM"
                    className="hover:underline"
                  >
                    Youtube Video
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sarthakk24.s3.ap-south-1.amazonaws.com/Mercor+Presentaion.pptx"
                    className="hover:underline"
                  >
                    Presentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Sarthak Sachdeva
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/sarthakk24/"
                    className="hover:underline"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/sarthakk24"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/sarthakk73"
                    className="hover:underline"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sarthakk24.s3.ap-south-1.amazonaws.com/Sarthak_Sachdeva_Resume.pdf"
                    className="hover:underline"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Saransh Sinha
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/saranshsinhaa"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/saranshsinhaa/"
                    className="hover:underline"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sarthakk24.s3.ap-south-1.amazonaws.com/Saransh_Sinha_Resume.pdf"
                    className="hover:underline "
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Sorabh Singh
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/sourabh-singh-693a57253/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/SOUraBh-5"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sarthakk24.s3.ap-south-1.amazonaws.com/sorabh_sing_resume.pdf"
                    className="hover:underline"
                  >
                    Resume
                  </Link>
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
