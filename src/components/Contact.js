import React from "react";

export default function Contact() {
  return (
    <div>
      <section id="section4">
        <h1 id="sec4_head">Contact Us</h1>
        <div id="sec4_body">
          <div className="col">
            <div>JOIN THE CLUB & GET UPDATES FOR SPECIAL EVENTS</div>
            <div>
              <input type="text" placeholder="Name" className="input_text" />
              <input type="text" placeholder="Email" className="input_text"  />
              <button className="_button">Subscribe</button>
            </div>
          </div>

          <div className="col">
            <div>
              Timings:
              <br />
              Monday-Friday: 10:00 AM - 10:00 PM
              <br />
              Saturday-Sunday: 10:00 AM - 2:00 PM
            </div>
            <div>
              {" "}
              <a href="https://www.google.com/maps" className="anc_">
                <div>
                  Location:
                  <br />
                  0000,ABCD XXX
                </div>
              </a>
            </div>
          </div>
          <div className="col">
            <div>
              <a href="https://www.facebook.com">
                <i
                  className="fa-brands fa-facebook fa-xl"
                  style={{ color: "white", height: "30px", width: "40px" }}
                ></i>
              </a>
              <a href="https://www.twitter.com">
                <i
                  className="fa-brands fa-twitter fa-xl"
                  style={{ color: "white", height: "30px", width: "40px" }}
                ></i>
              </a>
              <a href="https://www.instagram.com">
                <i
                  className="fa-brands fa-instagram fa-xl"
                  style={{ color: "white", height: "30px", width: "40px" }}
                ></i>
              </a>
            </div>
            <a href="tel:" className="anc_">
              Call Now: 0000XABCD
            </a>
            <a href="mailto:" className="anc_">
              Mail To: 0000XABCD@gmail.com
            </a>
            <a href="" className="_button">JOIN OUR TEAM</a>
          </div>
        </div>
        <p className="cpr">Copyright &copy; Samidha Bafna.All right reserved</p>
      </section>
    </div>
  );
}
