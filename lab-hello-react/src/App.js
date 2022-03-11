import "./App.css";
import logo from "./images/logo.png";
import menu from "./images/menu.png";
import components from "./images/components.png";
import declarative from "./images/declarative.png";
import jsx from "./images/jsx.png";
import singleway from "./images/singleway.png";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="navBar">
          <img className="navPic" src={logo} alt="logo" />
          <img className="navPic" src={menu} alt="menu" />
        </div>
        <div className="text">
          <div className="mainLetter">
            <h1>Say hello to</h1>
            <h1>ReactJS</h1>
          </div>
          <br />
          <div className="someText">
            <h4>You will learn how to use</h4>
            <h4>the most popular frontend library</h4>
            <h4>and become a super Ninja developer</h4>
          </div>
          <div className="awesome">
            <button id="awesomeText">Awesome!</button>
          </div>
        </div>
      </div>
      <div className="boxes">
        <div className="declarative">
        <img className="boxPic" src={declarative} alt="declarative" />
        <h2>Declarative</h2>
        <p>React makes it</p>
        <p>painless to create</p>
        <p>interactive UIs.</p>
        </div>
        <div className="components">
        <img className="boxPic" src={components} alt="components" />
        <h2>Components</h2>
        <p>Build encapsulated</p>
        <p>components that</p>
        <p>manage their state.</p>
        </div>
        <div className="single">
        <img className="boxPic" src={singleway} alt="singleway" />
        <h2>Single-Way</h2>
        <p>A set of immutable</p>
        <p>values are passed to</p>
        <p>the component's.</p>
        </div>
        <div className="jsx">
        <img className="boxPic" src={jsx} alt="jsx" />
        <h2>JSX</h2>
        <p>Statically-typed</p>
        <p>designed to run on</p>
        <p>modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
