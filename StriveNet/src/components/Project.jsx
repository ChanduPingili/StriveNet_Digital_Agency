function Project(){
  return (
    
    <div className="container-xxl py-5" id="project">
    <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center"><span></span>Our Projects<span></span></p>
            <h1 className="text-center mb-5">Recently Completed Projects</h1>
        </div>
        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
            {/* <div className="col-12 text-center">
                <ul className="list-inline mb-5" id="portfolio-flters">
                    <li className="mx-2 active" data-filter="*">All</li>
                    <li className="mx-2" data-filter=".first">Web Design</li>
                    <li className="mx-2" data-filter=".second">Graphic Design</li>
                </ul>
            </div> */}
        </div>
        <div className="row g-4 portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt=""/>
                        <div className="portfolio-overlay">
                            <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="bg-light p-4">
                        <p className="text-primary fw-medium mb-2">Email Marketing</p>
                        <h5 className="lh-base mb-0">Email marketing for ABC company since 2022</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt=""/>
                        <div className="portfolio-overlay">
                            <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="bg-light p-4">
                        <p className="text-primary fw-medium mb-2">PPC Compaign</p>
                        <h5 className="lh-base mb-0">PPC compaign for ABC company in 2020</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt=""/>
                        <div className="portfolio-overlay">
                            <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="bg-light p-4">
                        <p className="text-primary fw-medium mb-2">Content Marketing</p>
                        <h5 className="lh-base mb-0">Content Marketing for ABC company in 2020</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt=""/>
                        <div className="portfolio-overlay">
                            <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="bg-light p-4">
                        <p className="text-primary fw-medium mb-2">SEO Optimization</p>
                        <h5 className="lh-base mb-0">SEO Optimization for ABC company in 2019</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/portfolio-5.jpg" alt=""/>
                        <div className="portfolio-overlay">
                            <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="bg-light p-4">
                        <p className="text-primary fw-medium mb-2">Mobile App Development</p>
                        <h5 className="lh-base mb-0">Developed a Mobile App for ABC company in 2018</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt=""/>
                        <div className="portfolio-overlay">
                            <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="bg-light p-4">
                        <p className="text-primary fw-medium mb-2">Social Media Compaign</p>
                        <h5 className="lh-base mb-0">Digital compaign for ABC company in 2017</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Project;