import StyledStories from "./style";
import Card from "./Card";
import Quote from "assets/quote.svg";

const Stories = () => {
  return (
    <StyledStories>
      <div className="stories-left">
        <img src={Quote} alt="quote" className="quote" />
        <div className="stories-headers">
          <h2 className="stories-headers--header">
            Real Stories from Real Customers
          </h2>
          <p className="stories-headers--subheader">
            Get inspired by these stories.
          </p>
        </div>
        <Card
          logo="/Hubspot_Logo.png"
          body="To quickly start my startup landing page design, I was looking for a
        landing page UI Kit. Landify is one of the best landing page UI kit I
        have come across. It’s so flexible, well organised and easily editable."
          customerName="Floyed Miles"
          customerTitle="Vice President, GoPro"
        />
      </div>
      <div className="stories-right">
        <Card
          logo="/Airbnb_Logo.png"
          body="I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
          width="25rem"
          customerName="Jane Cooper"
          customerTitle="CEO, Airbnb"
        />
        <Card
          logo="/Fedex_Logo.png"
          body="Landify saved our time in designing my company page."
          customerName="Kristin Watson"
          customerTitle="C0-Founder, Fedex"
        />
      </div>
    </StyledStories>
  );
};

export default Stories;
