import React from 'react';
import styles from './About.module.css';

const About = (props) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <h1 className={styles.headline}>About Me</h1>
                <p className={styles.content}>{props.values.description}</p>
            </div>
        </div>
     );
}
 
export default About;