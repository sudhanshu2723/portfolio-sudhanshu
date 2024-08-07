import Image from "next/image"
import { educationDetails } from "../../../util/constant"
import styles from "./education.module.css"
import clgImg from "../../../public/clgImg.png"
export default function Education (){
    return (
        <section id="education" className={styles.wrapper}>
            <div>
            <div className={styles.aboutLine}>
                <p>EDUCATION</p>
                <div className={styles.lineStyle}/>
            </div>
            <div >
                {
                    educationDetails.map(edu=>(
                        <div className={styles.edu}>
                            <Image src={edu.id=="bit-mesra" && clgImg} alt="clgImg" onClick={()=>{window.open(edu.link,"_blank")}} width={100} height={80}/>
                            <div className={styles.eduData}>
                            <p className={styles.firstheading}>{edu.name}</p>
                            <p className={styles.subheading}>{edu.degree}</p>
                            <p className={styles.midheading}>{edu.duration}</p>
                            <p className={styles.lastheading}>CGPA - {edu.cgpa}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </section>
    )
}