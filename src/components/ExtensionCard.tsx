import iconMap from '../assets/images/logo-console-plus.svg'
import ActionButton from './ActionButton';


function ToggleButton() {
    return (
        <button>
            toggle
        </button>
    )
}


function ExtensionCard() {
    return (
        <article>
            <div>
                <div>
                    <figure>
                        <img src={iconMap} alt="Simple test" />
                    </figure>
                    <div>
                        <h3>DevLens</h3>
                        <p>Quickly inspect page layouts and visualize element boundaries.</p>
                    </div>
                </div>

                <div>
                    <ActionButton text='Remove'  />
                    <ToggleButton  />
                </div>
            </div>
        </article>
    )
}

export default ExtensionCard;