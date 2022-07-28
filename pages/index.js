import Head from 'next/head'
import { useEffect, useRef,useState } from 'react'
import gsap, { selector } from 'gsap'


export default function Home() {
  const box = useRef()
  const box2 = useRef()
  const box3 = useRef()
  const span2= useRef()
  const span3 = useRef()
  const starsRef = useRef()
  const starsRef2 = useRef()
  const starsRef3 = useRef()
  const starsRef4 = useRef()
  const stars2 = gsap.utils.selector(starsRef2)
  const stars3 = gsap.utils.selector(starsRef3)
  const stars4 = gsap.utils.selector(starsRef4)

  const spanRef = useRef()
  const spanEl = gsap.utils.selector(spanRef)
  const h1text2 = gsap.utils.selector(box2)
  const h1text3 = gsap.utils.selector(box3)
  const letter2 = gsap.utils.selector(span2)
  const letter3 = gsap.utils.selector(span3)
  const stars = gsap.utils.selector(starsRef)


  const h1Ref = gsap.utils.selector(box)
  const h1 = useRef()
  const span = gsap.utils.selector(h1)
  let title = 'any text'
  const firstLine = 'some text line 12312 4523 fcssca'
  const secondLine = 'some second 大 城 市 text li擦 市 场necsej 32783jsh'
  const thirdLine = 'second是 擦 拭 text linecsej 32783'
  const fourthLine = 'second text 当时的 linecsej 32783ext linecsej 32783jsh'

  


useEffect(() => {
  
  gsap.set(span(".letter"), {display:"inline-block"})
  gsap.fromTo(h1Ref(".animated-text"), {y: 3}, {y:0, delay:.1})
  gsap.fromTo(span(".letter"), {y: -3,x:3, opacity:0}, {y: 0, opacity:1, x:0,stagger:0.1, repeat:-1})
  gsap.fromTo(span(".letter"), {y: 0,x:0, opacity:0}, {y: 3, opacity:1 ,x:-3, scaleX:.9, stagger:0.7, repeat:-1})
 

  gsap.set(letter3(".letter-span"), {x: -4})
  
  // gsap.fromTo(letter2(".letter"), {y: 100}, {y:0, delay: 1})
  gsap.fromTo(letter3(".letter-span"), {y: -100}, {y:0, duration:.2})
  gsap.fromTo(letter3(".letter-span"), {opacity: 1}, {opacity:0, duration:.2})
  gsap.fromTo(letter3(".letter-span"), {opacity: 0}, {opacity:1, duration:.2,repeat:5 })



   

  console.log(letter2(".letter-span"))

  // gsap.set(stars(".span-star "), {x:-4})
  gsap.set(stars(".span-star"), {x:-3})
 gsap.fromTo(stars(".span-star "), {y:0, x:0,opacity:0}, {y:-2,x:-4,opacity:1, stagger: .1,repeat:-1, duration: .1} )
 gsap.fromTo(stars2(".span-star "), {y:0,x: 0, opacity:0}, {y:3, x:-2,stagger: .1,opacity:1, repeat:-1,duration: .1})
 gsap.fromTo(stars3(".span-star "), {y:0, x:0, opacity:0}, {y:-1,x:-1,opacity:1, stagger: .1,repeat:-1, duration: .1})
 gsap.fromTo(stars3(".span-star "), {opacity:0}, {opacity:1, duration: .5})
 gsap.fromTo(stars4(".span-star "), {y:-3, x:-3,opacity:0}, {y:-1,x:4,opacity:1, stagger: .1,repeat:-1, duration: .01})



 








  
  
}, [])
const lettersArray = title.split("")

console.log(lettersArray)






  return (
    <>
   {/* <div className='main'>
      
      <div ref={box}  className='animated-box'>
    
      <h1 ref={h1} className='animated-text'>
         { lettersArray.map((letter,i) => (
     <span key={i} className='letter'>{letter}</span>
      
     ))}
     </h1>
   
     <h1 ref={h1} className='animated-text animate-white'>
       { lettersArray.map((letter, i) => (
          <span key={i} className='letter large-l'>{letter}</span>
    
   ))}
   </h1>
  
       
        
       
        </div>

      
       
    </div> */}
    {/* <div className='main2'>
      <div className='animation-box '>
        <div ref={box2} className='box2 absolute-center '>
          <h1 ref={span2} className='text-h1'>
          { lettersArray.map(letter => (
          <span className='letter-span large-l'>{letter}</span>
    
        ))}

          </h1>
          
        </div>

        <div ref={box3} className='box3 absolute-center '>
          <h1 ref={span3} className='text-h1'>
          { lettersArray.slice(-3).map(letter => (
          <span className='letter-span large-l'>{letter}</span>
    
        ))}

          </h1>
          
        </div>
        </div>
    </div> */}

    <section className='main3'>
      {/* <div className='atom-cont'>

          <span style={{'--i':'1'}}></span>
          <span style={{'--i':'2'}}></span>
          <span style={{'--i':'3'}}></span>
    
     
      </div>
       <div className='atom-cont atom-2'>

          <span style={{'--i':'1'}}></span>
          <span style={{'--i':'2'}}></span>
          <span style={{'--i':'3'}}></span>
    
     
      </div>
       */}




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
