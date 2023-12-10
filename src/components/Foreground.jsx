import React, {useState ,useRef} from "react";
import Card from "./Card";



function Foreground(){

    const ref = useRef(null)

    const data= [
        {   
            desc: 'The Art of Full Stact Web devloper',
            filesize: '.92mb',
            close: true,
            tag: {isOpen:true ,tagTitle:"Download Now", tagColor:   'blue'},
        },
        {   
            desc: 'Start learning React',
            filesize: '.9mb',
            close: true,
            tag: {isOpen:true ,tagTitle:"Download Now", tagColor:   'green'},
        },
        {   
            desc: 'Complete the JavaScript',
            filesize: '.120mb',
            close: false,
            tag: {isOpen:true ,tagTitle:"Download Now", tagColor:   'red'},
        },
        {   
            desc: 'Backend is also important to learn',
            filesize: '.90mb',
            close: true,
            tag: {isOpen:true ,tagTitle:"Download Now", tagColor:   'orange'},
        },
    ]


    return (
    <>
    <div ref={ref} className="fixed flex flex-wrap top-0 left-0 z-[3] h-screen w-full ">
        {data.map((item, index) =>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
    </>
    )
}
export default Foreground