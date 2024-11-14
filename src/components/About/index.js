import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {

  const [about, setAbout] = useState({});
  const [self, setSelf] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    const selfRef = ref(db, "self");

    setLoading(true);
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
      setLoading(false);
    });

    onValue(selfRef,(snapshot)=>{
      const data = snapshot.val();
      setSelf(data);
      setLoading(false);
    })
  }, []);
    return (
        <section id="about" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
                  <img className="img-fluid" src={`data:image/jpg;base64, ${about.image}`}/>
                </div>
              </div> 
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="profile-wrapper wow fadeInRight" data-wow-delay="0.3s">
                  <h3>Hi Guys!</h3>
                  <p>I am a Fullstack Developer and Machine Learning Enthusiast with a 
                    passion for crafting end-to-end digital solutions. My expertise spans across building scalable backend architectures and 
                    creating dynamic frontend experiences, while continuously exploring AI-driven insights to solve complex problems. Driven by innovation and a commitment to excellence, I thrive in bridging technology 
                    and business needs to deliver impactful, data-driven applications.</p>
                  <div className="about-profile">
                    <ul className="admin-profile">
                      <li><span className="pro-detail"> {self.nama }</span></li>
                      <li>  <span className="pro-detail">{self.umur }</span></li>
                      <li> <span className="pro-detail">{self.alamat }</span></li>
                    
                      <li> <span className="pro-detail">{self.phone }</span></li>
                      <li> <span className="pro-detail">{self.email }</span></li>
                      
                      
                    </ul>
                  </div>
                  <a href="#" className="btn btn-common"><i className="icon-paper-clip" /> Download Resume</a>
                  <a href="https://www.linkedin.com/in/ricky-mambu-b9189930b//" className="btn btn-danger"><i className="icon-speech" /> Contact Me</a>
                </div>
              </div>   
            </div>
          </div>
        </section>
    )
}

export default About;