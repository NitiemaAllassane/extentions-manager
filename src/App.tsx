import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ExtensionCard from "./components/ExtensionCard";

function App() {

  return (
    <>
      <main className="bg-main-light min-h-dvh">
        <Header  />

        <div className="container">
          <div>
            <Navigation  />
          </div>
          <div>
            <ExtensionCard  />
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
