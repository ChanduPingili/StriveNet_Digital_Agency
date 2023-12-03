
function Testimonial(){
  return (
    <div className=" container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" id="testimonial">
        <div className="container py-5 px-lg-5">
            <p className="section-title text-secondary justify-content-center"><span></span>Testimonial<span></span></p>
            <h1 className="text-center mb-5">What Say Our Clients!</h1>
            <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item bg-light rounded my-4">
                    <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Working with [Your Company] has been a game-changer! Their digital marketing expertise transformed our online presence, delivering tangible results and increased customer engagement.</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img\testimonial-1.jpg" style={{width: 65, height: 65}}/>
                        <div className="ps-4">
                            <h5 className="mb-1">Sarah Johnson</h5>
                            <span>Founder, ABC Ventures</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item bg-light rounded my-4">
                    <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Innovative strategies, unparalleled dedication! [Your Company] turned our vision into a digital success story. Their team exceeded expectations, driving significant growth and brand recognition.</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{width: 65, height: 65}}/>
                        <div className="ps-4">
                            <h5 className="mb-1">John Smith</h5>
                            <span>CEO, XYZ Company</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item bg-light rounded my-4">
                    <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Results-driven and client-focused! [Your Company] delivered outstanding PPC campaigns, optimizing our ad spend and maximizing ROI. Trustworthy, reliable, and a pleasure to work with.</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{width: 65, height: 65}}/>
                        <div className="ps-4">
                            <h5 className="mb-1">Michael Williams</h5>
                            <span>CTO, LMN Tech Solutions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Testimonial;