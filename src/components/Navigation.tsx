import TabButton from "./TabButton";


interface NavigationProps {
    currentTab: string;
    setCurrentTab: React.Dispatch<React.SetStateAction<"all" | "active" | "inactive">>;
}

function Navigation({ currentTab, setCurrentTab }: NavigationProps) {
    return (
        <nav>
            <div className="container flex flex-col md:flex-row items-center justify-between">
                <h1 className="font-bold mb-6 text-3xl text-neutral-800 dark:text-white">
                    Extensions List
                </h1>
                <ul className="flex items-center gap-4">
                    <TabButton 
                        text="All" 
                        currentTab={currentTab} 
                        onButtonClick={() => setCurrentTab('all')} 
                     />

                     <TabButton 
                        text="Active" 
                        currentTab={currentTab} 
                        onButtonClick={() => setCurrentTab('active')} 
                     />

                     <TabButton 
                        text="Inactive" 
                        currentTab={currentTab} 
                        onButtonClick={() => setCurrentTab('inactive')} 
                     />
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;