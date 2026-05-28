function RemoveButton({ text }: { text: string }) {
    return (
        <button 
            className="inline-block bg-white border border-neutral-300 
            px-3 py-1 rounded-2xl cursor-pointer text-neutral-800 font-normal hover:bg-red-700 dark:hover:bg-red-500 
            hover:text-white hover:border-transparent dark:hover:text-neutral-800 dark:bg-neutral-700 dark:text-white"
        >
            {text}
        </button>
    );
}

export default RemoveButton;