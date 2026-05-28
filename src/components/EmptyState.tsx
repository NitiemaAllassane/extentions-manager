import { CircleOff } from "lucide-react";

function EmptyState({ title, message }: { title: string, message: string }) {
    return (
        <div className="py-24 flex items-center justify-center">
            <div className="text-center">
                
                <span
                    className="
                        mx-auto
                        flex
                        size-14
                        items-center
                        justify-center
                        rounded-full
                        bg-neutral-200
                        dark:bg-neutral-800
                    "
                >
                    <CircleOff className="text-neutral-600 dark:text-neutral-300" />
                </span>

                <h2 className="mt-4 text-lg font-semibold dark:text-white">
                    {title}
                </h2>

                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {message}
                </p>

            </div>
        </div>
    )
}

export default EmptyState;