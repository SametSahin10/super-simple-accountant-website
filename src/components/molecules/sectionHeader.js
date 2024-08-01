import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { media } from "@utils/media"
import Button from "@atoms/button"
import { googlePlayUrl } from "../../constants"


const SectionHeader = () => {
  const data = useStaticQuery(graphql`
    query HeaderImageQuery {
      mobileAppInUseOne: file(relativePath: { eq: "mobile_app_in_use_one.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileAppInUseTwo: file(relativePath: { eq: "mobile_app_in_use_two.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      }
    }
  `)

  return (
    <HeaderContainer contentTop content grid backgroundSecondary>
      <Image>
      <MobileAppInUseImages>
        <Img
            fluid={data.mobileAppInUseOne.childImageSharp.fluid}
            style={{ width: "100%", height: "auto", maxWidth: "30%"}}
          />
          <Img
            fluid={data.mobileAppInUseTwo.childImageSharp.fluid}
            style={{ width: "100%", height: "auto", maxWidth: "35%"}}
          />
      </MobileAppInUseImages>
      </Image>
      <Content>
        <h1 style={{ color: "black", fontSize: 48, fontWeight: "normal" }}>
          The most simple accountant - budget planner out there!
        </h1>
        <Button
          style={{ color: "white"}}
          href={googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download now!
        </Button>
      </Content>
      <HeaderCurve fill="none" viewBox="0 0 1680 232">
        <path
          fill="#F9F6F3"
          d="M0 0h1680v119.847S1428.43 231 1260 231C967.343 231 712.766 9.26 420 9.26 251.618 9.26 0 119.848 0 119.848V0z"
        ></path>
      </HeaderCurve>
    </HeaderContainer>
  )
}

export default SectionHeader

const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  margin-bottom: 4rem;
  padding: 0 var(--spacingContent);

  @media ${media.lg} {
    flex-direction: row-reverse;
    min-height: 800px;
  }
`

const MobileAppInUseImages = styled.div`
  display: flex;
  flex-direction: row;
`

const Image = styled.div`
  display: block;
  flex-basis: 100%;
  padding-top: 8rem;
  width: 100%;

  @media ${media.lg} {
    padding: 0;
    width: 60%;
    flex-basis: 60%;
  }

  .gatsby-image-wrapper {
    width: 80%;
    margin: 0 auto;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
  width: 100%;

  @media ${media.lg} {
    width: 40%;
    flex-basis: 40%;
    align-items: flex-start;
  }

  h1 {
    margin-bottom: 3rem;
  }
`

const HeaderCurve = styled.svg`
  top: 100vh;
  left: 0;
  position: absolute;
  width: 100vw;
  height: auto;

  @media (max-width: 768px) {
    display: none;
  }
`
