import Head from 'next/head'
import { useEffect, useRef,useState } from 'react'
import gsap, { selector } from 'gsap'


export default function Home() {

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

  

  const firstLine = ' отслытвлоыулаш длуаосдцуоt line 12312 4523 fcssca'
  const secondLine = 'some second 大 城 市 text li擦 市 场necsej 32783jsh'
  const thirdLine = 'sотслытвлоыулаш длуаосдцуоt line 12312 4523 83'
  const fourthLine = 'отслытвлоыулаш длуаосдцуоt line 12312 4523 '

  


useEffect(() => {
  gsap.set(stars(".span-star"), {x:-3})
 gsap.fromTo(stars(".span-star "), {y:0, x:0,opacity:0}, {y:-2,x:-4,opacity:1, stagger: .1,repeat:-1, duration: .1} )
 gsap.fromTo(stars2(".span-star "), {y:0,x: 0, opacity:0}, {y:3, x:-2,stagger: .1,opacity:1, repeat:-1,duration: .1})
 gsap.fromTo(stars3(".span-star "), {y:0, x:0, opacity:0}, {y:-1,x:-1,opacity:1, stagger: .1,repeat:-1, duration: .1})
 gsap.fromTo(stars3(".span-star "), {opacity:0}, {opacity:1, duration: .5})
 gsap.fromTo(stars4(".span-star "), {y:-3, x:-3,opacity:0}, {y:-1,x:4,opacity:1, stagger: .1,repeat:-1, duration: .01})


 // logo
 gsap.fromTo(logo('.s-h1'), {y:-20}, {y:0, duration:.2})


}, [])





  return (
    <>
  
    <section className='main3'>
   
     
       <div  className='star-cont'>
       <div ref={starsRef} className='stardiv'>
         {firstLine.split("").map((letter, i) => (
           <span key={i} className='span-star'>{letter}</span>
         ))}
          </div>
          <div ref={starsRef2}  className='stardiv'>
          {secondLine.split("").map((letter, i) => (
          
           <span key={i} className='span-star'>{letter}</span>
         
         ))}
           </div>
           <div ref={starsRef3} className='stardiv'>
          {thirdLine.split("").map((letter, i) => (
          
           <span key={i} className='span-star'>{letter}</span>
         
         ))}
           </div>
           <div ref={starsRef4} className='stardiv'>
          {fourthLine.split("").map((letter, i) => (
          
           <span  key={i} className='span-star'>{letter}</span>
         
         ))}
           </div>
           
          
         
       </div>
       
    </section>

    </>
  )
}
