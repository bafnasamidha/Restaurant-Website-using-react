import React from 'react'

export default function Contact() {
  return (
    <div>
              <section id="section4">
            <h1 id="sec4_head">Contact Us</h1>
            <div id="sec4_body">
                <div className="col1">
                    <div>Join the club & get updates for special events</div>
                    <div>
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email Address"/>
                        <button className="button" id="subs_button">Subscribe</button>
                    </div>
                </div>
                <div className="col2">
                    <a href="tel:" className="anc_">Call Now: 0000XABCD</a>
                    <a href="mailto:" className="anc_">Mail To: 0000XABCD@gmail.com</a>
                    <a href="" id="job_button">JOIN OUR TEAM</a>
                </div>
                <div className="col3">
                    <div>Timings:
                        <br/>
                        Monday-Friday:10:00 AM - 10:00 PM
                        <br/>
                        Saturday-Sunday:10:00 AM-2:00 PM
                    </div>
                    <div> <a href="https://www.google.com/maps" className="anc_">
                            <div>Location:
                                <br/>
                                0000,ABCD XXX
                            </div>
                        </a></div>


                    {/* <a href="" className="anc_">Chat Us</a>  */}
                </div>
            </div>


             {/* <i className="uil uil-instagram-alt"></i>  */}
            <p className="cpr">
                Copyright &copy; Samidha Bafna.All right reserved
            </p>
        </section>

    </div>
  )
}
