import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.header}> <h1>Contact Me</h1> </div>
                
                <div className={styles.content}>
                    <ul>
                        <li>Website - <span className={styles.spantext}> www.xxx.com</span></li>
                        <li>Linkedin - <span className={styles.spantext}> www.xxx.com</span></li>
                        <li>Github - <span className={styles.spantext}> www.xxx.com</span></li>
                        <li>Email - <span className={styles.spantext}> www.xxx.com</span></li>
                    </ul>
                </div>

            </div>
        </div>
     );
}
 
export default Contact;