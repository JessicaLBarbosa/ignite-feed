import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post () {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/JessicaLBarbosa.png" />

          <div className={styles.author__info}>
            <strong>Jessica Barbosa</strong>
            <span>FullStack Developer</span>
          </div>
        </div>

        <time title="11 de maio às 08:13" dateTime="2022-05-11 08:12:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto </p>que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          <p><a href="#">jane.design/doctorcare</a></p>
          <p>
            <a href="#">#novoprojeto</a>{' '}
            <a href="#">#nlw</a>{' '}
            <a href="#">#rocketseat</a>
          </p>
      </div>

      <form className={styles.comment__form}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.comment__list}>
        <Comment />
        <Comment />
      </div>

    </article>
  )
}