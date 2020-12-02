import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Search from './search'
import MenuIcon from '../../static/images/menu-icon.svg'

const searchIndices = [{ name: `Pages`, title: `Pages` }]

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  padding: 0.5em 0em;
  display: flex;
  align-items: center;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  height: 50px;

  @media screen and (max-width: 991.98px) {
    padding: 0 0.6em;
  }
`
const NavContainerDefault = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RightNavLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 2em;
  }

  @media screen and (max-width: 991.98px) {
    a {
      display: none;
    }
  }
`

const Logo = styled(Link)`
  font-size: 24px;
  color: white;
  font-weight: 900;
  text-decoration: none;

  @media screen and (max-width: 575.98px) {
    font-size: 20px;
  }
`
const NavLink = styled(Link)`
  font-size: 16px;
  color: hsla(0, 0%, 60%, 1);
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: hsla(0, 0%, 100%, 1);
  }
`

const DarkIconButton = withStyles(theme => ({
  root: {
    color: 'white',
    '&:hover': {
      backgroundColor: 'hsla(0,0%,20%,1)',
    },
  },
}))(IconButton)

const SearchIconWhite = withStyles(theme => ({
  root: {
    fill: 'white',
  },
}))(SearchIcon)

const Menu = () => {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Header>
      <Nav>
        {!searchActive && (
          <NavContainerDefault>
            <Logo to="/">JUST THE DARN RECIPE.</Logo>
            <RightNavLinks>
              <NavLink to="/about" activeStyle={{ color: 'white' }}>
                ABOUT US
              </NavLink>
              <NavLink to="/contact" activeStyle={{ color: 'white' }}>
                CONTACT US
              </NavLink>
              <DarkIconButton onClick={() => setSearchActive(true)}>
                <SearchIconWhite />
              </DarkIconButton>
            </RightNavLinks>
          </NavContainerDefault>
        )}

        {searchActive && (
          <Search
            indices={searchIndices}
            closeSearch={() => setSearchActive(false)}
          />
        )}
      </Nav>
    </Header>
  )
}

export default Menu
