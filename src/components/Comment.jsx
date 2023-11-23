import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment () {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/JessicaLBarbosa.png" />

      <div className={styles.comment__box}>
        <div className={styles.comment__content}>
          <header>
            <div className={styles.author__time}>
              <strong>Jessica Barbosa</strong>
                <time title="11 de maio às 08:13" dateTime="2022-05-11 08:12:30">
                  Cerca de 1h atrás
                </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )

}