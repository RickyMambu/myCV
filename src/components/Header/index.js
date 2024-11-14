const Header = () => {
    return (
        <div>
            <header id="header-wrap">
            <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
                <div className="container">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    <span className="icon-menu" />
                    <span className="icon-menu" />
                    <span className="icon-menu" />
                    </button>
                    <a href="index.html" className="navbar-brand"><img src="/img/logo.png" alt /></a>
                </div>
                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
                    <li className="nav-item ">
                        <a className="nav-link" href="#hero-area">
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">
                        About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">
                        Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#resume">
                        Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                        Contact
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                {/* Mobile Menu Start */}
                <ul className="onepage-nev mobile-menu">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">about</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#resume">resume</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                </ul>
                {/* Mobile Menu End */}
            </nav>
            {/* Navbar End */}
            {/* Hero Area Start */}
            <div id="hero-area" className="hero-area-bg">
                <div className="overlay" />
                <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                    <div className="contents">
                        <h5 className="script-font wow fadeInUp" data-wow-delay="0.2s">Hi This is</h5>
                        <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">Ricky Mambu</h2>
                        <p className="script-font wow fadeInUp" data-wow-delay="0.6s">Full-Stack Developer and Machine Learning Enthusiast</p>
                        <ul className="social-icon wow fadeInUp" data-wow-delay="0.8s">
                        <li>
                            <a className="github" href="https://github.com/RickyMambu"><i className="fab fa-github" /></a>
                        </li>
                        
                        <li>
                            <a className="instagram" href="https://www.instagram.com/mamburicky/"><i className="fab fa-instagram" /></a>
                        </li>
                        <li>
                            <a className="linkedin" href="https://www.linkedin.com/in/ricky-mambu-b9189930b/"><i className="fab fa-linkedin" /></a>
                        </li>
                        
                        </ul>
                       
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </header>
        
        </div>
    );
  };
  
  export default Header;