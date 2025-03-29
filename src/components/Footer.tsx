import { Logo } from "./ui/Logo";

export const Footer = () => {
  return (
    <footer className="wrapper !pt-20 !pb-16 md:!pt-32 md:!pb-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div>
            <p className="mb-2 text-xl font-medium sm:mb-3 sm:text-2xl">
              Contact
            </p>
            <p className="md:text-lg">Work inquires: work@projectatlas.com</p>
            <p className="md:text-lg">
              PR and speaking: press@projectatlas.com
            </p>
            <p className="md:text-lg">
              New business: newbusiness@projectatlas.com
            </p>
          </div>

          <div>
            <p className="mb-2 text-xl font-medium sm:mb-3 sm:text-2xl">
              Careers
            </p>
            <p className="md:text-lg">Careers@projectatlas.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div>
            <p className="mb-2 text-xl font-medium sm:mb-3 sm:text-2xl">
              Address
            </p>
            <p className="md:text-lg">
              398 11th Street, Floor 2 <br />
              San Francisco, CA 94103
            </p>
          </div>

          <div>
            <p className="mb-2 text-xl font-medium sm:mb-3 sm:text-2xl">
              Social
            </p>
            <a
              className="block md:text-lg"
              target="_blank"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              Twitter
            </a>
            <a
              className="block md:text-lg"
              target="_blank"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              Instagram
            </a>
            <a
              className="block md:text-lg"
              target="_blank"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              Tik Tok
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse items-center justify-between gap-5 md:mt-4 md:flex-row">
        <p className="text-xs text-gray-500 sm:text-sm md:text-base">
          © 2025 Project Atlas. All Rights Reserved.
        </p>

        <div className="flex items-end justify-center">
          <div className="fill flex items-center gap-2">
            <Logo className="size-6 fill-white stroke-white" />
            <p className="font-montserrat font-bold">Project Atlas</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
