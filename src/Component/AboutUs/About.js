import Profile from "../Profile";
import ProfileClass from "../ProfileClass";
import "./About.css";

const Section = ({ title, para }) => {
  return (
    <>
      <div>
        <h3>{title}</h3>
        <p>{para}</p>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <h1>this is heading !!!</h1>
    </>
  );
};
export default About;
