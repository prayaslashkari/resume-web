import React from 'react';
import styles from './Header.module.css'

const Header = (props) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <h1 className={styles.name}>{props.values.name}</h1>
                <h1 className={styles.pos}>{props.values.des}</h1>
            </div>
        </div>
     );
}
 
export default Header;