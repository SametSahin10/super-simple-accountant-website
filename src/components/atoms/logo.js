import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoContainer>
      <StyledImg
        fluid={data.file.childImageSharp.fluid}
      />
      <LogoText>Super Simple Accountant</LogoText>
    </LogoContainer>
  )
}

export default Logo

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledImg = styled(Img)`
  border-radius: 24px;
  min-width: 50px;
  min-height: 50px;

  @media (min-width: 480px) {
    min-width: 70px;
    min-height: 70px;
  }

  @media (min-width: 600px) {
    min-width: 80px;
    min-height: 80px;
  }

  @media (min-width: 800px) {
    min-width: 100px;
    min-height: 100px;
  }
`

const LogoText = styled.span`
  margin-left: 18px;
  font-size: 1.6rem;
`