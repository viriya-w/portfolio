import React from 'react'
import styles from './home.module.css';
import SocialButtons from '../SocialButtons/SocialButtons';
import Data from '../../info.json';
import Video from '../../videos/video.mp4'
import { VdoBg, VideoBg } from './HomeElement'
 

function home() {

    var jp = require('jsonpath');
    var name = jp.query(Data, '$..firstname');

    return (
        <section id="home">
          
                <div >
                    <div className={styles.bg1}>
                        <VdoBg>
                            <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
                            </VideoBg>
                        </VdoBg>
                        <div className={styles.box}>
                            <h1 className={styles.colorH1}> Hello;</h1>
                            <br />
                            <br />
                            <h2 className={styles.colorH2}>I'm {name}, </h2>
                            <h2 className={styles.colorH2}>a software engineer</h2>
                            <br />
                            <br />
                            <SocialButtons />

                        </div>
                    </div>
                    
                </div>
            
        </section>
    )
}

export default home
