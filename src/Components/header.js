import React from 'react'

import { Link } from 'gatsby'

import useDarkMode from 'use-dark-mode';

import Toggler from './Toggler';
import header from '../styles/general.module.scss'

const Header = () => {
    const darkMode = useDarkMode(false);
    return (
        <header className={header.Header}>
            <nav>
                <ul className={header.navList}>
                    <li>
                        <Link className={header.navItem} activeClassName={header.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={header.navItem} activeClassName={header.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={header.navItem} activeClassName={header.activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Toggler value={darkMode.value} toggle={darkMode.toggle} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
