import Image from "next/image"
import { skills } from "../../../util/constant"
import styles from "./skills.module.css"
import images from "../../../public/ndex"
export default function Skills(){
    return (
        <section id= "skills" className={styles.divWrapper}>
             <div className={styles.aboutLine}>
                <p>SKILLS</p>
                <div className={styles.lineStyle}/>
            </div>
            <div className={styles.mainWrapper}>
                {
                    skills.map((skill,index)=>(         
                        <div key={index} className={`${styles.wrapper}`} style={{ animationDelay: `${index * 0.1}s`}}>
                        <h4 className={styles.Details}>{skill.tech}</h4>
                        <div className={styles.subDetails}>
                        {skill.tools.map(tool=>(
                            <Image alt="skillImg" src={images[tool.img]} className={styles.img} width={60} height={60}/>       
                        ))}
                        </div>
                    </div>
                    ))
                }
        </div>
        </section>
        
    )
}