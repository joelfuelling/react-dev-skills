import './App.css';
import './styles.css';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';

const skills = [
  { name: 'JavaScript', level: 4},
  { name: 'HTML/CSS', level: 3},
  { name: 'Express', level: 2},
  { name: 'Node.js', level: 3},
  { name: 'Mongoose', level: 2},
  { name: 'MongoDb', level: 2},
  { name: 'Git', level: 3},
  { name: 'Python', level: 4},
  { name: 'Django', level: 3},
  { name: 'React', level: 2},
]

export default function App() {
  return (
    <>
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr></hr>
      <NewSkillForm />
    </div>
    </>
  );
}

// export default App;
