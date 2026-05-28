import clsx from "clsx";


function ToggleButton({ isActive }: { isActive: boolean }) {
    return (
        <button className={clsx(
            'inline-block w-12 h-6 bg-neutral-300 dark:bg-neutral-600 rounded-2xl relative cursor-pointer',
            isActive ? 'bg-red-700 hover:bg-red-400 dark:bg-red-400 dark:hover:bg-red-500' : 'hover:bg-neutral-400 dark:hover:bg-neutral-500'
        )}>
            <span 
                className={clsx(
                    'inline-block w-6 aspect-square rounded-full bg-white absolute top-0',
                    isActive ? 'right-0' : 'left-0'
                )}
            >
            </span>
        </button>
    );
}

export default ToggleButton;