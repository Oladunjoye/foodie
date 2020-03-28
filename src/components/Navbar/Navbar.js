import React from 'react'
import styled from 'styled-components'
import {Title} from '../../Styles/Title'


const NavbarStyled = styled.nav`

background-color: #f44336;
width: 100%;
position : fixed;
padding: 10px;
z-index: 1000;

`

const Logo = styled(Title)`
font-size: 30px;
color: white;
text-shadow: 1px 1px 4px #380502
`



export default function Navbar() {
    return (
       <NavbarStyled>
          <Logo> Foodie <span role="img" aria-label= "Logo">🍕</span> </Logo>
       </NavbarStyled>
    )
}
