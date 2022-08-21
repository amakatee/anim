import { createContext, useRef, useEffect } from "react";
import gsap from "gsap";

const AnimContext = createContext()

export const MatrixContext = ({children}) => {
    const a = 2

    const starsRef = useRef()
    const starsRef2 = useRef()
    const starsRef3 = useRef()
    const starsRef4 = useRef()
    const logoRef = useRef()
    const logo = gsap.utils.selector(logoRef)
    const stars = gsap.utils.selector(starsRef)
  
    const stars2 = gsap.utils.selector(starsRef2)
    const stars3 = gsap.utils.selector(starsRef3)
    const stars4 = gsap.utils.selector(starsRef4)

    useEffect(() => {

        gsap.set(stars(".span-star"), {x:-3, margin: "-20px"})
        gsap.set(stars2('.span-star'), {margin: "-20px"})
        gsap.set(stars3('.span-star'), {margin: "-20px"})
        gsap.set(stars4('.span-star'), {margin: "-20px"})
        gsap.to(stars('.span-star'), {margin: "-2px", duration:1.2})
        gsap.to(stars2('.span-star'), {margin: "-1px", duration:1})
        gsap.to(stars3('.span-star'), {margin: "-2px", duration:.9})
        gsap.to(stars4('.span-star'), {margin: "-1px", duration:.8})
      
      
       gsap.fromTo(stars(".span-star "), {y:0, x:0,opacity:0}, {y:-2,x:-4,opacity:1, stagger: .1,repeat:-1, duration: .1} )
       gsap.fromTo(stars2(".span-star "), {y:0,x: 0, opacity:0}, {y:3, x:-2,stagger: .1,opacity:1, repeat:-1,duration: .1})
       gsap.fromTo(stars3(".span-star "), {y:0, x:0, opacity:0}, {y:-1,x:-1,opacity:1, stagger: .1,repeat:-1, duration: .1})
       gsap.fromTo(stars3(".span-star "), {opacity:0}, {opacity:1, duration: .5})
       gsap.fromTo(stars4(".span-star "), {y:-3, x:-3,opacity:0}, {y:-1,x:4,opacity:1, stagger: .1,repeat:-1, duration: .01})
      
      
       // logo
       gsap.fromTo(logo('.s-h1'), {y:-20}, {y:0, duration:.2})
      
      
      }, [])
    return (
        <AnimContext.Provider value={{ a,
            starsRef,  starsRef2 , starsRef3, starsRef4, logoRef, logo, stars, stars2, stars3, stars4

        }}>
            {children}
    
        </AnimContext.Provider>
    )
  
}

export default AnimContext