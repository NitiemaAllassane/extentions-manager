import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ExtensionCard from "./components/ExtensionCard";
import data from '../data.json';

function App() {
  const allExtensions = data.slice();

  return (
    <>
      <main className="bg-main-light min-h-dvh pb-12">
        <Header  />

        <section className="mt-24">
          <div className="container">
            <div>
              <Navigation  />
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {allExtensions.map(extension => (
                <ExtensionCard
                  logo={extension.logo}
                  name={extension.name}
                  description={extension.description}
                  isActive={extension.isActive}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
