import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { slowScroll } from "../utils";

const links = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "About us",
    href: "#about",
  },
];

const MainNav = () => {
  const listItems = links.map(({ name, href }, i) => (
    <li key={`${Date.now().toString()}-${i}`} className="font-extralight">
      <a
        href={href}
        onClick={slowScroll}
        className="hover:text-brand-blue-300 text-white"
      >
        {name}
      </a>
    </li>
  ));

  return (
    <ul className="flex flex-col items-center gap-6 md:gap-8 lg:flex-row">
      {listItems}
      <li className="mt-10 lg:mt-0">
        <Button type="secondary" rounded="true">
          Download the app
        </Button>
      </li>
      <li>
        <Button type="secondary-outline" rounded="true">
          Talk to an expert
        </Button>
      </li>
    </ul>
  );
};

const MobileSidePanel = ({ open }: { open: boolean | undefined }) => {
  return (
    <div
      className={`bg-brand-blue-dark ${open ? "visible right-0 opacity-100" : "invisible -right-[100vw] opacity-0"} fixed top-0 z-10 h-screen w-full overscroll-contain transition-all duration-300`}
    >
      <nav className="flex h-full w-full items-center justify-center">
        <MainNav />
      </nav>
    </div>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(null);

  return (
    <header className="font-montserrat bg-brand-blue-dark fixed top-0 z-50 w-full p-4">
      <nav className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
        <div className="fill flex items-center gap-2">
          <Logo className="size-6 fill-white stroke-white" />
          <p className="font-montserrat font-bold">Project Atlas</p>
        </div>

        <div>
          <button
            aria-label="Toggle opening and closing the mobile side panel menu"
            onClick={() => setOpen(!open)}
            className="hover:bg-brand-accent-primary relative z-20 flex size-8 cursor-pointer flex-col items-center justify-center rounded-md transition-colors lg:hidden"
          >
            <div
              className={`h-[0.5px] w-5 bg-white transition-all duration-200 ${open ? "mb-0 rotate-45" : "mb-1"}`}
            ></div>
            <div
              className={`mb-1 h-[0.5px] w-5 bg-white ${open ? "hidden" : ""}`}
            ></div>
            <div
              className={`h-[0.5px] w-5 bg-white transition-all duration-200 ${open ? "-rotate-45" : ""}`}
            ></div>
          </button>

          <div className="hidden lg:block">
            <MainNav />
          </div>
        </div>
      </nav>

      <CSSTransition
        nodeRef={nodeRef}
        in={open}
        timeout={200}
        classNames="my-node"
      >
        <MobileSidePanel open={open} />
      </CSSTransition>
    </header>
  );
};
