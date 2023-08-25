import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar src="https://picsum.photos/200" />
      <div className="data">
        <Intro
          name="Olatunbosun Treasure-Praise"
          content="Full-stack Web developer and teacher at udemy. When not coding or preparing a course, I like ot play video games"
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
        {/* <SkillList  />
        <SkillList skill="Github" emoji="✅" bg="green" /> */}
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img alt="random" className="avatar" src={props.src} />;
}

function Intro(props) {
  return (
    <>
      <h1>{props.name} </h1>
      <p>{props.content}</p>
    </>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="HTML +CSS" emoji="✅" bg="red" />
      <Skill skill="Javascript" emoji="💀" bg="blue" />
      <Skill skill="Github" emoji="🌏" bg="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: `${props.bg}` }} className="skill">
      {props.skill}
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
