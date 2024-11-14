const Resume = () => {
    return (
        <div id="resume" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="education wow fadeInRight" data-wow-delay="0.3s">
                  <ul className="timeline">
                    <li>
                      <i className="icon-graduation" />
                      <h2 className="timelin-title">Education</h2>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">Universitas Klabat</h3>
                        <span>2022 - 2026</span>
                        <p className="line-text">Berkuliah di Universitas Klabat, Fakultas Ilmu Komputer (FILKOM) dengan jurusan Informatika.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">SMA Universitas Klabat</h3>
                        <span>2019 - 2022</span>
                        <p className="line-text">Pernah bersekolah di SMA Universitas Klabat dengan mengambil jurusan Ilmu Pengetahuan Sosial (IPS).</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">SMP Lentera Harapan Tomohon</h3>
                        <span>2016 - 2019</span>
                        <p className="line-text">Pernah bersekolah di SMP Lentera Harapan Tomohon </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="experience wow fadeInRight" data-wow-delay="0.6s">
                  <ul className="timeline">
                    <li>
                      <i className="icon-briefcase" />
                      <h2 className="timelin-title">Experience</h2>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">Kaggle Community </h3>
                        <span>Agustus 2022- Present</span>
                        <p className="line-text">Part of Kaggle Community, contributing in various competition.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">Vice President of </h3>
                        <span>Agustus 2023 - Present</span>
                        <p className="line-text">Vice President of </p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">UDL Corp.</h3>
                        <span>Januari 2023 - Present</span>
                        <p className="line-text">Part of UDL Corp. Community</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Resume;