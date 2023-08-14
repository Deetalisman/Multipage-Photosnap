import Home from "./home";
import Stories from "./stories";
import Features from "./features";
import Pricing from "./pricing";
import logo from "./images/shared/desktop/logo.svg";
import met from "./images/shared/mobile/menu.svg";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [hom, setHom] = useState(true);
  const [stor, setStor] = useState(false);
  const [feat, setFeat] = useState(false);
  const [pric, setPric] = useState(false);
  const list = document.querySelector("ul");

  function handleHom() {
    setStor(false);
    setHom(true);
    setFeat(false);
    setPric(false);
    list.classList.remove("show");
  }
  function handleStor() {
    setStor(true);
    setHom(false);
    setFeat(false);
    setPric(false);
    list?.classList.remove("show");
  }
  function handleFeat() {
    setHom(false);
    setStor(false);
    setFeat(true);
    setPric(false);
    list.classList.remove("show");
  }
  function handlePric() {
    setHom(false);
    setStor(false);
    setFeat(false);
    setPric(true);
    list.classList.remove("show");
  }
  function handleMenu() {
    const list = document.querySelector("ul");
    list.classList.toggle("show");
  }
  return (
    <div className="app">
      <Router>
        <Header
          hom={hom}
          stor={stor}
          handleStor={handleStor}
          handleHom={handleHom}
          feat={feat}
          pric={pric}
          handleFeat={handleFeat}
          handlePric={handlePric}
          handleMenu={handleMenu}
        />
        <Switch>
          <Route exact path="/">
            <Home hom={hom} setHom={setHom} />
          </Route>
          <Route path="/stories">
            <Stories setStor={setStor} stor={stor} />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
        </Switch>
        <Feet
          hom={hom}
          stor={stor}
          feat={feat}
          pric={pric}
          handleHom={handleHom}
          handleFeat={handleFeat}
          handlePric={handlePric}
          handleStor={handleStor}
        />
      </Router>
    </div>
  );
}
function Header({
  hom,
  handleHom,
  stor,
  handleStor,
  feat,
  pric,
  handleFeat,
  handlePric,
  handleMenu,
}) {
  return (
    <div className="header">
      <img src={logo} id="logo" />
      <ul>
        <li onClick={handleHom}>
          <Link className={hom && "active-top"} to="/">
            HOME
          </Link>
        </li>
        <li onClick={handleStor}>
          <Link to="/stories" className={stor && "active-top"}>
            STORIES
          </Link>
        </li>
        <li onClick={handleFeat}>
          <Link to="/features" className={feat && "active-top"}>
            FEATURES
          </Link>
        </li>
        <li onClick={handlePric}>
          <Link to="/pricing" className={pric && "active-top"}>
            PRICING
          </Link>
        </li>
      </ul>
      <button id="get">GET AN INVITE</button>
      <div>
        <img src={met} alt="met" id="met" onClick={handleMenu} />
      </div>
    </div>
  );
}

function Feet({
  hom,
  stor,
  feat,
  pric,
  handleHom,
  handleFeat,
  handlePric,
  handleStor,
}) {
  return (
    <div className="feet">
      <div className="feet1">
        <div className="feet2">
          <h1>PHOTOSNAP</h1>
          <div className="feet3">
            <FaGithub className="icons" />
            <FaTwitter className="icons" />
            <FaInstagram className="icons" />
            <FaFacebook className="icons" />
            <FaLinkedin className="icons" />
          </div>
        </div>
        <div className="feet4">
          <li onClick={handleHom}>
            <Link className={hom && "active-bottom"} to="/">
              HOME
            </Link>
          </li>
          <li onClick={handleStor}>
            <Link to="/stories" className={stor && "active-bottom"}>
              STORIES
            </Link>
          </li>
          <li onClick={handleFeat}>
            <Link to="/features" className={feat && "active-bottom"}>
              FEATURES
            </Link>
          </li>
          <li onClick={handlePric}>
            <Link to="/pricing" className={pric && "active-bottom"}>
              PRICING
            </Link>
          </li>
        </div>
      </div>
      <div className="feet5">
        <span>
          <p>GET AN INVITE</p> <FaArrowRight id="arrow" />
        </span>
        <p className="feet6">
          {" "}
          <FaCopyright className="icon" />
          2023 All Rights Reserved
        </p>
      </div>
    </div>
  );
}
