import React, {Component} from 'react';
import '../../styles/carousel.css';

class CarouselSample extends Component {

    render() {
        return (
            <div className="container mt-lg-5">
                <div className="row">
                    <div id="carousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to={0} className="active" />
                            <li data-target="#carousel" data-slide-to={1} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-none d-lg-block">
                                    <div className="slide-box">
                                        <img src="https://picsum.photos/285/200/?image=0&random" alt="First slide" />
                                        <img src="https://picsum.photos/285/200/?image=1&random" alt="First slide" />
                                        <img src="https://picsum.photos/285/200/?image=2&random" alt="First slide" />
                                        <img src="https://picsum.photos/285/200/?image=3&random" alt="First slide" />
                                    </div>
                                </div>
                                <div className="d-none d-md-block d-lg-none">
                                    <div className="slide-box">
                                        <img src="https://picsum.photos/240/200/?image=0&random" alt="First slide" />
                                        <img src="https://picsum.photos/240/200/?image=1&random" alt="First slide" />
                                        <img src="https://picsum.photos/240/200/?image=2&random" alt="First slide" />
                                    </div>
                                </div>
                                <div className="d-none d-sm-block d-md-none">
                                    <div className="slide-box">
                                        <img src="https://picsum.photos/270/200/?image=0&random" alt="First slide" />
                                        <img src="https://picsum.photos/270/200/?image=1&random" alt="First slide" />
                                    </div>
                                </div>
                                <div className="d-block d-sm-none">
                                    <img className="d-block w-100" src="https://picsum.photos/600/400/?image=0&random" alt="First slide" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-none d-lg-block">
                                    <div className="slide-box">
                                        <img src="https://picsum.photos/285/200/?image=4&random" alt="Second slide" />
                                        <img src="https://picsum.photos/285/200/?image=5&random" alt="Second slide" />
                                        <img src="https://picsum.photos/285/200/?image=6&random" alt="Second slide" />
                                        <img src="https://picsum.photos/285/200/?image=7&random" alt="Second slide" />
                                    </div>
                                </div>
                                <div className="d-none d-md-block d-lg-none">
                                    <div className="slide-box">
                                        <img src="https://picsum.photos/240/200/?image=3&random" alt="Second slide" />
                                        <img src="https://picsum.photos/240/200/?image=4&random" alt="Second slide" />
                                        <img src="https://picsum.photos/240/200/?image=5&random" alt="Second slide" />
                                    </div>
                                </div>
                                <div className="d-none d-sm-block d-md-none">
                                    <div className="slide-box">
                                        <img src="https://picsum.photos/270/200/?image=2&random" alt="Second slide" />
                                        <img src="https://picsum.photos/270/200/?image=3&random" alt="Second slide" />
                                    </div>
                                </div>
                                <div className="d-block d-sm-none">
                                    <img className="d-block w-100" src="https://picsum.photos/600/400/?image=1&random" alt="Second slide" />
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>

        );
    }

    // render() {
    //
    //     return (
    //
    //         <section className="carousel slide" data-ride="carousel" id="postsCarousel">
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col-12 text-md-right lead">
    //                         <a className="btn btn-secondary-outline prev" href title="go back"><i
    //                             className="fa fa-lg fa-chevron-left"/></a>
    //                         <a className="btn btn-secondary-outline next" href title="more"><i
    //                             className="fa fa-lg fa-chevron-right"/></a>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="container pt-0 mt-2">
    //                 <div className="carousel-inner">
    //                     <div className="carousel-item active">
    //                         <div className="card-deck">
    //                             <div className="card h-100">
    //                                 <div className="card-img-top card-img-top-250">
    //                                     <img className="img-fluid" src="http://i.imgur.com/EW5FgJM.png"
    //                                          alt="Carousel 1"/>
    //                                 </div>
    //                                 <div className="card-body pt-2">
    //                                     <h6 className="small text-wide p-b-2">Insight</h6>
    //                                     <h2>
    //                                         <a href>Why Stuff Happens Every Year.</a>
    //                                     </h2>
    //                                 </div>
    //                             </div>
    //                             <div className="card h-100">
    //                                 <div className="card-img-top card-img-top-250">
    //                                     <img className="img-fluid" src="http://i.imgur.com/Hw7sWGU.png"
    //                                          alt="Carousel 2"/>
    //                                 </div>
    //                                 <div className="card-body pt-2">
    //                                     <h6 className="small text-wide p-b-2">Development</h6>
    //                                     <h2>
    //                                         <a href>How to Make Every Line Count.</a>
    //                                     </h2>
    //                                 </div>
    //                             </div>
    //                             <div className="card h-100">
    //                                 <div className="card-img-top card-img-top-250">
    //                                     <img className="img-fluid" src="http://i.imgur.com/g27lAMl.png"
    //                                          alt="Carousel 3"/>
    //                                 </div>
    //                                 <div className="card-body pt-2">
    //                                     <h6 className="small text-wide p-b-2">Design</h6>
    //                                     <h2>
    //                                         <a href>Responsive is Essential.</a>
    //                                     </h2>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="carousel-item">
    //                         <div className="card-deck">
    //                             <div className="card">
    //                                 <div className="card-img-top card-img-top-250">
    //                                     <img className="img-fluid"
    //                                          src="//visualhunt.com/photos/l/1/office-student-work-study.jpg"
    //                                          alt="Carousel 4"/>
    //                                 </div>
    //                                 <div className="card-body pt-2">
    //                                     <h6 className="small text-wide p-b-2">Another</h6>
    //                                     <h2>
    //                                         <a href>Tagline or Call-to-action.</a>
    //                                     </h2>
    //                                 </div>
    //                             </div>
    //                             <div className="card">
    //                                 <div className="card-img-top card-img-top-250">
    //                                     <img className="img-fluid"
    //                                          src="//visualhunt.com/photos/l/1/working-woman-technology-computer.jpg"
    //                                          alt="Carousel 5"/>
    //                                 </div>
    //                                 <div className="card-body pt-2">
    //                                     <h6 className="small text-wide p-b-2"><span
    //                                         className="pull-xs-right">12.04</span> Category 1</h6>
    //                                     <h2>
    //                                         <a href>This is a Blog Title.</a>
    //                                     </h2>
    //                                 </div>
    //                             </div>
    //                             <div className="card">
    //                                 <div className="card-img-top card-img-top-250">
    //                                     <img className="img-fluid"
    //                                          src="//visualhunt.com/photos/l/1/people-office-team-collaboration.jpg"
    //                                          alt="Carousel 6"/>
    //                                 </div>
    //                                 <div className="card-body pt-2">
    //                                     <h6 className="small text-wide p-b-2">Category 3</h6>
    //                                     <h2>
    //                                         <a href>Catchy Title of a Blog Post.</a>
    //                                     </h2>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //          </section>
    //     );
    // }

}

export default CarouselSample;
