import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ExtensionCard from "./components/ExtensionCard";
import data from '../data.json';

function App() {
  const allExtensions = data.slice();

  return (
    <>
      <main className="min-h-dvh pb-12">
        <Header  />

        <section className="mt-20 md:mt-24">
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

      <footer className="py-4">
        <div className="container">
          <p className="text-sm text-center">
            Challenge by 
            <a 
              href="https://www.frontendmentor.io?ref=challenge" 
              target="_blank" 
              className="underline text-red-400"
            >Frontend Mentor</a>. 
            Coded by 
            <a 
              href="https://nitiema-allassane.vercel.app/about" 
              target="_blank" 
              className="underline text-red-400"
            >Nitiema Allassane</a>.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App;
