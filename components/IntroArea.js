import React from 'react'
import styles from '../styles/IntroArea.module.css'
import {motion} from 'framer-motion'

function IntroArea() {
    return (
        <div id={styles.introArea}>
            <motion.h1 
                id={styles.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 50,
                    delay: 0.25
                }}>
                    The Mode
            </motion.h1>
            <motion.h1 
                id={styles.eighty}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 50,
                    delay: 0.45
                }}>
                    Eighty
            </motion.h1>
        </div>
    )
}

export default IntroArea
