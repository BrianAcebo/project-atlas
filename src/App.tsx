import "./App.css";
import { Navbar } from "./components/Navbar";
import { Button } from "./components/ui/Button";
import DashboardImgSrc from "./assets/images/dashboard.png";
import { Footer } from "./components/Footer";
import {
  Dell,
  Lattice,
  NCR,
  PacificFunds,
  Rakuten,
  TED,
  Zendesk,
} from "./assets/brands";
import { Card } from "./components/ui/Card";
import { IconAnalytics, IconTokens } from "./components/icons";

function App() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="mt-16 w-full bg-[url('./assets/images/background.jpg')] bg-cover bg-top object-top pt-12 md:pt-36 lg:mt-20">
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

      {/* Brands */}
      <section className="bg-brand-blue-dark -mt-1">
        <div className="wrapper text-center">
          <p className="text-lg opacity-80 md:text-xl">
            Trusted by teams at over 1,000 of the world's leading organizations
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <Dell />
            <Zendesk />
            <Rakuten />
            <PacificFunds />
            <NCR />
            <Lattice />
            <TED />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="wrapper !py-0">
        <hgroup className="mx-auto max-w-sm bg-[url('./assets/images/highlight.png')] bg-cover bg-center py-12 md:max-w-lg">
          <h2 className="mb-5 text-center text-3xl sm:text-5xl md:mb-10 md:text-7xl">
            Features that work for your future.
          </h2>
          <p className="mt-4 text-center text-sm text-gray-400 md:text-lg">
            Check out our amazing features and experience the power of Project
            Atlas for yourself.
          </p>
        </hgroup>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Card className="mx-auto w-full max-w-xl px-8 py-6 md:px-12 md:py-10">
            <div className="flex size-fit items-center justify-center rounded-lg">
              <IconAnalytics className="-mt-7 -ml-10" />
            </div>

            <h3 className="-mt-5 mb-3 text-lg font-medium md:text-xl">
              Analytics Dashboard
            </h3>

            <p className="mb-5 text-sm text-white/70">
              Our Analytics Dashboard provides a clear and intuitive interface
              for you to easily analyze your data. From customizable graphs to
              real-time data updates, our dashboard offers everything you need
              to gain valuable insights.
            </p>

            <a href="#" className="text-sm underline">
              View dashboard
            </a>
          </Card>

          <Card className="mx-auto w-full max-w-xl px-8 py-6 md:px-12 md:py-10">
            <div className="flex size-fit items-center justify-center rounded-lg">
              <IconTokens className="-mt-7 -ml-10" />
            </div>

            <h3 className="-mt-5 mb-3 text-lg font-medium md:text-xl">
              Digital Credit Tokens
            </h3>

            <p className="mb-5 text-sm text-white/70">
              Reward your customers and incentivize engagement with our
              innovative digital credit tokens. Our tokens can be customized to
              match your branding, and are a flexible and scalable way to drive
              customer loyalty and encourage repeat business.
            </p>

            <a href="#" className="text-sm underline">
              View tokens
            </a>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
