import React from 'react'

const Obito = ({ name }) => {
    console.log(name);
    return (
        <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img src="https://staticg.sportskeeda.com/editor/2022/08/812fc-16598097467269.png?w=640" alt="" className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                           {name}
                        </div>
                       
                    </figcaption>
                </div>
            </figure>

        </>

    )
}

export default Obito