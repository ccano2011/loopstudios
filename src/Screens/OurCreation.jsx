import React from 'react';
import styled from 'styled-components';
import Earth from '../images/desktop/image-deep-earth.jpg';
import Arcade from '../images/desktop/image-night-arcade.jpg';
import Soccer from '../images/desktop/image-soccer-team.jpg';
import Grid from '../images/desktop/image-grid.jpg';
import Above from '../images/desktop/image-from-above.jpg';
import Borealis from '../images/desktop/image-pocket-borealis.jpg';
import Curiosity from '../images/desktop/image-curiosity.jpg';
import Fisheye from '../images/desktop/image-fisheye.jpg';

const OurCreationStyles = styled.div`
.OurCreationComponent{
    max-width: 1211px;
    margin-left: auto;
    margin-right: auto;
}
.OurCreationBanner{
    display: flex;
    justify-content: space-between;
    margin-left: 12%;
    margin-right: 12%;
}
h1{
    font-family: 'Raleway',sans-serif;
}
button{
    margin: auto;
    margin-right: 0;
    border:3px solid hsl(0, 0%, 55%);
    background-color: white;
    font-family: 'Josefin Sans', sans-serif;
    padding:0.8em 3em;
    font-weight:bold;
    transition: 0.12s;
    text-decoration: none;
}
button:hover{
    background-color:  hsl(0, 0%, 85%);
}
.OurCreationGallery{
    display: flex;
    overflow: auto;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding: 10px;
    position: relative;
    z-index:-1;
    margin-bottom:85px;
}
img{
    padding: 10px;
}
.picture-description{
    font-family: 'Josefin Sans',sans-serif;
    font-size: 35px;
    max-width: 160px;
    margin-left: 30px;
    position: relative;
    z-index: 1;
    margin-top: -90px;
    /* margin-bottom: 150px; */
    color: white;
}
#from-up-above{
    max-width:180px;
}
`

function OurCreation(props) {
    return (
        <OurCreationStyles>
            <div className="OurCreationComponent">
                <div className="OurCreationBanner">
                    <h1>OUR CREATIONS</h1>
                    <button>SEE ALL</button>
                </div>
                <div className="OurCreationGallery">
                    <div>
                        <img src={Earth} alt='earth' />
                        <p className='picture-description'>DEEP EARTH</p>
                    </div>
                    <div>
                        <img src={Arcade} alt='arcade' />
                        <p className='picture-description'>NIGHT ARCADE</p>
                    </div>
                    <div>
                        <img src={Soccer} alt='soccer' />
                        <p className='picture-description'>SOCCER TEAM VR</p>
                    </div>
                    <div>
                        <img src={Grid} alt='grid' />
                        <p className='picture-description'>THE GRID</p>
                    </div>
                    <div>
                        <img src={Above} alt='above' />
                        <p className='picture-description' id="from-up-above">FROM UP ABOVE VR</p>
                    </div>
                    <div>
                        <img src={Borealis} alt='borealis' />
                        <p className='picture-description'>POCKET BOREALIS</p>
                    </div>
                    <div>
                        <img src={Curiosity} alt='curiosity' />
                        <p className='picture-description'>THE CURIOSITY</p>
                    </div>
                    <div>
                        <img src={Fisheye} alt='fisheye' />
                        <p className='picture-description'>MAKE IT FISHEYE</p>
                    </div>
                </div>
            </div>
        </OurCreationStyles>
    );
}

export default OurCreation;