import Nav from "./components/Navigation";
import GlobalStyles from "./Global.js";
import Header from "components/Header";
import Features from "components/Sections/Features";
import Gallery from "components/Sections/Gallery";
import Footer from "components/Footer";
import Stories from "components/Sections/Stories";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Nav />
      </Header>
      <Features />
      <Stories />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
