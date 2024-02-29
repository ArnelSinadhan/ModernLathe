const About = () => {
  return (
    <section className="py-3">
      <h2 className="text-center" style={{ marginTop: "80px" }}>
        About Us
        <span className="d-flex justify-content-center">
          <div
            style={{
              borderTop: "5px solid black",
              width: "80px",
              margin: "5px",
            }}
          ></div>
        </span>
      </h2>

      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src={process.env.PUBLIC_URL + "/img/teamwork.svg"}
              alt="About 1"
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <p className="lead fs-5 text-secondary mb-3">
                  Cendana machine shop or also known as “C.M.S”, was established
                  since 2006 In Antipolo City, Rizal. It started with the owner
                  Mr. Salvador Cendaña who was a machinist in Saudi Arabia for
                  15 years. He engaged in the business of engine rebuilding
                  specializing in engine overhauling and tools fabrications.
                  Years after, “C.M.S” rebranded into Modern Lathe Engine
                  Rebuilders Automotive Mechanical Services or also known as
                  “Modern Lathe” who is led by a mechanical engineer Engr.
                  Jezreel Cendaña who is in charge with the general operations,
                  auto-cad designs and general fabrications.
                </p>
                <p className="mb-5">
                  Our client’s economic considerations in accomplishing a
                  desired project and quality of work is our primary concern
                  without sacrificing the quality of design and appearance,
                  integrity and strength of the work. The main purpose of the
                  company is to provide the quality solutions and give flexible
                  sources as well as being competitive in professionalism of
                  time bound. Our scope of work primarily focuses in all kinds
                  of fabrications and engine overhauling as well as heavy
                  equipment parts repair.
                </p>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <img
                          src={process.env.PUBLIC_URL + "/img/Mission icon.png"}
                          alt="mission icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Mission</h2>
                        <p className="text-secondary mb-0">
                          To provide quality and finest services in Engine
                          Rebuilding, Automotive Services, and Engineering
                          Fabrications thru Machines and skilled workers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <img
                          src={process.env.PUBLIC_URL + "/img/vission.svg"}
                          alt="Vision icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Vision</h2>
                        <p className="text-secondary mb-0">
                          To become the most trusted and functional company when
                          it comes to Industrial and Automotive Works and
                          Services nationwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
