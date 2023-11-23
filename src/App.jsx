import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Jessica Barbosa" content="Exemplo de propriedades no react." />
          <Post author="Diogo Lima" content="Exemplo 2 de propriedades no react." />
        </main>
      </div>
    </>
  )
}
