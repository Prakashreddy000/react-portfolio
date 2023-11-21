import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import SideLinks from "./components/SideLinks";

function App() {
  return (
    <div >
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <Contact/>
      <SideLinks/>
    </div>
  );
}

export default App;
