import { Container, Form, FormLabel, FormText } from "react-bootstrap";
import { RiMailSendFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0mvddyl", "template_4yh2wpg", form.current, {
        publicKey: "Qw4JYfZv5aUJVj9hp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <Container
      className="contact d-flex justify-content-center"
      fluid
      style={{ padding: "50px 15px" }}
    >
      <Container style={{ backgroundColor: "#292929", borderRadius: "8px" }}>
        <Container>
          <h1 class="maps-title m-5">OUR BRANCHES</h1>
          <div class="row text-center">
            <div class="col-md-6">
              <div class="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d466.3263463823218!2d121.18298084972065!3d14.580092410055027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sinday%20subd.corner%20rd.%20brgy.%20san%20jose%20antipolo%20city!5e1!3m2!1sen!2sph!4v1700706745450!5m2!1sen!2sph"
                  frameborder="0"
                  width="100%"
                  height="350px"
                  allowfullscreen
                ></iframe>
                <h2>Modern Lathe Branch 1</h2>
                <p>
                  Located at Rd. 3 Inday Subd.Corner Rd. Brgy. San jose,
                  Antipolo City, Rizal
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.479329683192!2d121.19234968343122!3d14.59519248900502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bf6ad8e9a1e9%3A0x18497eac085c8a82!2sMODERN%20LATHE!5e1!3m2!1sen!2sph!4v1700789426850!5m2!1sen!2sph"
                  frameborder="0"
                  width="100%"
                  height="350px"
                  allowfullscreen
                ></iframe>
                <h2>Modern Lathe Branch 2</h2>
                <p>
                  Located at Lot 9 Blk 3 C. Lawis Ext. Rodville Subd. Provincial
                  Rd.
                  <br />
                  Brgy. San Isidro, Antipolo City, Rizal
                </p>
              </div>
            </div>
          </div>
        </Container>

        <p className=" getIntouch">GET IN TOUCH</p>
        <h2 style={{ fontWeight: "700" }}>Contact</h2>

        <Form
          className="contact-form d-flex flex-column justify-content-center pb-3"
          onSubmit={sendEmail}
          ref={form}
        >
          <label className="d-flex flex-column">
            <span>Your Name</span>
            <input
              type="text"
              name="user_name"
              placeholder="Please input your name"
              required
              className="name-form"
            />
          </label>
          <label className="d-flex flex-column">
            <span>Your Email</span>
            <input
              type="email"
              name="user_email"
              placeholder="Please input your email"
              required
              className="email-form"
            />
          </label>
          <label className="d-flex flex-column">
            <span>Message</span>
            <textarea
              name="message"
              id="message"
              rows="7"
              placeholder="Please input your message"
            ></textarea>
          </label>
          <button type="submit" className="btn-form">
            Send <RiMailSendFill />
          </button>
        </Form>
      </Container>
    </Container>
  );
};

export default Contact;
