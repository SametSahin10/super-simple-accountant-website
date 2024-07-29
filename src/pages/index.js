import React from "react"
import Layout from "@utils/layout"
import SEO from "@utils/seo"
import SectionHeader from "@molecules/sectionHeader"
import SectionSetup from "@molecules/sectionSetup"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <SectionHeader />
      <SectionSetup />
    </Layout>
  )
}

export default IndexPage
