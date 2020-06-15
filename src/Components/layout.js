import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/style.scss';
import layoutStyles from '../styles/general.module.scss'

function Layout(props) {
    return (
        <div className={layoutStyles.layoutContainer}>
            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0&appId=766593683880402&autoLogAppEvents=1" nonce="p63MpdVg"></script>
            <div className={layoutStyles.layoutContent}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
