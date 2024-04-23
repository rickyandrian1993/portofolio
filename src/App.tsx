import "./App.css";
import ProfilePicture from "./assets/profile.jpg";

function App() {
  return (
    <main>
      <section id="home" className="home-section">
        <div className="profile-display">
          <div className="profile-display-in">
            <img src={ProfilePicture} title="" alt="" />
          </div>
        </div>
        <h1>Ricky Andrian</h1>
      </section>
    </main>
  );
}

export default App;
