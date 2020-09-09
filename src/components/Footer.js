import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import IconButton from '@material-ui/core/IconButton'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import Divider from '@material-ui/core/Divider'

const Container = styled.div`
  background-color: hsl(0, 0%, 96%);
  width: 100%;
  padding: 24px;
`
const Wrapper = styled.footer`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`
const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4em;
  @media (max-width: 575.98px) {
    flex-direction: column;
    align-items: baseline;
  }
`
const FooterLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const FooterRight = styled.div`
  @media (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    a:first-of-type {
      margin-top: 1em;
    }
    a {
      margin-bottom: 1em;
    }
  }
`

const FooterLogo = styled(Link)`
  font-size: 1.4em;
  font-weight: 900;
  color: #121212;
  text-decoration: none;
  margin-right: 2em;
  :hover {
    text-decoration: none;
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`
const FooterLink = styled(Link)`
  font-weight: 600;
  color: #121212;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
  margin-right: 2em;
`

const Copyright = styled.p`
  color: hsl(0, 0%, 70%);
  margin-top: 1em;
`

const Footer = () => (
  <Container>
    <Wrapper>
      <MainContent>
        <FooterLeft>
          <FooterLogo to="/">JUST THE DARN RECIPE.</FooterLogo>
          <SocialLinks>
            <IconButton
              aria-label="twitter"
              href="https://twitter.com/TheDarnRecipe"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="facebook"
              href="https://facebook.com/TheDarnRecipe"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="instagram"
              href="https://instagram.com/TheDarnRecipe/"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
          </SocialLinks>
        </FooterLeft>
        <FooterRight>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterRight>
      </MainContent>

      <Divider />
      <Copyright>© 2020 Just the Darn Recipe.</Copyright>
    </Wrapper>
  </Container>
)

export default Footer
