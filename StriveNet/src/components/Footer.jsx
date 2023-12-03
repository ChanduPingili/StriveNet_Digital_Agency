function Footer(){
  return (
    <div>
<div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5 px-lg-5">
        <div className="row g-5">
            <div className="col-md-6 col-lg-3">
                <p className="section-title text-white h5 mb-4">Address<span></span></p>
                <p><i className="fa fa-map-marker-alt me-3"></i>Location, City, Country</p>
                <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope me-3"></i>strivenet@abc.com</p>
                <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
                <a className="btn btn-link" href="">About Us</a>
                <a className="btn btn-link" href="">Contact Us</a>
                <a className="btn btn-link" href="">Privacy Policy</a>
                <a className="btn btn-link" href="">Terms & Condition</a>
                <a className="btn btn-link" href="">Career</a>
            </div>
            <div className="col-md-6 col-lg-3">
                <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
                <div className="row g-2">
                    <div className="col-4">
                        <img className="img-fluid" src="img/portfolio-1.jpg" alt="Image"></img>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid" src="img/portfolio-2.jpg" alt="Image"></img>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid" src="img/portfolio-3.jpg" alt="Image"></img>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid" src="img/portfolio-4.jpg" alt="Image"></img>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid" src="img/portfolio-5.jpg" alt="Image"></img>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid" src="img/portfolio-6.jpg" alt="Image"></img>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <p className="section-title text-white h5 mb-4">Location<span></span></p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30366.57938333008!2d79.13832614285958!3d17.940434566447095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccbaca161b938f%3A0x962e93a2d06aa3a8!2sTarigoppula%2C%20Telangana!5e0!3m2!1sen!2sin!4v1701625375752!5m2!1sen!2sin" width="280" height="200" style={{border:0}} allowFullScreen="" loading="lazy" ></iframe>
            </div>
        </div>
    </div>
    <div className="container px-lg-5">
        <div className="copyright">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="https://freewebsitecode.com">StriveNet</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                        <a href="">Home</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
</div>
  )
}

export  default Footer;