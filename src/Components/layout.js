import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/style.scss';
import layoutStyles from '../styles/general.module.scss'

function Layout(props) {
    return (
        <div className={layoutStyles.layoutContainer}>
            <div className={layoutStyles.layoutContent}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
