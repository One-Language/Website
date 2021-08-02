import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
        <header>
            <h1 className={styles.header}>popwork</h1>
        </header>
        <div className={styles.items}>
            <ul>
                <li>Products</li>
                <li>Customers</li>
                <li>Pricing</li>
                <li>Manifesto</li>
                <li>Blog</li>
                <div className={styles.login1}>

                <li className={styles.login}>Login in</li>
                </div>
                <li className={styles.tryIt}>Try it now</li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar
