import React from "react"

import {Link} from 'gatsby'
 
import Layout from "../Components/layout"
import SEO from "../Components/seo"

import styles from '../styles/general.module.scss'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.error}>
      <h1>OOPS!!!</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <button><Link>Go Back Home</Link></button>
    </div>
  </Layout>
)

export default NotFoundPage