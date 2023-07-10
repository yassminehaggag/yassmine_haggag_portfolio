import IPprojectCard from "./IPprojectCard";
import IPprojects from "./IPprojects";
import ProjectCard from "./ProjectCard";

function Projects(props) {
  return (
    <>
      <section>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        {props.large && (
            <IPprojects>
              {props.data.map((data, i) => {
                return <IPprojectCard key={i} item={data} />;
              })}
            </IPprojects>
          )}
        <div className="wrapper">
          {!props.large &&
            props.data.map((project, i) => {
              return (
                <ProjectCard
                  key={project + i}
                  img={project.img}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}

export default Projects;
