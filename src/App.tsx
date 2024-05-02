import "./App.css";
import ProfilePicture from "./components/ProfilePicture";

function App() {
  return (
    <main>
      <section id="home" className="home-section">
        <ProfilePicture />

        <h1>Ricky Andrian</h1>
        <h2>I'm a Web Developer</h2>
      </section>
    </main>
  );
}

export default App;
