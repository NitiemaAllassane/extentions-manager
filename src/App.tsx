import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ExtensionCard from "./components/ExtensionCard";

function App() {

  return (
    <>
      <main className="bg-main-light min-h-dvh">
        <Header  />

        <section className="mt-24">
          <div className="container">
            <div>
              <Navigation  />
            </div>
            <div>
              <ExtensionCard  />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
