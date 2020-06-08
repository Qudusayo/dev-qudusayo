import React from 'react'

import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

function Header() {
    return (
        <header className={headerStyles.header}>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
