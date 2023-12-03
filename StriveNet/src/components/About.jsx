function About(){
  return (
    <div className="container-xxl py-5" id="about">
    <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary">About Us<span></span></p>
                <h1 className="mb-5">#1 Digital solution with 10 years of experience</h1>
                <p className="mb-4">Elevate your brand with our innovative digital marketing solutions, driving engagement, boosting visibility, and maximizing ROI. Transform your online presence and captivate your audience with our strategic expertise</p>
                <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Digital Marketing</p>
                        <p className="mb-2">85%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:460}}></div>
                    </div>
                </div>
                <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">SEO & Backlinks</p>
                        <p className="mb-2">90%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:510}}></div>
                    </div>
                </div>
                <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Design & Development</p>
                        <p className="mb-2">95%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width:540}}></div>
                    </div>
                </div>
                <a href="" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</a>
            </div>
            <div className="col-lg-6">
                <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="img/about.png"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default About;