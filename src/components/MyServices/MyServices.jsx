import React from "react";
import "./MyServices.css"
import Title from "../Title/Title";

const MyServices = () => {
    return (
        <div className="container MyServices">
            <div className="service">
                <div>
                    <Title title='Our Services' subTitle='We Empower Clients To Be Loved' />
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="serial">
                            <span>01</span>
                        </div>
                        <div className="domain">
                            <h2>Web Development</h2>
                        </div>
                        <div className="domain-about">
                            <p>It is a long established fact that a the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                        </div>
                        <div className="link-icon">
                            <i class="ri-arrow-right-up-line"></i>
                        </div>
                    </div>
                    <div className="card">
                        <div className="serial">
                            <span>02</span>
                        </div>
                        <div className="domain">
                            <h2>Web Design</h2>
                        </div>
                        <div className="domain-about">
                            <p>It is a long established fact that a the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                        </div>
                        <div className="link-icon">
                            <i class="ri-arrow-right-up-line"></i>
                        </div>
                    </div>
                    <div className="card">
                        <div className="serial">
                            <span>03</span>
                        </div>
                        <div className="domain">
                            <h2>Web Application</h2>
                        </div>
                        <div className="domain-about">
                            <p>It is a long established fact that a the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                        </div>
                        <div className="link-icon">
                            <i class="ri-arrow-right-up-line"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyServices