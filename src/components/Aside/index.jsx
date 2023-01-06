import { Component, useState, useEffect } from 'react'
import Tech from './Technologies/index'
import styles from './index.module.css'


function Aside() {

  const [user, setUser] = useState({
    avatar: '',
    nome: '',
    bio: '',
    empresa: '',
    location: '',
    github: '',

  })

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/CarlosDev458'
      )
      const data = await response.json()

      setUser({
        avatar: data.avatar_url,
        login: data.login,
        nome: data.name,
        bio: data.bio,
        empresa: data.company,
        location: data.location,
        github: data.login,
        site: 'https://lab2dev.com/',
        address: 'https://goo.gl/maps/hRy9so1Z3owcPHZK8',
        github: 'https://github.com/CarlosDev458',
        email: 'Carlosed3578@gmail.com',
        link_email: "https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=GTvVlcSKkVRkkQcjTNbZnNqWpKpSHlzdSCkQTztRBxLPSMKLQCLGKkbFHWbWDLwdBjlDHZPMHfxvW"
      })

    }
    fetchData()
  }, [])

  return (

    <section className={styles.cards_content} >
      <div className={styles.block_1}>
        <img className={styles.block_1_img_1} src={user.avatar} alt=""></img>
        <h1>{user.nome}</h1>
        <p>{user.bio}</p>
      </div>


      <div className={styles.box}>
        <div className={styles.block_2_itens}>
          <a target="_blank" href={user.site} >
            <img src="/src/assets/briefcase.png" alt=""></img>
            <p id="info_1">{user.empresa}</p>
          </a>
          <a target="_blank" href={user.address} >
            <img src="/src/assets/map-pin.png" alt=""></img>
            <p id="info_2">{user.location}</p>
          </a>
          <a target="_blank" href={user.github}>
            <img src="/src/assets/github.png" alt=""></img>
            <p id="info_3">{user.login}</p>
          </a>
          <a target="_blank" href={user.link_email} >
            <img src="/src/assets/mail.png" alt=""></img>
            <p id="info_4">{user.email}</p>
          </a>
        </div>
      </div>

      <div className={styles.box} id="block_3">
        <div className={styles.block_3_itens}>
          <h1 className={styles.titles}>Tecnologias</h1>
          <div className={styles.block_3_list_1}>

            <Tech />

          </div>
        </div>
      </div>
      <div className={styles.box} id="block_4">
        <div className={styles.block_4_itens}>
          <h1 className={styles.titles}>Experiência</h1>
          <div id="block_4_list-1">
            <ul>
              <li id="block_4_item_1"> Lab2Dev </li>
              <li className={styles.item_list} id="block_4_item_4"> 2022 - 3 Meses </li>
              <li className={styles.item_list} id="block_4_item_3"> Prodev - ABAP</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.box} id="block_5">
        <div className={styles.block_5_itens}>
          <h1 className={styles.titles}>Educação</h1>
          <div id="list-1">
            <ul>
              <li id="block_5_item_1"> ITB- Brasílio Flores </li>
              <li className={styles.item_list}> 2022 - 3 Anos </li>
              <li className={styles.item_list}> Informática</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Aside