import React from 'react';
import {Contact,Experience,Project,About, Education,Skills,Header} from './components/index';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.inside}>
          <Header/>
          <About/>
          <Education/>
          <Skills/>
          <Project/>
          <Experience/>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
