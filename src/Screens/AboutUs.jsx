import React from 'react';
import styled from 'styled-components';
import AboutUsPic from '../images/desktop/image-interactive.jpg'

const AboutUsStyle = styled.div`
.AboutUsComponent{
    display:flex;
    justify-content:center;
    margin-top:420px;
}
.AboutUsPic{
    position: relative;
    z-index: -1;
}
h1{
    margin-top:30px;
    color: black;
    font-size: 63px;
    font-family: 'Raleway', sans-serif;
    font-weight: lighter;
}
.Description{
    max-width:550px;
    padding: 50px;
    background-color: white;
    margin-bottom: 5%;
}
p{
    margin-top:50px;
    line-height:1.8;
    color:black;
}

@media (max-width: 1829px){
    .AboutUsComponent{
        display:contents;
    }
.AboutUsPic{
    margin-left: 12%;
    margin-right: 12%;
    margin-top:15%;
    position: relative;
    z-index: -1;
}
h1{
    margin-top:30px;
    color: black;
    font-size: 63px;
    font-family: 'Raleway', sans-serif;
    font-weight: lighter;
}
.Description{
    max-width:550px;
    margin-top:-340px;
    padding: 50px;
    background-color: white;
    margin-left:45vw;
    margin-right: 2vw;
    margin-bottom: 5%;
}
p{
    margin-top:50px;
    line-height:1.8;
    color:black;
}
}
@media (max-width: 1090px){
    h1{
    margin-top:30px;
    color: black;
    font-size: 43px;
    font-family: 'Raleway', sans-serif;
    font-weight: lighter;
}
.Description{
    max-width:550px;
    margin-top:-140px;
    padding: 50px;
    background-color: white;
    margin-left:45vw;
    margin-right: 2vw;
}
}
`

function AboutUs(props) {
    return (
        <AboutUsStyle>
            <div className="AboutUsComponent">
                <div className="AboutUsPic">
                    <img src={AboutUsPic} />
                </div>
                <div className="Description">
                    <h1>THE LEADER IN INTERACTIVE VR</h1>
                    {/* </div>
            <div> */}
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
  to their brand.</p>
                </div>
            </div>
        </AboutUsStyle>
    );
}

export default AboutUs;