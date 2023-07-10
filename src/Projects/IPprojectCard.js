import "./IPprojects.scss";

function IPprojectCard(props) {
  return (
    <div className="IPprojCard">
      <h2 className="IPprojCard__title">{props.item.title}</h2>
      <img src={props.item.img} alt="project-pic" className="IPprojCard__img" />
      <h3 className="IPprojCard__title">Highlights</h3>
      <ul className="IPprojCard__list">{props.item.highlights.map((highlight, i) => {
            return <li key={i}>{highlight}</li>;
          })}</ul>
    </div>
  );
}

export default IPprojectCard;
