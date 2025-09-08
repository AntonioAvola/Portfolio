


export function Tools({technologies}) {
    if(!technologies || technologies.length === 0) return null;

    return (
       <div className="flex justify-start  overflow-hidden gap-2 ">
            {technologies.map((tech, index) => (
                <div
                    key={index}
                    className="bg-orange-400 px-3 py-1 rounded-full text-white text-xs font-medium whitespace-nowrap"
                >
                    {tech}
                </div>
            ))}
        </div>
    )
}