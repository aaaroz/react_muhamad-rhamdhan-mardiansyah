import { forwardRef } from "react";
import AboutImage from "../assets/about.png";

function About({ text }, about) {
  return (
    <section>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-5">
            <img src={AboutImage} alt="Logo" width={430} height={290} />
          </div>
          <div className="col-6 ms-5">
            <h1 ref={about}>{text}</h1>
            <p className="about mt-4 fs-6">
              Digital Innovation is a content writer focused on helping B2B tech
              companies tell their unique stories. Not just selling their
              products, but engaging their audience by delivering content that
              really solves problems. With experience writing for audiences such
              as cyber security professionals, network engineers,
              CIQs/CISOs/CTOs, VPs of product development, and more. Digital
              Innovation hepls companies address prospect and customers for a
              new generation of marketing. Every company has a story to tell and
              the key to success is to tell it well. Digital Innovation can help
              make sure your content is getting the message across
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default forwardRef(About);
