import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Greetings, Friends!</h1>
    <p>Welcome to this nifty Gatsby site.</p>
    <p>Hi, I'm Angela, and I'm a software engineer!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
