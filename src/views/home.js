import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Human Functionality Engineer</title>
        <meta property="og:title" content="Human Functionality Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
