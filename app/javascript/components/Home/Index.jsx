import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="hero">
                    <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
                        <h1>WORLDWIDE NETWORKING</h1>
                        <div className="d-flex">
                            <div className="s002">
                            <form>
                                <div className="inner-form">
                                    <div className="input-field first-wrap">
                                        <div className="icon-wrap">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                                            </svg>
                                        </div>
                                        <input id="search" type="text" placeholder="What are you looking for?" />
                                    </div>

                                    <div className="input-field second-wrap">
                                        <div className="icon-wrap">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                            </svg>
                                        </div>
                                        <input className="datepicker" id="depart" type="text" placeholder="29 Aug 2018" />
                                    </div>

                                    <div className="input-field third-wrap">
                                        <div className="icon-wrap">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                            </svg>
                                        </div>
                                        <input className="datepicker" id="return" type="text" placeholder="30 Aug 2018" />
                                    </div>

                                    <div className="input-field fifth-wrap">
                                        <button className="btn-search" type="button">SEARCH</button>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </section>

                <main id="main">
                    {/*
                    <section id="about-boxes" class="about-boxes">
                    <div class="container" data-aos="fade-up">

                        <div class="row">
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div class="card">
                            <img src="assets/img/about-boxes-1.jpg" class="card-img-top" alt="...">
                            <div class="card-icon">
                                <i class="ri-brush-4-line"></i>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"><a href="">Our Mission</a></h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div class="card">
                            <img src="assets/img/about-boxes-2.jpg" class="card-img-top" alt="...">
                            <div class="card-icon">
                                <i class="ri-calendar-check-line"></i>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"><a href="">Our Plan</a></h5>
                                <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div class="card">
                            <img src="assets/img/about-boxes-3.jpg" class="card-img-top" alt="...">
                            <div class="card-icon">
                                <i class="ri-movie-2-line"></i>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"><a href="">Our Vision</a></h5>
                                <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. </p>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    </section>
                    */}


                    <section id="features" className="features">
                        <div className="container" data-aos="fade-up">
                            <div className="tab-content">

                                <div className="tab-pane active show" id="tab-1">
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <h3 className="mb-3">WHAT IS A RUNNER?</h3>
                                            <hr/>
                                            <p className="font-italic">
                                                Runners are those participants in the company who have the possibility of earning money through RUN (sales) made by assemblies made on the platform.
                                            </p>
                                            <p>
                                                For each RUN (sale) made, a profit is generated that is reflected in a number of credits that the runner can exchange for money or leave them on the platform and if they accumulate an amount of credits equivalent to the value of a property they can buy it through these, in this way, runners will be able to see BRUNK as an opportunity to earn money and invest.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img 
                                            src="https://dnuba.s3.amazonaws.com/uploads/bank_image/achivo/49/WhatsApp_Image_2018-10-23_at_10.07.52_AM.jpeg" 
                                            alt="" 
                                            className="img-fluid"
                                            style={{height: '282px'}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="features" className="features">
                        <div className="container" data-aos="fade-up">
                            <div className="tab-content">

                                <div className="tab-pane active show" id="tab-1">
                                    <div className="row">

                                        <div className="col-lg-6 order-2 order-lg-1 text-center">
                                            <img 
                                            src="https://trello-attachments.s3.amazonaws.com/5ed1bddd6e1f10827a37d66d/900x443/2bf85717b1b25a9e5f1184743f45581c/Blockchain-Technology.jpg" 
                                            alt="" 
                                            className="img-fluid mt-3"
                                            style={{height: '282px'}}
                                            />
                                        </div>

                                        <div className="col-lg-6 order-1 order-lg-2 mt-3 mt-lg-0">
                                            <h3 className="mb-3">SMART AGREEMENTS</h3>
                                            <hr/>
                                            <p className="font-italic mb-4">
                                                Runners are those participants in the company who have the possibility of earning money through RUN (sales) made by assemblies made on the platform.
                                            </p >

                                            <h3 className="mb-3">BLOCKCHAIN</h3>
                                            <hr/>
                                            <p>
                                                Now days blockchain is changing the world , because is the technology of No Corruption by the system that many different servers verify every transaction.
                                                We work with blockchain technology for make deals with touch id, face id , and online signature in this way we can trust and secure every deal
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                

                    <section id="services" className="services section-bg">
                        <div className="container">

                            <div className="section-title text-center">
                            <p>The possibilities do not have a budget</p>
                            </div>

                        </div>
                    </section>

                    <section id="features" className="features">
                        <div className="container" data-aos="fade-up">
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1">
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <h3>VIRTUAL REALITY</h3>
                                            <p className="font-italic mt-3">
                                            We give our customers 3D tours using latest technologies of matterport, also can provide satelital images of the neighbourhood and live calls with best quality.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <iframe width="580" height="400" src="https://my.matterport.com/show/?model=g8ioLttQigi" allowFullScreen allow="vr"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*
                    <section id="contact" class="contact">
                    <div class="container" data-aos="fade-up"">

                    <div class=" section-title">
                        <h2>Contact</h2>
                        <p>Contact Us</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-6">

                        <div class="row">
                            <div class="col-md-12">
                            <div class="info-box">
                                <i class="bx bx-map"></i>
                                <h3>Our Address</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="info-box mt-4">
                                <i class="bx bx-envelope"></i>
                                <h3>Email Us</h3>
                                <p>info@example.com<br>contact@example.com</p>
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="info-box mt-4">
                                <i class="bx bx-phone-call"></i>
                                <h3>Call Us</h3>
                                <p>+1 5589 55488 55<br>+1 6678 254445 41</p>
                            </div>
                            </div>
                        </div>

                        </div>

                        <div class="col-lg-6 mt-4 mt-lg-0">
                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                            <div class="form-row">
                            <div class="col-md-5 form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-5 form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div class="validate"></div>
                            </div>
                            <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div class="validate"></div>
                            </div>
                            <div class="mb-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div class="text-center"><button type="submit">Send Message</button></div>
                        </form>
                        </div>

                    </div>

                    </div>
                    </section>
                    */}
                </main>

                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                <h3>Ebrunk</h3>
                                    <div className="social-links mt-3">
                                        <a href="#" className="twitter">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="facebook">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="instagram">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">

                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">

                            </div>

                            {/*<div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Page traslation</h4>
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="https://image.flaticon.com/icons/png/512/555/555526.png" className="img-fluid" alt=""/>
                                    </div>

                                    <div className="col-md-4">
                                        <img src="https://image.flaticon.com/icons/png/512/555/555635.png" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>*/}

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span>ebrunk</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </footer>

                <a href="#" className="back-to-top">
                    <i className="fas fa-arrow-up"></i>
                </a>

            </React.Fragment>
        );
    }
}

export default Index;
