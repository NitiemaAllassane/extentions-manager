import moonIcon from '../assets/images/icon-moon.svg';
import sunIcon from '../assets/images/icon-sun.svg';
import { useDarkMode } from '../hooks/useDarkMode';

function ThemeSwitcher() {
    const { isDark, toggleDarkMode } = useDarkMode();

    return (
        <button 
            className='bg-neutral-100 p-2 rounded-md cursor-pointer hover:bg-neutral-300 
            dark:bg-neutral-700 dark:hover:bg-neutral-600'
            onClick={toggleDarkMode}
        >
            {isDark ? (
                <img src={sunIcon} alt="Moon Icon" />
            ) : (
                <img src={moonIcon} alt="Moon Icon" />
            )}
        </button>
    )
}

export default ThemeSwitcher;