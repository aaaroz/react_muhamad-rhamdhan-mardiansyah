import instaIcon from "../assets/icon-instagram.svg";
import linkedinIcon from "../assets/icon-linkedin.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="text-white pt-5">
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 card-1 mt-5 pt-4 ps-5 fw-bold lh-1">
              <h2 className="fs-4">
                Join With 16.000+ People Who Get Our Web Marketing Tips Twice a
                Month
              </h2>
              <button
                type="button"
                className="btn btn-info ps-4 pe-4 mt-2 text-white"
              >
                Join Now
              </button>
              <div className="icon d-flex gap-3 mt-3">
                <a
                  href="https://www.instagram.com/rmdnmar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instaIcon} alt="Instagram Icon" />
                </a>
                <a
                  href="https://www.facebook.com/Rhamdanz18/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebookIcon} alt="Facebook Icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rmdnmar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
                <a href="/#">
                  <img src={twitterIcon} alt="Twitter Icon" />
                </a>
              </div>
            </div>
            <div className="col-4 card-2 mt-5 pt-4">
              <div className="container-fluid d-flex">
                <div className="logo">
                  <img src={Logo} alt="Logo" />
                </div>
                <div className="desc">
                  <span className="fs-2 fw-bold">Digital Innovation</span>
                  <p className="fs-6 fw-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vel rutrum mauris. Etiam ac turpis porttitor,
                    tincidunt quam vitae, ultrices est.
                  </p>
                  <a
                    className="text-info fs-5 lh-1 fw-semibold link-underline link-underline-opacity-0"
                    href="/#"
                  >
                    Learn About Digital Innovation Value
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4 card-3 mt-5 ps-5 pt-4 pe-3">
              <span className="fs-2 fw-bold">Come Say Hello!</span>
              <p className="postalcode mt-1 mb-1">40558</p>
              <p className="text-break mb-1">
                Jl. Prapatan Cirata, Desa Ciroyom, Kecamatan Cipeundeuy,
                Kabupaten Bandung Barat, Jawa Barat
              </p>
              <p className="text-info fw-semibold mt-1 mb-2">
                (0812) 1329-4383
              </p>
              <a
                href="https://wa.me/6281213294383"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="btn btn-info text-white ps-4 pe-4"
                >
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Bootom of footer */}
      </section>
      <div className="copyright text-center bg-info p-2">
        <a
          className="fs-6 text-white link-underline link-underline-opacity-0"
          href="/#"
        >
          Privacy Policy{" "}
        </a>
        - Copyright 2023 - Digital Innovation
      </div>
    </footer>
  );
}
