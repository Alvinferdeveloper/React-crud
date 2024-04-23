import styles from '../styles/index.module.css'
import {motion} from "framer-motion"

export default function ModeEdit(){
    return (
        <motion.div 
        className={styles.task__alert}
        animate={{ 
            x: 0,
            y: "100%",
            rotate: 0,
            }}
        exit={{y:0}}
        
        >
            <h4 className={styles.alert__text}>Changed to Mode edit!!!</h4>
        </motion.div>
    )
}