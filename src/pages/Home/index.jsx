import styles from './index.module.css'
import Aside from '../../components/Aside'
import Card from '../../components/Card'

function Home() {

    return (
      <main className={styles.content}>
      <Aside />
        <section className={styles.screen_part_2}>
        <div className={styles.container_1} class="box">
          <h1>Meus Projetos</h1>
          <p>Veja Todos</p>
        </div>

        <section className={styles.screen_part_2_1}>
          <Card />
          
        </section>

      </section>
      </main>
      
    )


}

export default Home