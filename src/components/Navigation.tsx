import ActionButton from "./ActionButton";


function Navigation() {
    return (
        <nav>
            <div className="container flex items-center justify-between">
                <h1 className="font-bold text-3xl text-neutral-800">
                    Extensions List
                </h1>
                <ul className="flex items-center gap-4">
                    <ActionButton text="All"  />
                    <ActionButton text="Active"  />
                    <ActionButton text="Inactive"  />
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;