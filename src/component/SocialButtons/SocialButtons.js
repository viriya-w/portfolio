import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Styles from './SocialButtons.module.css'

const SocialButtons = () => {
    return (
        <div className={Styles.socialcontainer}>
            <a href="https://www.facebook.com/yaainte/"
                className={Styles.facebook}>
                <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://www.instagram.com/ya_vw/"
                className={Styles.instagram}>
                <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
        </div>
    );
}

export default SocialButtons
