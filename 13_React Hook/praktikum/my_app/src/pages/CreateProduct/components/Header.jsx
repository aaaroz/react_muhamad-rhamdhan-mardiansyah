function randomNumber() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(getRandomInt(5));
}

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm bg-body-tertiary">
      <div className="container-md container-sm container-lg pb-1">
        <a className="navbar-brand fs-4 fw-medium" href="/#">
          Simple Header
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-xl-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <button
                type="button"
                className="btn btn-primary mt-1"
                onClick={randomNumber}
              >
                Generate Random Number
              </button>
            </li>
            <li className="nav-item me-3">
              <button type="button" className="btn btn-primary p-2">
                Home
              </button>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link link-primary" href="/#">
                Features
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link link-primary" href="/#">
                Pricing
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link link-primary" href="/#">
                FAQs
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link link-primary" href="/#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
