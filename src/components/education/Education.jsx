import React from 'react';
import styles from './Education.module.css';

const Education = (props) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.upper}>
                <h1 className={styles.headline}>Education</h1>
            </div>
            
            <div className={styles.lower}>
                {
                    props.values.map(each =>
                    (<div className={styles.section}>
                        <h2 className={styles.ins}> {each.name} <span className={styles.spantext}> {each.course}</span> </h2>
                        <h4 className={styles.time}>{each.duration}</h4>
                        <p className={styles.descrip}>{each.description}</p>
                    </div>) )
                }
            </div>
        </div>
     );
}
 
export default Education;