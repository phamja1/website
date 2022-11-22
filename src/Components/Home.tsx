import React, {useEffect, useRef} from 'react'
import useOnScreen from "../hooks/useOnScreen";
import '../styles/Home.css'
import NavBar from './NavBar';

function Home() {
    const page2 = useRef<HTMLDivElement>(null)

    const useOnScreen2 = useOnScreen(page2)

    console.log(useOnScreen2)

    const toggleShow = (ref: React.RefObject<HTMLElement>) => {
        const classes = ref.current!.classList
        if (classes.contains("show")) {
            classes.remove("show")
        } else {
            classes.add("show")
        }
    }

    if (page2.current != null) {
        if (useOnScreen2) {
            page2.current!.classList.add("show")
        } else {
            if (page2.current!.classList.contains("show")) {
                page2.current!.classList.remove("show")
            }
        }
    }

    return (
        <>
            <NavBar/>
            <main>
                <div className='title-screen full-screen'>
                    <h1>Home</h1>
                </div>
                <div className='full-screen title-screen hidden' ref={page2}>
                    <h1>Sliding Text</h1>
                    <div>This is subtext</div>
                </div>


            </main>
        </>
    )
}

export default Home