import React from 'react'
import { useContext } from 'react'
import AnimContext from '../context/MatrixContext'

const Matrix = () => {
    const {starsRef,  starsRef2 , starsRef3, starsRef4, logoRef, logo, stars, stars2, stars3, stars4} = useContext(AnimContext)


    const firstLine = ' отслытвлоыулаш длуаосдцуоt line 12312 4523 fcssca'
    const secondLine = 'some second 大 城 市 text li擦 市 场necsej 32783jsh'
    const thirdLine = 'sотслытвлоыулаш длуаосдцуоt line 12312 4523 83'
    const fourthLine = 'отслытвлоыулаш длуаосдцуоt line 12312 4523 '
  
    const arr =[0, 1, 2, 3,4,5,6, 7,8,9]
  return (
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
  )
}

export default Matrix