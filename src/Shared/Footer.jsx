import React from 'react';
import styled from 'styled-components'

const FooterStyle = styled.div`

.attribution { 
    font-size: 11px; 
    text-align: center;
    color:white;
}
.attribution a { 
    color: hsl(228, 45%, 44%); 
}

.mainfooter{
    background-color:hsl(0, 0%, 0%);
    padding-top:30px;
    padding-bottom:20px;
}
.nav-list{
    list-style:none;
    display: flex;
    margin-left:10vw;
    padding-left:0;
}
.nav-link{
    margin-right:4vw;
}
#title{
    margin-left:10vw;
    font-family: 'Josefin Sans', sans-serif;
}
a{
    text-decoration:none;
    color:white;
    font-family: 'Alata', sans-serif;
}
`

function Footer(props) {
    return (
        <FooterStyle>
            <div className="mainfooter">
                <div className="footer-nav">
                    <h1><a href="#" id="title">loopstudios</a></h1>
                    <ul className="nav-list">
                        <li><a href="#" className="nav-link">About</a></li>
                        <li><a href="#" className="nav-link">Careers</a></li>
                        <li><a href="#" className="nav-link">Events</a></li>
                        <li><a href="#" className="nav-link">Products</a></li>
                        <li><a href="#" className="nav-link">Support</a></li>
                    </ul>
                </div>
                <div className='social-links'>

                </div>
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="https://www.linkedin.com/in/cacano/">Christopher Cano</a>.
                </div>
            </div>
        </FooterStyle>
    );
}

export default Footer;