import "./SkillListItem.css"

export default function SkillListItem({text, level}) {
    return (
        <li className="skillList">{text}<span className="level">LEVEL {level}</span> 
        </li>
    )
}