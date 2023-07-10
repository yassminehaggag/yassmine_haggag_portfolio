import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Carousel.scss";
// import Modal from "../Modal/Modal";

function Carousel(props) {
  const [index, setIndex] = useState(2);
  const [modal, setModal] = useState(false);
  const [setId] = useState(-1);

  const getMod = (n, m) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  };
  
  useEffect(() => {
    if (!modal)
      setTimeout(() => {
        setIndex((index + 1) % 5);
      }, 3000);
  }, [index, modal]);

  return (
    <div>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="carousel">
        {props.items.map((item, i) => {
          const indexLeft = getMod(index - 1, 5);
          const indexRight = getMod(index + 1, 5);

          let className = "projectCard";

          if (i === index) {
            className = "projectCard projectCard--active";
          } else if (i === indexRight) {
            className = "projectCard projectCard--right";
          } else if (i === indexLeft) {
            className = "projectCard projectCard--left";
          } else className = "projectCard--hidden";
          if (props.type === "cards")
            return (
              <Link to={`/${item.to}`}>
                <div
                  className={`${className} projCard projectCard__${item.id}`}
                >
                  <div className="titleHolder">
                    <h1>{item.title}</h1>
                  </div>
                </div>
              </Link>
            );
          else
            return (
              <>
                <div
                  className={`${className} certificateCard certificateCard__${item.id}`}
                  onClick={() => {
                    setModal(true);
                    setId(item.id);
                  }}
                >
                  <div className="titleHolder">
                    <h1>{item.title}</h1>
                  </div>
                </div>
              </>
            );
        })}
      </div>
      {/* {modal && <Modal id={id} />} */}
    </div>
  );
}

export default Carousel;
