// import moonIcon from '../assets/images/icon-moon.svg';
import sunIcon from '../assets/images/icon-sun.svg';

function ThemeSwitcher() {
    return (
        <button className='bg-neutral-100 p-2 rounded-md cursor-pointer hover:bg-neutral-300 dark:bg-neutral-700'>
            <img src={sunIcon} alt="Moon Icon" />
        </button>
    )
}

export default ThemeSwitcher;