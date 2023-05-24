import './styles.css';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import { useState } from "react"; 



export default function App() {
  const [skills, setSkills] = useState([
    { name: 'JavaScript', level: 4},
    { name: 'HTML/CSS', level: 3},
    { name: 'Express', level: 2},
    { name: 'Node.js', level: 3},
    { name: 'React', level: 2},
  ])

const addSkill = (newSkill) => {
  setSkills([...skills, newSkill])
  console.log(newSkill)
}

  return (
    <>
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr></hr>
      <NewSkillForm addSkill={addSkill}></NewSkillForm>
    </div>
    </>
  );
}

// export default App;
