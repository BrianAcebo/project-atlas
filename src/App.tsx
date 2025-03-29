import "./App.css";
import { Navbar } from "./components/Navbar";
import { Button } from "./components/ui/Button";
import DashboardImgSrc from "./assets/images/dashboard.png";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <section className="mt-16 min-h-screen w-full bg-[url('./assets/images/background.jpg')] bg-cover bg-top object-top pt-12 md:pt-36 lg:mt-20">
        <div className="wrapper flex flex-col items-center justify-center gap-5 text-center md:gap-8">
          <Button
            type="secondary-outline"
            rounded="true"
            className="text-xs sm:text-sm md:text-base"
          >
            We just raised $20M in Series B. Learn more
          </Button>

          <h1 className="text-3xl font-medium sm:text-5xl md:text-7xl">
            Modern analytics <br />
            <span className="inline-block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              for the modern world
            </span>
          </h1>

          <p className="max-w-lg text-sm text-gray-400 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <div className="flex gap-4">
            <Button type="secondary" rounded="true">
              Download the app
            </Button>
            <Button type="secondary-outline" rounded="true">
              Talk to an expert
            </Button>
          </div>

          <img
            src={DashboardImgSrc}
            alt="Dashboard"
            className="w-full max-w-5xl rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="bg-brand-blue-dark -mt-1">
        <div className="wrapper text-center">
          <p className="text-xl opacity-80">
            Trusted by teams at over 1,000 of the world's leading organizations
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
