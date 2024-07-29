import React from "react"
import styled from "styled-components"
import Logo from "@atoms/logo"
import Link from "@atoms/link"
import LinkTop from "@atoms/linkTop"
import { media } from "@utils/media"

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Info>
        <Contact>
          <a href="mailto:supersimpleacc10@google.com">
            Email: supersimpleacc10@google.com
          </a>
          <a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=finance+mobile&query=finance+mobile&type=vector">
            Illustration by storyset on Freepik
          </a>
        </Contact>
        <Social>
          <li>
            <Link href="https://x.com/AccountantApp">Twitter</Link>
          </li>
        </Social>
      </Info>
      <LinkTop />
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  align-items: start;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
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

const Info = styled.div``

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
