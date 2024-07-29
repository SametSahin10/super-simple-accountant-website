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
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{ borderRadius: "24px", width: "80px", height: "80px" }}
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

const LogoText = styled.span`
  margin-left: 18px;
  font-size: 1.6rem;
  font-weight: bold;
`