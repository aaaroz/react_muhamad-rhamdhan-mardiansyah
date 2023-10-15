import Contact from "../components/contact";
import Footer from "../components/footer";
import About from "../components/about";
import { useRef } from "react";
import Header from "../components/header";

export default function LandingPage() {
  const contact = useRef(null);
  const about = useRef(null);

  const scrollToContact = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
      <main>
        {/* main header */}
        <header>
          <div className="welcome-text">
            <h1 className="mb-2 lh-1 text-white">DIGITAL INNOVATION</h1>
            <p className="mt-4 fs-5 fw-medium text-white">
              Realize Your Innovation With Us!
            </p>
            <button
              type="button"
              className="btn btn-light fs-5 fw-medium ps-5 pe-5 mt-2 text-info"
            >
              Join Now
            </button>
          </div>
        </header>
        {/* end of main header */}
        <Contact ref={contact} text="Contact Us!" />
        <About ref={about} text="About Us" />
      </main>
      <Footer />
    </>
  );
}
