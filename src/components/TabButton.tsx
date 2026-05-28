import clsx from "clsx";

interface TabButtonProps { 
    text: string, 
    currentTab: string, 
    onButtonClick: () => void 
}

function TabButton({ text, currentTab, onButtonClick }: TabButtonProps) {
    return (
        <button 
            className={clsx(
                `inline-block shadow-sm px-4 py-2 md:px-3 md:py-1 rounded-2xl cursor-pointer
                font-normal hover:opacity-85 dark:bg-neutral-700 dark:hover:opacity-100`,
                currentTab === text.toLowerCase() ? ` bg-red-700 text-white dark:bg-red-500 dark:text-neutral-800` 
                : `bg-white border border-neutral-200 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-600`
            )}
            onClick={onButtonClick}
        >
            {text}
        </button>
    );
}

export default TabButton;