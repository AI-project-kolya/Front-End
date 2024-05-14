import React from 'react'
function AboutUs() {
    return (
        <>
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom">Cell Phone Price</h2>
                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div className="col d-flex flex-column align-items-start gap-2">
                        <h2 className="fw-bold text-body-emphasis">Our idea:</h2>
                        <p className="text-body-secondary">
                            First of all, we use the classifications, which contain 4 classes that predict the range price of the phone. To do that we follow some steps. From adding data exploration, and data visualization, data preprocessing. We use mobile & web applications to view the results of our model.
                        </p>
                        <a href="https://github.com/AI-project-kolya" className="btn btn-primary btn-lg">Full Project</a>

                    </div>
                    <div className="col">
                        <h2 className="fw-bold text-body-emphasis">Meet Our Team</h2>
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    Back-End
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">Salma Reda Bedir</li>
                                    <li className="list-group-item">Marwa Ashraf Saad</li>
                                </ul>
                            </div>
                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    Front-End
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">Doaa Ahmed Zaki</li>
                                    <li className="list-group-item">Abdelrahman Raddad</li>
                                </ul>

                            </div>
                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    Mobile
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                                <ul c="list-group">
                                    <li className="list-group-item">Ibrahim Hosny</li>
                                    <li className="list-group-item">Mariam Nabil</li>
                                    <li className="list-group-item">Mahmoud Elsharqawy</li>
                                </ul>
                            </div>
                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    Artificial intelligence
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">Somia Tarek</li>
                                    <li className="list-group-item">Abdelrahman Arafat</li>
                                    <li className="list-group-item">Salma Fawzy</li>
                                </ul>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs