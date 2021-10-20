import Head from 'next/head'
import Image from 'next/image'
import DescriptionArea from '../components/DescriptionArea'
import IntroArea from '../components/IntroArea'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <IntroArea/>
      <DescriptionArea/>
    </div>
  )
}
