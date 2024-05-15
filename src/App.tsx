import "./App.css";
import Contact from "./sections/Contact";
import ProfilePicture from "./sections/ProfileCard";

function App() {
  return (
    <main>
      <section id="home" className="home-section">
        <ProfilePicture />
        <h1 className="text-5xl font-bold pt-3">Ricky Andrian</h1>
        <h2 className="text-2xl py-3">I'm a Web Developer</h2>
        <Contact />
      </section>
    </main>
  );
}

export default App;
