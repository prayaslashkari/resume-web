import React from 'react';
import styles from './Project.module.css'


const Project = () => {
    return ( 
        <div className={styles.container}>
            <h1 className={styles.headline}>Personal Projects</h1>

            <div className={styles.inner}>
                <div className={styles.project}>
                    <div className={styles.status}>
                        <h2 className={styles.header}> Youtube Counter </h2> <span className={styles.spantext}>(Under-Development)</span>
                    </div>
                    <h3 className={styles.techstack}> Tech : React Js, Html, Css, JavaScript</h3>
                    <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fuga impedit obcaecati odio ullam nulla minima, laboriosam iste itaque, modi et odit officiis temporibus suscipit ea rerum in, harum ipsam. Eius ad, ipsum quis ratione natus eaque consectetur similique commodi dolorem, saepe quaerat minus est eveniet ea. Beatae, omnis vero!</p>

                    <div className={styles.panel}>
                        <div>
                            <h3>View as on</h3>
                        </div>


                        <div className={styles.link}>
                            <a href="#">Github</a>
                        </div>

                        <div className={styles.link}>
                            <a href="#">Live</a>
                        </div>
                    </div>
                </div>


                <div className={styles.project}>
                    <div className={styles.status}>
                        <h2 className={styles.header}> Youtube Counter </h2> <span className={styles.spantext}>(Under-Development)</span>
                    </div>
                    <h3 className={styles.techstack}> Tech : React Js, Html, Css, JavaScript</h3>
                    <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fuga impedit obcaecati odio ullam nulla minima, laboriosam iste itaque, modi et odit officiis temporibus suscipit ea rerum in, harum ipsam. Eius ad, ipsum quis ratione natus eaque consectetur similique commodi dolorem, saepe quaerat minus est eveniet ea. Beatae, omnis vero!</p>

                    <div className={styles.panel}>
                        <div>
                            <h3>View as on</h3>
                        </div>


                        <div className={styles.link}>
                            <a href="#">Github</a>
                        </div>

                        <div className={styles.link}>
                            <a href="#">Live</a>
                        </div>
                    </div>
                </div>


                <div className={styles.project}>
                    <div className={styles.status}>
                        <h2 className={styles.header}> Youtube Counter </h2> <span className={styles.spantext}>(Under-Development)</span>
                    </div>
                    <h3 className={styles.techstack}> Tech : React Js, Html, Css, JavaScript</h3>
                    <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fuga impedit obcaecati odio ullam nulla minima, laboriosam iste itaque, modi et odit officiis temporibus suscipit ea rerum in, harum ipsam. Eius ad, ipsum quis ratione natus eaque consectetur similique commodi dolorem, saepe quaerat minus est eveniet ea. Beatae, omnis vero!</p>

                    <div className={styles.panel}>
                        <div>
                            <h3>View as on</h3>
                        </div>


                        <div className={styles.link}>
                            <a href="#">Github</a>
                        </div>

                        <div className={styles.link}>
                            <a href="#">Live</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Project;