import AnimatedText from "./components/AnimatedText";
import Contact from "./components/Contact";
import DigitalClock from "./components/DigitalClock";
import ProfilePicture from "./components/Profile";

function App() {
  return (
    <main>
      <section id="home" className="home-section">
        <ProfilePicture />
        <h1 className="text-5xl font-bold pt-6 text-center">Ricky Andrian</h1>
        <AnimatedText
          text="I'm a Web Developer"
          className="text-2xl py-3 text-center"
        />
        <Contact />
        <br />
        <DigitalClock />
      </section>
    </main>
  );
}

export default App;
