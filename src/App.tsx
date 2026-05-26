import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ExtensionCard from "./components/ExtensionCard";

function App() {

  return (
    <>
      <main className="bg-main-light min-h-dvh pb-12">
        <Header  />

        <section className="mt-24">
          <div className="container">
            <div>
              <Navigation  />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <ExtensionCard  />
              <ExtensionCard  />
              <ExtensionCard  />
              <ExtensionCard  />
              <ExtensionCard  />
              <ExtensionCard  />
              <ExtensionCard  />
              <ExtensionCard  />
              <ExtensionCard  />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
