import Card from "./Card";
import StyledFeatures from "./style";

const Features = (props) => {
  return (
    <StyledFeatures id="features">
      <div className="features-headers">
        <h3 className="features-headers--header">Tailor-made Features</h3>
        <h3 className="features-headers--subheader">
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </h3>
      </div>
      <div className="features-content">
        <div className="features-content--text">
          <Card
            src="01.png"
            title="Robust Workflow"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            src="02.png"
            title="Flexibility"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            src="03.png"
            title="User friendly"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            src="04.png"
            title="Multiple layouts"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            src="05.png"
            title="Better components"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            src="06.png"
            title="Well Organised"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        {/* <div className="features-content--image composition">
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
        </div> */}
      </div>
    </StyledFeatures>
  );
};

export default Features;
