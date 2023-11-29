import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import SP from "./components/sP/SP"
import Sidebar from "./components/navbar/sidebar/Sidebar";
import Contact from "./components/contact/Contact";
import Port from "./components/port/Port";

const App = () => {
  return (
    <div className="appContainer">
      <section id="Homepage"> 
        <Navbar/>
        <Hero/>
        <Sidebar/>
      </section>

      <section id="Projects" >
        <SP type="services"/>
        <Sidebar/>
        </section>

      <div id="Portfolio Projects">
        <Port/>
        <Sidebar/>
      </div>

      <section id="Contact">
        <Contact/>
      </section>
    </div>
  );
};

export default App;
