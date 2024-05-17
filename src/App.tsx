// import AnimatedText from "./components/AnimatedText";
// import Contact from "./sections/Contact";
import ProfilePicture from "./sections/ProfileCard";

function App() {
  return (
    <main>
      <section id="home" className="home-section">
        <ProfilePicture />
        {/* <h1 className="text-5xl font-bold pt-3 text-center">Ricky Andrian</h1>
        <AnimatedText
          text="I'm a Web Developer"
          className="text-2xl py-3 text-center"
        />
        <Contact /> */}
      </section>
    </main>
  );
}

export default App;
