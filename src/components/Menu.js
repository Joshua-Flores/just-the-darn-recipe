import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import {
  withStyles
} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Search from "./search"

const searchIndices = [{ name: `Pages`, title: `Pages` }]

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  padding: .5em 0em;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  display:flex;
  height:48px;
  justify-content:space-between;
  align-items:center;
`

const Logo = styled(Link)`
  font-size:24px;
  color: white;
  font-weight:900;
  text-decoration:none;

  @media screen and (max-width: 575.98px) {
    font-size:20px;
  }
`
const DarkIconButton = withStyles((theme) => ({
  root: {
    color: 'white',
    '&:hover': {
      backgroundColor: "hsla(0,0%,20%,1)",
    },
  },
}))(IconButton);

const SearchIconWhite = withStyles((theme) => ({
  root: {
    fill: 'white'
  }
}))(SearchIcon)

const Menu = () => {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Header>
      <Nav>
      {!searchActive && <Logo to="/">JUST THE DARN RECIPE.</Logo>}
      {!searchActive && <DarkIconButton onClick={() => setSearchActive(true)}><SearchIconWhite />
      </DarkIconButton>}
      
      {searchActive && 
        <Search indices={searchIndices} closeSearch={()=> setSearchActive(false)}/> } 
           
        
      </Nav>
    </Header>
  )
}

export default Menu
