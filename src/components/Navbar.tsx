import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { slowScroll } from "../utils";
import { NavLink, useLocation } from "react-router-dom";
import { CiSquareChevLeft } from "react-icons/ci";

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

const MainNav = ({ onEvent }: { onEvent: () => void }) => {
  const handleClick = () => onEvent();

  const listItems = links.map(({ name, href }, i) => (
    <li key={`${Date.now().toString()}-${i}`} className="font-extralight">
      <a
        href={href}
        onClick={(e) => {
          slowScroll(e);
          handleClick();
        }}
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
        <NavLink onClick={handleClick} to="/dashboard">
          <Button type="secondary" rounded="true">
            Login to dashboard
          </Button>
        </NavLink>
      </li>
      <li>
        <Button onClick={handleClick} type="secondary-outline" rounded="true">
          Talk to an expert
        </Button>
      </li>
    </ul>
  );
};

const MobileSidePanel = ({ open, onEvent }: { open: boolean | undefined; onEvent: () => void }) => {
  return (
    <div className={`bg-brand-blue-dark ${open ? "visible right-0 opacity-100" : "invisible -right-[100vw] opacity-0"} fixed top-0 z-10 h-screen w-full overscroll-contain transition-all duration-300`}>
      <nav className="flex h-full w-full items-center justify-center">
        <MainNav onEvent={onEvent} />
      </nav>
    </div>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(null);
  const navbarRef = useRef<HTMLElement>(null);

  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    const el = navbarRef.current;
    if (!el) return;

    const updateHeight = () => {
      const height = el.offsetHeight;
      document.documentElement.style.setProperty("--navbar-height", `${height}px`);
    };

    updateHeight();

    // Watch for changes using ResizeObserver
    const observer = new ResizeObserver(() => updateHeight());
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Update logged in navbar height
  // Resize observer wasn't recognizing the change
  useEffect(() => {
    setTimeout(() => {
      const height = navbarRef.current?.offsetHeight;
      if (height) {
        document.documentElement.style.setProperty("--navbar-height", `${height}px`);
      }
    }, 200);
  }, [location]);

  const closeSidePanel = () => {
    if (window.innerWidth > 1024) return;
    setOpen(false);
  };

  return (
    <header ref={navbarRef} className={`font-montserrat bg-brand-blue-dark fixed top-0 z-50 w-full transition-all ${currentPage !== "/" ? "px-4 shadow-sm shadow-gray-800" : "p-4"}`}>
      <nav className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
        <NavLink to={currentPage.includes("cluster") ? "/dashboard" : "/"} className="fill flex items-center gap-2 hover:no-underline">
          {currentPage.includes("cluster") && <CiSquareChevLeft className="mr-2 size-8" />}

          <Logo className="size-6 fill-white stroke-white" />
          <p className="font-montserrat font-bold">Project Atlas</p>
        </NavLink>

        {currentPage === "/" ? (
          <div>
            <button aria-label="Toggle opening and closing the mobile side panel menu" onClick={() => setOpen(!open)} className="hover:bg-brand-accent-primary relative z-20 flex size-8 cursor-pointer flex-col items-center justify-center rounded-md transition-colors lg:hidden">
              <div className={`h-[0.5px] w-5 bg-white transition-all duration-200 ${open ? "mb-0 rotate-45" : "mb-1"}`}></div>
              <div className={`mb-1 h-[0.5px] w-5 bg-white ${open ? "hidden" : ""}`}></div>
              <div className={`h-[0.5px] w-5 bg-white transition-all duration-200 ${open ? "-rotate-45" : ""}`}></div>
            </button>

            <div className="hidden lg:block">
              <MainNav onEvent={closeSidePanel} />
            </div>
          </div>
        ) : (
          <div>
            <NavLink to="/">
              <Button type="link">Logout</Button>
            </NavLink>
          </div>
        )}
      </nav>

      <CSSTransition nodeRef={nodeRef} in={open} timeout={200} classNames="my-node">
        <MobileSidePanel onEvent={closeSidePanel} open={open} />
      </CSSTransition>
    </header>
  );
};
