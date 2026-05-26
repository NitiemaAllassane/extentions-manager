import TabButton from "./TabButton";


function Navigation() {
    return (
        <nav>
            <div className="container flex items-center justify-between">
                <h1 className="font-bold text-3xl text-neutral-800">
                    Extensions List
                </h1>
                <ul className="flex items-center gap-4">
                    <TabButton text="All"  />
                    <TabButton text="Active"  />
                    <TabButton text="Inactive"  />
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;