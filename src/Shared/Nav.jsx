import React from 'react';
import styled from 'styled-components'

const NavStyle = styled.div`

div{
    display:flex;
    margin-top:30px;
    position: sticky;

}

a{
    text-decoration:none;
    color:white;
    font-family: 'Alata', sans-serif;
}

.nav-list{
    list-style:none;
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 35px;
    margin-left: 25vw;
    margin-right:1vw;
}

#title{
    position: sticky;
    margin-left:10vw;
    font-family: 'Josefin Sans', sans-serif;
}
@media (max-width: 1080px) {
    .nav-list{
    list-style:none;
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 35px;
    position: sticky;
    left: 30%
}
}
`

function Nav(props) {
    return (
        <NavStyle>
            <div>
                <h1><a href="#" id="title">loopstudios</a></h1>
                <ul className="nav-list">
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link">Careers</a></li>
                    <li><a href="#" className="nav-link">Events</a></li>
                    <li><a href="#" className="nav-link">Products</a></li>
                    <li><a href="#" className="nav-link">Support</a></li>
                </ul>
            </div>
        </NavStyle>
    );
}

export default Nav;