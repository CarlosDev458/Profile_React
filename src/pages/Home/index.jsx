import './index.css'
import Aside from '../../components/Aside'
import Card from '../../components/Card'

function Home() {

    return (
      <main>
      <Aside />
        <section id="screen_part_2">
        <div id="container_1" class="box">
          <h1>Meus Projetos</h1>
          <p>Veja Todos</p>
        </div>

        <section id="screen_part_2_1">
          <Card />
          
        </section>

      </section>
      </main>
      
    )


}

export default Home