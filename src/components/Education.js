import React from "react";


const Education = () => {
    return (
        <div id="education" className="education">
            <div className="d-flex justify-content-center my-5">
                <h1>experience & education</h1>
            </div>
            <div className="container education-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>KyrgyzTelecom/Bishkek</h3>
                    <p>
                    <br />Working with the technicians and managers to troubleshoot outages and resolve network-related issues.<br /> - Computer programmer 
                    </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>International University of Kyrgyzstan</h3>
                    <p>
                    <br /> Information Technology.
                    <br /> - Bachelor Degree Diploma
                    <br /> 
                    </p>
                    
                </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Nucamp/San Francisco</h3>
                    <p>  
                    <br /> - Web Development Fundamentals Certificate 
                    <br /> - Front End Web + Mobile Developer Certificate 
                    <br /> - Full Stack Web and Mobile App Developer Certificate
                    </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Diablo Valley College/Pleasant Hill,CA</h3>
                    <p> - Computer Information Systems
                    <br /> - In progress
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;