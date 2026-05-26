import ThemeSwitcher from "./ThemeSwitcher";
import appLogo from "../assets/images/logo.svg"


export default function Header() {
    
    return (
        <header>
            <div className="container bg-white">
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