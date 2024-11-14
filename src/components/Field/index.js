const Field = () => {
    return (
        <section id="services" className="services section-padding">
          <h2 className="section-title wow flipInX" data-wow-delay="0.4s">Work Fields</h2>
          <div className="container">
            <div className="row">
              {/* Services item */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div className="services-item wow fadeInDown" data-wow-delay="0.3s">
                  <div className="icon">
                    <i className="icon-grid" />
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Front-end Development</a></h3>
                    <p> I create intuitive and responsive user interfaces that enhance user experience across devices.</p>
                  </div>
                </div>
              </div>
              {/* Services item */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
                  <div className="icon">
                    <i className="icon-layers" />
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Back-End Development</a></h3>
                    <p>I design and implement robust server-side architectures that ensure security, scalability, and efficiency.</p>
                  </div>
                </div>
              </div>
              {/* Services item */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
                  <div className="icon">
                    <i className="icon-briefcase" />
                  </div>
                  <div className="services-content">
                    <h3><a href="#">System Analyst</a></h3>
                    <p> I analyze business requirements and translate them into optimized system solutions, improving operational workflows.</p>
                  </div>
                </div>
              </div>
              {/* Services item */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
                  <div className="icon">
                    <i className="icon-bubbles" />
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Machine Learning</a></h3>
                    <p>I build data-driven models that provide actionable insights and drive intelligent decision-making processes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
} 

export default Field;