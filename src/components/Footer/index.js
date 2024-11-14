const Footer = () => {
    return (
      <div>
        <footer className="footer-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-text text-center wow fadeInDown" data-wow-delay="0.3s">
                  <ul className="social-icon">
                    <li>
                      <a className="github" href="https://github.com/RickyMambu/"><i className="fab fa-github" /></a>
                    </li>
                    <li>
                      <a className="instagram" href="https://www.instagram.com/mamburicky/"><i className="fab fa-instagram" /></a>
                    </li>
                    <li>
                      <a className="linkedin" href="https://www.linkedin.com/in/ricky-mambu-b9189930b/"><i className="fab fa-linkedin" /></a>
                    </li>
        
                  </ul>
                  <p>Copyright © 2024 UIdeck All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <a href="#" className="back-to-top">
              <i className="icon-arrow-up"></i>
            </a>
  
      </div>
    );
  };
  
  export default Footer;