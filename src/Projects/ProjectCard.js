import "./ProjectCard.scss";

function ProjectCard(props) {
  return (
    <div className="webProjCard">
      <img src={props.img} alt="project-pic" className="webProjCard__img" />
      <div className="webProjCard__body">
        <h2 className="webProjCard__title">{props.title}</h2>
        <p className="webProjCard__description">{props.description}</p>
        {props.link && (
          <a className="webProjCard__btn" href={props.link}>
            View Project
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
