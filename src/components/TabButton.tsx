function TabButton({ text }: { text: string }) {
    return (
        <button 
            className="inline-block bg-white border border-neutral-200 
            shadow-sm px-4 py-2 md:px-3 md:py-1 rounded-2xl cursor-pointer
            text-neutral-800 font-normal hover:opacity-85"
        >
            {text}
        </button>
    )
}

export default TabButton;