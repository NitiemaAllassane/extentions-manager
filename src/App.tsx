import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ExtensionCard from "./components/ExtensionCard";
import data from '../data.json';
import { useState } from "react";
import EmptyState from "./components/EmptyState";

function App() {
  const [ currentTab, setCurrentTab ] = useState<'all' | 'active' | 'inactive'>('all');
  const [ extensions, setExtensions ] = useState(data.slice());
  const activeExtensions = extensions.filter( extension => ( extension.isActive === true));
  const inactiveExtensions = extensions.filter( extension => ( extension.isActive === false));



  const toggleExtensionStatus = (name: string) => {
    const updatedExtensions = extensions.map(extension =>
      extension.name === name
        ? { ...extension, isActive: !extension.isActive }
        : extension
    );

    setExtensions(updatedExtensions);
  }


  const removeExtension = (name: string) => {
    const removedExtensions = extensions.filter(extension => extension.name !== name);
    setExtensions(removedExtensions);
  }

  return (
    <>
      <main className="min-h-dvh pb-12">
        <Header  />

        <section className="mt-20 md:mt-24">
          <div className="container">
            <div>
              <Navigation 
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
            </div>

            {
              currentTab === "all" ? (
                <div>
                  {extensions.length ? (
                    /* All extensions */
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {extensions.map(extension => (
                        <ExtensionCard
                          key={extension.name}
                          logo={extension.logo}
                          name={extension.name}
                          description={extension.description}
                          isActive={extension.isActive}
                          toggleStatus={() => toggleExtensionStatus(extension.name)}
                          removeExtension={() => removeExtension(extension.name)}
                        />
                      ))}
                    </div>
                    ) : (
                      <EmptyState 
                        title="No extensions"
                        message="There are currently no extensions available."
                      />
                  )}
                </div>

              ) : currentTab === "active" ? (

                <div>
                  {activeExtensions.length ? (
                    /* Active extensions */
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {activeExtensions.map(extension => (
                        <ExtensionCard
                          key={extension.name}
                          logo={extension.logo}
                          name={extension.name}
                          description={extension.description}
                          isActive={extension.isActive}
                          toggleStatus={() => toggleExtensionStatus(extension.name)}
                          removeExtension={() => removeExtension(extension.name)}
                        />
                      ))}
                    </div>
                    ) : (
                      <EmptyState 
                        title="No active extensions"
                        message="Enable an extension to see it appear here." 
                      />
                  )}
                </div>

              ) : (

                <div>
                  {inactiveExtensions.length ? (
                    /* Inactive extensions */
                  <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {inactiveExtensions.map(extension => (
                      <ExtensionCard
                        key={extension.name}
                        logo={extension.logo}
                        name={extension.name}
                        description={extension.description}
                        isActive={extension.isActive}
                        toggleStatus={() => toggleExtensionStatus(extension.name)}
                        removeExtension={() => removeExtension(extension.name)}
                      />
                    ))}
                  </div>
                  ) : (
                    <EmptyState 
                      title="No inactive extensions" 
                      message="All your extensions are currently active."
                    />
                  )}
                </div>
              )
          }
            
          </div>
        </section>
      </main>

      <footer className="py-4 dark:text-white">
        <div className="container">
          <p className="text-sm text-center">
            Challenge by {' '}
            <a 
              href="https://www.frontendmentor.io?ref=challenge" 
              target="_blank" 
              className="underline text-red-400"
            >Frontend Mentor</a>. 
            Coded by {' '}
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
