import clsx from "clsx";

interface ExtensionCardProps {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}


function ToggleButton({ isActive }: { isActive: boolean }) {
    return (
        <button className={clsx(
            'inline-block w-12 h-6 bg-neutral-300 rounded-2xl relative',
            isActive && 'bg-red-700'
        )}>
            <span 
                className={clsx(
                    'inline-block w-6 aspect-square rounded-full bg-white absolute top-0 cursor-pointer',
                    isActive ? 'right-0' : 'left-0'
                )}
            >
            </span>
        </button>
    )
}

function RemoveButton({ text }: { text: string }) {
    return (
        <button 
            className="inline-block bg-white border border-neutral-300 
            px-3 py-1 rounded-2xl cursor-pointer
            text-neutral-800 font-normal"
        >
            {text}
        </button>
    )
}


function ExtensionCard({
    logo,
    name,
    description,
    isActive
} : ExtensionCardProps
) {
    return (
        <article className='bg-white p-5 rounded-xl shadow-sm border border-neutral-200'>
            <div>
                <div className='flex gap-4 mb-8'>
                    <figure>
                        <img src={logo} alt="Simple test" />
                    </figure>
                    <div>
                        <h3 className='text-neutral-800 font-bold text-lg mb-1'>
                            {name}
                        </h3>
                        <p className='text-neutral-600 text-sm'>
                            {description}
                        </p>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <RemoveButton text='Remove'  />
                    <ToggleButton isActive={isActive}  />
                </div>
            </div>
        </article>
    )
}

export default ExtensionCard;