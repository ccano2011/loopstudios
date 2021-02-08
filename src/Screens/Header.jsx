import React from 'react';
import styled from 'styled-components';
import imagehero from '../images/desktop/imagehero.jpg'

const HeaderStyling = styled.div`
img {
        margin-top: -120px;
        width: 100%;
        /* min-width:1440px; */
        position:relative;
        z-index: -1;
        opacity:.9;
        background-size:cover;
    }

    p{
        margin:-10px;
        color: white;
        font-size: 93px;
        font-family: 'Raleway', sans-serif;
    }

    .header-title{
        margin-top: -30%;
        outline: 2px solid white !important;
        padding: 45px 75px 45px 45px;
        max-width: fit-content;
        margin-left: 20%;
        margin-bottom:30vh;
    }
@media (max-width: 1829px){
    .header-title{
        margin-top: -30%;
    }
    p{
        margin:-10px;
        color: white;
        font-size: 63px;
        font-family: 'Raleway', sans-serif;
    }
    @media (max-width: 1650px) {
        p{
        font-size: 63px;
        }
        .header-title{
        margin-top: -30%;
    }
    }
    @media (max-width: 1050px) {
        p{
        font-size: 2em;
        color:black;
        padding-right:26px;
        }
        .header-title{
        margin-top:50px;
        margin-left:50px;
        margin-bottom:-10px;
        display:flex;
        justify-content:center;
        max-width: 100%;
        padding: 4px 0 5px 0;
    }
    }
}
`
function Header(props) {
    return (
        <HeaderStyling>
            <div className='HeaderStylingComponent'>
                <div>
                    <img src={imagehero} />
                </div>
                <div className="header-title">
                    <p>IMMERSIVE</p>
                    <p>EXPERIENCES</p>
                    <p>THAT DELIVER</p>
                </div>
            </div>
        </HeaderStyling>
    );
}

export default Header;