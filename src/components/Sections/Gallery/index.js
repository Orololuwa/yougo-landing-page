import Card from "../Features/Card";
import Styled from "./style";

const Gallery = (props) => {
  return (
    <Styled id="gallery">
      <div className="section-image">
        <img src="/phone2.png" alt="a mockup of cloudFood's app" />
      </div>
      <div className="section-textContent">
        <div className="section-textContent--titles">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="section-textContent--cards cc">
          <Card />
          <Card />
        </div>
        <div className="section-textContent--cards">
          <img src="/playstore.png" alt="playstore" />
          <img src="/appstore.png" alt="appstore" />
        </div>
      </div>
    </Styled>
  );
};

export default Gallery;
