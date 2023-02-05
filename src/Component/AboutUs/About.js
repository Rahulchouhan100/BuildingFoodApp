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
      <Section
        title={"About Onifoods"}
        para={"we're good at food delivering"}
      />
      <Section title={"Team Onifoods"} para={"we're good at team works"} />
    </>
  );
};
export default About;
