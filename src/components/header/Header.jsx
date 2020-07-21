import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <h1 className={styles.name}>Prayas Lashkari</h1>
                <h1 className={styles.pos}>Frontend Developer</h1>
            </div>
        </div>
     );
}
 
export default Header;