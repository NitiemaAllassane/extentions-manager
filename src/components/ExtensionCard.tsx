import RemoveButton from "./RemoveButton";
import ToggleButton from "./ToggleButton";
import type { ExtensionCardProps } from "../types/types";


function ExtensionCard({
    logo,
    name,
    description,
    isActive
} : ExtensionCardProps
) {
    return (
        <article className='bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-600'>
            <div>
                <div className='flex gap-4 mb-8'>
                    <figure>
                        <img src={logo} alt="Simple test" />
                    </figure>
                    <div>
                        <h3 className='text-neutral-800 dark:text-white font-bold text-lg mb-1'>
                            {name}
                        </h3>
                        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
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