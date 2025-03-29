import "./App.css";
import { Navbar } from "./components/Navbar";
import { Button } from "./components/ui/Button";
import DashboardImgSrc from "./assets/images/dashboard.png";
import DigitalTokenCodeImgSrc from "./assets/images/digital-token-code.png";
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
import { IconAnalytics, IconCode, IconTokens } from "./components/icons";

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

          <p className="max-w-lg text-sm text-white/65 md:text-lg">
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
            alt="Project Atlas' dashboard"
            className="w-full max-w-5xl rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Brands */}
      <section className="bg-brand-blue-dark -mt-1">
        <div className="wrapper text-center">
          <p className="mx-auto max-w-sm text-lg text-white/80 opacity-80 md:max-w-none md:text-xl">
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
      <section id="features" className="wrapper !py-0">
        <hgroup className="mx-auto max-w-sm bg-[url('./assets/images/highlight.png')] bg-cover bg-center py-12 md:mb-12 md:max-w-lg">
          <h2 className="mb-5 px-10 text-center text-3xl font-[400] sm:text-5xl md:mb-10 md:text-5xl">
            Features that work for your future.
          </h2>
          <p className="mt-4 text-center text-sm md:text-lg">
            Check out our amazing features and experience the power of Project
            Atlas for yourself.
          </p>
        </hgroup>

        <div className="flex flex-col gap-10 md:gap-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Card className="mx-auto w-full max-w-xl px-8 py-6 md:px-12 md:py-10">
              <div className="flex size-fit items-center justify-center rounded-lg">
                <IconAnalytics className="-mt-7 -ml-10" />
              </div>

              <h3 className="-mt-5 mb-3 text-xl font-medium md:text-3xl">
                Analytics Dashboard
              </h3>

              <p className="mb-5 text-sm">
                Our Analytics Dashboard provides a clear and intuitive interface
                for you to easily analyze your data. From customizable graphs to
                real-time data updates, our dashboard offers everything you need
                to gain valuable insights.
              </p>

              <a href="#" className="underline">
                View dashboard
              </a>
            </Card>

            <Card className="mx-auto w-full max-w-xl px-8 py-6 md:px-12 md:py-10">
              <div className="flex size-fit items-center justify-center rounded-lg">
                <IconTokens className="-mt-7 -ml-10" />
              </div>

              <h3 className="-mt-5 mb-3 text-xl font-medium md:text-3xl">
                Digital Credit Tokens
              </h3>

              <p className="mb-5 text-sm">
                Reward your customers and incentivize engagement with our
                innovative digital credit tokens. Our tokens can be customized
                to match your branding, and are a flexible and scalable way to
                drive customer loyalty and encourage repeat business.
              </p>

              <a href="#" className="underline">
                View tokens
              </a>
            </Card>
          </div>

          <div className="xl:px-2">
            <Card className="mx-auto w-full max-w-xl px-8 py-6 md:max-w-none md:px-12 md:py-10">
              <div className="flex flex-col justify-between gap-5 md:gap-10 lg:flex-row">
                <div className="max-w-md">
                  <div className="flex size-fit items-center justify-center rounded-lg">
                    <IconCode className="-mt-7 -ml-10" />
                  </div>

                  <h3 className="-mt-5 mb-3 text-xl font-medium md:text-3xl">
                    Code collaboration
                  </h3>

                  <p className="mb-5 text-sm">
                    Our advanced code synchronization technology ensures that
                    your data is always up-to-date and accurate, no matter where
                    it's coming from. Whether you're integrating data from
                    multiple sources or working with a team of developers, our
                    synchronization technology makes it easy to collaborate and
                    ensure that your data is consistent and reliable.
                  </p>

                  <a href="#" className="underline">
                    View code collaboration
                  </a>
                </div>

                <img
                  src={DigitalTokenCodeImgSrc}
                  alt="Visual of Javascript file with digital token code"
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
              </div>
            </Card>
          </div>

          <Card className="mx-auto w-full max-w-xl px-8 py-6 md:max-w-none md:px-12 md:py-16">
            <hgroup className="mx-auto max-w-3xl">
              <h2 className="mb-3 text-center text-2xl font-semibold sm:text-3xl md:mb-6 md:text-5xl">
                Our powerful analytics provides invaluable insights.
              </h2>
              <p className="mx-auto mb-6 max-w-3xl text-center text-sm md:px-4 md:text-lg">
                Unlock the power of data with our cutting-edge analytics
                product. Get instant insights with our user-friendly Analytics
                Dashboard, and take advantage of our innovative digital credit
                tokens to reward your customers and incentivize engagement.
              </p>
            </hgroup>

            <Button type="secondary-outline" rounded="true" className="mx-auto">
              Download the app
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
