import React from "react"
import Layout from "../components/Layout"

const rawHTML = `
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
  </ul>
</div>
`
const AboutPage = () => (
  <>
    <Layout>
      <h1>What is Bonneville?</h1>
      <div>
    { <div dangerouslySetInnerHTML={{ __html: rawHTML }} /> }
  </div>
    </Layout>
  </>
)

export default AboutPage
