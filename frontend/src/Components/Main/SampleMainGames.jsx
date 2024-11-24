import styles from './Main.module.css'

let SampleMainGames = (props)=>{
    return(
        <div className={styles.SampleMainGames}>
            <img className={styles.SampleMainGames_img} src={props.image}/>
            <p>{props.name}</p>
        </div>
    )
}

export default SampleMainGames;