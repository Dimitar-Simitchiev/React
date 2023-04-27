import React, { useState } from 'react';


export default function Home() {
  const pic=["https://hips.hearstapps.com/hmg-prod/images/21c0550-001-1630936200.jpg?crop=1.00xw:0.903xh;0,0.0513xh&resize=1200:*","https://imgd.aeplcdn.com/1056x594/n/cw/ec/48067/s-class-exterior-right-front-three-quarter-3.jpeg?q=75&wm=1","https://imgd.aeplcdn.com/642x361/ec/A8/2E/14214/img/m/Mercedes-Benz-AMG-GT-30539_ol.jpg?t=203404263&t=203404263&q=75","https://imgd.aeplcdn.com/1056x594/n/cw/ec/116201/new-c-class-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75&wm=1","https://c4.wallpaperflare.com/wallpaper/909/213/262/black-white-background-brabus-g63-800-hd-wallpaper-preview.jpg"]

  let [count, setCount] = useState(0)
  
  

    const ChangeNext=()=> {
      if (count<4) {
        setCount(count+1)
        
      }
    }
    const ChangeBack=()=> {
      if (count<5&&count>0) {
        setCount(count-1)
        
        
      }
    }
    

    return <body>
    <h1 className="home-title">Mercedes</h1>
    <button className="button-container" onClick={ChangeBack}>BACK</button>
    <img src={pic[count]}c alt="Mercedes 1" width="600" height="400"/>
    <button className="button-container" onClick={ChangeNext}>NEXT</button>
    </body>
   
  }