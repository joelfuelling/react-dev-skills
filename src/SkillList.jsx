import SkillListItem from './SkillListItem';

export default function SkillList({skills}){
    return (
        <>
        <ul>
           { skills.map((skill, index) => (
            <SkillListItem text={skill.name} level={skill.level} index={index} key={index} />
            ))  
            }
        </ul>
        </>
    )
}