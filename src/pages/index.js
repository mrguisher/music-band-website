import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import MainWrapper from "./../components/mainWrapper"

const IndexPage = () => (
  <MainWrapper>
    <SEO title="Karolina Tuz - strona główna" />
    <h1>Karolina Tuz</h1>
    
    <Link to="/aktualnosci">aktualnosci</Link>
    <Link to="/koncerty">koncerty</Link>
    <Link to="/kontakt">kontakt</Link>
    <Link to="/muzyka">muzyka</Link>
    <Link to="/galeria-zdjec">galeria-zdjec</Link>
  </MainWrapper>
)

export default IndexPage
