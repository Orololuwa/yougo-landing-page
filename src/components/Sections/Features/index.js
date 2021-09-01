const { default: Card } = require("./Card");
const { default: StyledFeatures } = require("./style");

const Features = (props) => {
  return (
    <StyledFeatures id="features">
      <div className="features-headers">
        <h3 className="features-headers--header">Features</h3>
      </div>
      <div className="features-content">
        <div className="features-content--text">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="features-content--image composition">
          <img
            srcSet="food1.jpg 300w, food1-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="food 1"
            className="composition__photo composition__photo--p1"
            src="/food1-large.jpg"
          />

          <img
            srcSet="food2.jpg 300w, food2-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="food 2"
            className="composition__photo composition__photo--p2"
            src="/food2-large.jpg"
          />

          <img
            srcSet="food3.jpg 300w, food3-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="food 3"
            className="composition__photo composition__photo--p3"
            src="/food3-large.jpg"
          />
        </div>
      </div>
    </StyledFeatures>
  );
};

export default Features;
