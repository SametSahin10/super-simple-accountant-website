import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "@utils/layout"
import SEO from "@utils/seo"
import SectionHeader from "@molecules/sectionHeader"
import SectionSetup from "@molecules/sectionSetup"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexImagesQuery {
      moonclerk: file(relativePath: { eq: "accepting-payments.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      gatsbyjs: file(relativePath: { eq: "fast-website.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      netlify: file(relativePath: { eq: "deploying-website.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <SectionHeader />
      <SectionSetup />
    </Layout>
  )
}

export default IndexPage
