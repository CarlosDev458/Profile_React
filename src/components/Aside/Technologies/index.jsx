import { useState, useEffect } from 'react'
import styles from  './index.module.css'

function Tech() {
    const [tech, setTech] = useState([])

    useEffect(() => {
         

            setTech([ 
                'Html',
                'Css',
                'JavaScript',
                'Abap' ,
                'React',
                'Node.js',
            ])
    }, [])
    

    return (
        tech.map(tech => {
            return (
                <span className={styles.langs_tech}>{tech}</span>
            )
        }))

}
        
export default Tech