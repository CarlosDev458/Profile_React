import { Component, useState } from 'react'
import { useEffect } from 'react'
import './index.css'

function Card() {
    const [repository, setRepository] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/CarlosDev458/repos')
            .then(response => response.json())
            .then(repository => {

                setRepository(repository)
            })

        // async function fetchData() {
        //     const response = await fetch(
        //         'https://api.github.com/users/CarlosDev458/repos'
        //     )
        //     const data = await response.json()

        //     setRepository(data)
        //     console.log(repository)
        // }
        // fetchData()

    }, [])

    return (
        repository.map(repository => {
            return (

                <div className="box" id="data_proj" >
                    <div id="name_repo">
                        <img id="cotainer_img_1" src="/src/assets/Vector.png" alt=""></img>
                        <a id="url_proj" href={repository.html_url} target="_blank">
                            <p>{repository.name}</p>
                        </a>
                    </div>
                    <div id="desc_proj">
                        <p>{repository.description}</p>
                    </div>
                    <div id="all_space">
                        <div>
                            <img src="/src/assets/Vector (1).png" alt=""></img>
                            <p id="stars">{repository.stargazers_count} </p>

                            <img src="/src/assets/git-branch.png" alt=""></img>
                            <p id="forks">{repository.forks}</p>
                        </div>
                        <div>
                            <img src="/src/assets/Ellipse 2.png" alt=""></img>
                            <p id="visibility">{repository.language}</p>
                        </div>
                    </div>
                </div >


            )
        })
    )
}


export default Card

