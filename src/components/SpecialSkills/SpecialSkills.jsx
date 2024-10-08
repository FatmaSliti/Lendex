import Section from "../Section/Section"

import styles from '../SpecialSkills/SpecialSkills.module.css'
import Button from "../UI/Button"
import SkillsCard from "./SkillsCard/SkillsCard"
import { HiOutlineArrowDownTray } from "react-icons/hi2";


const SpecialSkills = () => {
    return (
        <div className={styles.skillsWrapper}>
            <div className={styles.container}>
                <Section sectionTag='Special Skills' title='Skills that set me apart from others.' className={styles.section}>
                    <Button className={styles.button} label='Enquire Now' icon={<HiOutlineArrowDownTray  />} linkUrl='/clientProjectInfo' />
                </Section>
                <div className={styles.cards}>
                    <SkillsCard skill='Communication' progress='75%' />
                    <SkillsCard skill='Leadership' progress='80%' />
                    <SkillsCard skill='Teamwork' progress='60%' />
                    <SkillsCard skill='Flexibility' progress='95%' />
                </div>
            </div>
        </div>
    )
}

export default SpecialSkills
