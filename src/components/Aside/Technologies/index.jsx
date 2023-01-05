import { useState, useEffect } from 'react'
import './index.css'

function Tech() {
    const [tech, setTech] = useState([])

    useEffect(() => {
         

            setTech([ 
                'Html',
                'Css',
                'JavaScript',
                'Abap' ,
                'React',
                'Node.js'
            ])
    }, [])
    

    return (
        tech.map(tech => {
            return (
                <span>{tech}</span>
            )
        }))

}
        
export default Tech