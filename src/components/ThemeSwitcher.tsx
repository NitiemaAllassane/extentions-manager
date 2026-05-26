import moonIcon from '../assets/images/icon-moon.svg';
// import sunIcon from '../assets/images/icon-sun.svg';

function ThemeSwitcher() {
    return (
        <button className='bg-neutral-100 p-2 rounded-md cursor-pointer'>
            <img src={moonIcon} alt="Moon Icon" />
        </button>
    )
}

export default ThemeSwitcher;