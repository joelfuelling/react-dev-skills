import './NewSkillForm.css'
import {useState} from 'react';

export default function NewSkillForm({addSkill}) {
    const [newSkill, setNewSkill] = useState({name:'', level: 3});
    
    function handleAddSkill(e) {
        e.preventDefault()
        console.log("ADDING TODO")
        addSkill(newSkill)
        setNewSkill({
            name: '',
            level: ''
        })
    }

    function handleChange(e) {
        setNewSkill({
            ...newSkill,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className='NewSkillForm' onSubmit={handleAddSkill}>
            <label htmlFor="input">Skill <input type="text" name="name" value={newSkill.name} onChange={handleChange} placeholder="Enter New Skill" required
  pattern=".{4,}"/>
            </label>
            <label htmlFor="select">Level 
                <select input type="text" name="level" value={newSkill.level} onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button type="submit">ADD SKILL</button>
            </label>
        </form> 
    )
}