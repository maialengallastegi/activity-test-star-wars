import styles from '../styles/Character.module.css'

export default function Character({character}) {

  return (
    <div className={styles.character}>
        <h2>{character.name}</h2>
        <ul>
            <li>Height: {character.height}</li>
            <li>Gender: {character.gender}</li>
            <li>Hair Color: {character.hair_color}</li>
            <li>Skin Color: {character.skin_color}</li>
            {character.starships.map(item=>
      
                <li>{item}</li>      
                // app(item)
            )}
        </ul>
    </div>
  )
}

// async function app(item){  
//   const data = await fetch(item)
//   const starships = await data.json()
 
//   return {
//     props:
//       console.log(starships.name)
//   }

// }
