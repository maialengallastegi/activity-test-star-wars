import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from './logo.png'

import Character from '../components/character'

export default function Home({characters}) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <Image src={logo} />
        </div>

        <div className={styles.content}>
          {characters.map(character => <Character character={character} />)}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://swapi.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by swapi.dev

        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {

  const data = await fetch('https://swapi.dev/api/people')
  const characters = await data.json()
  
  return {
    props: {
      characters: characters.results
    },
  }
}
