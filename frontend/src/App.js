import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/Authorization/SignUp";
import LogIn from "./components/Authorization/LogIn";
import Preview from "./components/Preview/Preview";
import WebsiteW from "./WebsiteW";
import { Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";

// import BackgroundAnimation from "./components/website/BackgroundAnimation";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/portfolio" /> : <LogIn />}
        </Route>
        <Route exact path="/portfolio">
          {user ? (
            <>
              <Navbar />
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Work />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          ) : (
            <>
              <Redirect to="/" />
            </>
          )}
        </Route>
        <Route exact path="/preview">
          {user ? (
            <>
              <Preview />
            </>
          ) : (
            <>
              <SignUp />
            </>
          )}
        </Route>
        <Route exact path="/website/:id">
          <WebsiteW />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
