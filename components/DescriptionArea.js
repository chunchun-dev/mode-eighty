import React from 'react'
import styles from '../styles/DescriptionArea.module.css'

function DescriptionArea() {
    return (
        <div id={styles.descriptionArea}>
            <h1 id={styles.title}>Meet <br/>the <br/>Eighty.</h1>
            <p id={styles.desc}>
                Keyboards have become integral to work, play and creative expression.
                The Eighty elevates the look, sound, and feel of this essential tool. 
                We hope your experience with it is as fun as it is fruitful.
            </p>
        </div>
    )
}

export default DescriptionArea
