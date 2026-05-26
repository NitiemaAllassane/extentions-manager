function ActionButton({ text }: { text: string }) {
    return (
        <button 
            className="inline-block bg-white border border-neutral-100 
            shadow-sm px-3 py-1 rounded-2xl cursor-pointer
            text-neutral-800 font-normal"
        >
            {text}
        </button>
    )
}

export default ActionButton;