import { useOutletContext } from "react-router-dom";
import Socials from "../components/Socials";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import SplashSection from "../components/SplashSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [isDarkMode] = useOutletContext();

  return (
    <>
      <SplashSection
        splashMessage={"WelCome To AAStar Community"}
        isDarkMode={isDarkMode}
        isErrorMode={false}
      />
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h1 className="text-center max-w-[18em]">
          ETHPaymaster
        </h1>
      </section>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2>Projects</h2>
        <Projects />
        <p className="text-justify">Compared to the Business, Closed Source, Central Relay Paymasters, we, ETHPaymaster provide a Community, Open Source, Decentralized Paymaster Framework to Sponsor Every Transaction.</p>
      </section>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        {/* <h2>Testimonials</h2> */}
        {/* <Testimonials /> */}
      </section>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2>Contact</h2>
        <Socials />
        <p className="text-center">
          {/* Are you ready to unlock your dream website? Let&apos;s chat! */}
        </p>
        {/* <ContactForm /> */}
      </section>
    </>
  );
}
