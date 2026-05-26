import iconMap from '../assets/images/logo-console-plus.svg'

// interface ExtensionCardProps {
//     logo: string;
//     name: string;
//     description: string;
//     isActive: boolean;
// }


function ToggleButton() {
    return (
        <button className='inline-block w-12 h-6 bg-red-700 rounded-2xl relative'>
            <span 
                className='inline-block w-6 aspect-square 
                rounded-full bg-white absolute top-0 right-0 cursor-pointer'
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


function ExtensionCard() {
    return (
        <article className='bg-white p-5 rounded-xl shadow-sm border border-neutral-200'>
            <div>
                <div className='flex gap-4 mb-8'>
                    <figure>
                        <img src={iconMap} alt="Simple test" />
                    </figure>
                    <div>
                        <h3 className='text-neutral-800 font-bold text-lg mb-1'>DevLens</h3>
                        <p className='text-neutral-600 text-sm'>Quickly inspect page layouts and visualize element boundaries.</p>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <RemoveButton text='Remove'  />
                    <ToggleButton  />
                </div>
            </div>
        </article>
    )
}

export default ExtensionCard;