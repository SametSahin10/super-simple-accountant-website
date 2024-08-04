import React from "react"
import styled from "styled-components"
import Logo from "@atoms/logo"
import Link from "@atoms/link"
import LinkTop from "@atoms/linkTop"
import { media } from "@utils/media"

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Info>
          <Social>
            <li>
              <Link href="https://x.com/AccountantApp">
                Follow us on Twitter
              </Link>
            </li>
          </Social>
          <Contact>
            <a href="mailto:supersimpleacc10@gmail.com">
              Email: supersimpleacc10@gmail.com
            </a>
          </Contact>
        </Info>
        <LinkTop />
      </FooterContainer>
    </div>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 0 var(--spacingContent);
  padding-bottom: var(--spacingFooter);
  position: relative;

  @media ${media.lg} {
    grid-template-columns: 2fr 2fr;
  }
`

const LogoContainer = styled.div`
  position: relative;
`

const Info = styled.div`
  flex-grow: 1; /* This makes the Info component take up the remaining space */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  a {
    color: ${props => props.theme.colors.gray};
    margin-bottom: 0;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.black};
    }
  }
`

const Social = styled.ul`
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
  }
`

const CenteredLink = styled.a`
  display: block;
  text-align: center;
  margin: 0 auto;
`
