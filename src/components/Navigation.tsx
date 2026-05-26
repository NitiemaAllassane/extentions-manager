import ActionButton from "./ActionButton";


function Navigation() {
    return (
        <nav>
            <div className="container">
                <h1>Extensions List</h1>
                <ul>
                    <ActionButton text="All"  />
                    <ActionButton text="Active"  />
                    <ActionButton text="Inactive"  />
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;