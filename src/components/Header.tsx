import ThemeSwitcher from "./ThemeSwitcher";
import appLogo from "../assets/images/logo.svg"


export default function Header() {
    
    return (
        <header className="sticky top-6 z-50">
            <div className="container bg-white p-3 rounded-2xl shadow-2xs">
                <div className="flex items-center justify-between">
                    <picture>
                        <img src={appLogo} alt="App Principal Logo" />
                    </picture>
                    <div>
                        <ThemeSwitcher  />
                    </div>
                </div>
            </div>
        </header>
    )
}