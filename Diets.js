import {  useNavigate,} from "react-router-dom";
import {useState,useEffect} from "react";
import './Diets.css';
    export default function Diets({
        program
    },){
      
      let username=document.getElementById("top").textContent.slice(9);
      const navigate=useNavigate();
      const[coments,setComents]=useState([]);
      const[name,setName]=useState(username);
      const[objcoments,setObjComents]=useState([]);
      const[like,setLike]=useState([]);
      const[programId,setProgramid]=useState(program._id)
      let time = new Date().toLocaleTimeString("en-GB");
      let date=new Date().toLocaleDateString("en-GB");
      const[boollike,setBooLike]=useState(false);
      let n=0;
      
      useEffect(()=>{
      fetch("http://localhost:3030/jsonstore/coments")
     .then(res=>res.json())
     .then(x=>Object.values(x))
     .then(result=>{
     
      if (result.programId!==program._id) {
        setProgramid(program._id)
       
      setObjComents(result)
      }else{
        
        setObjComents([])
      }
     
     console.log(date)
      console.log(objcoments)
     

     })

     fetch("http://localhost:3030/jsonstore/likes")
        .then(res=>res.json())
        .then(x=>Object.values(x))
        .then(result=>{
          
          if (result.programId!==program._id) {
            setProgramid(program._id)
           
          setLike(result)
          }else{
            
            setLike([])
          } result.map(x=>{
            if(x.username===username){
              setBooLike(true)
            }
          })
         
        })
       
        console.log(boollike)
    
    
  },[])

      
       
      
     const Comment=(e)=>{
      e.preventDefault()
     setProgramid(program._id)
    
   
      const empobj = {coments, name, programId,date,time};

     
     
      fetch("http://localhost:3030/jsonstore/coments", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(empobj)
      }).then(() => {
    
          navigate('/programs');
      }).catch((err) => {
          console.log(err.message);
      })
     
     
        fetch("http://localhost:3030/jsonstore/coments")
       .then(res=>res.json())
       .then(x=>Object.values(x))
       .then(result=>{
   
       setObjComents(result)
       
        
       
  
       })
      
      
    
    
   
        
        

     }
     const onLike=(e)=>{
      
        fetch("http://localhost:3030/jsonstore/likes")
        .then(res=>res.json())
        .then(x=>Object.values(x))
        .then(result=>{
        
          if (result.programId!==program._id) {
            setProgramid(program._id)
           
          setLike(result)
          }else{
            
            setLike([])
          }
          result.map(x=>{
            if(x.username===username){
              setBooLike(true)
            }
          })
          
        })
        if (boollike===false) {
           let numofLikes=1;
          const empobj = {username,programId,numofLikes};
          fetch("http://localhost:3030/jsonstore/likes", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(empobj)
          }).then(() => {
            
              navigate('/programs');
          }).catch((err) => {
              console.log(err.message);
          })
          
         
         

        }
        
        
      
    
     }

     const onDelete = (e) => {
      e.preventDefault()
      let username=document.getElementById("top").textContent.slice(9);
     if (program.name===username) {
      fetch('http://localhost:3030/jsonstore/diets/'+program._id, {
        method: 'DELETE',
      })
      .then(res => res.text()) 
      .then(res => console.log(res))
      
       console.log("work")
  
       navigate('/')
      window.confirm("Do you want to delete this program!")
        

     
     }else{
      alert("You cant delete this!")
     
     }
     
    }
     
      
    return(
        
       <div>
        <div className='programs'id={program.id}>
         <h1 className="name">
          {program.name}
        </h1>
       <img src={program.img} alt="Instructor" width="450" height="400"/>
        <h1 className="program-type">
          Programe type:{program.type}
        
        </h1>
      <p className='description'>
       Description:{program.description} 
       <br></br>
       <button className="delete-diet" id={program._id} onClick={onDelete}>Delete program</button>
       <button className="like-button" id={program._id} onClick={onLike}>Like:{like.map(x=>{
       if (x.programId===program._id) {
        n++;
    
       
        
       }
    
      })}, {n}</button>
      
       
      </p>
     
      
      {objcoments.map(x=>{
       if (x.programId===program._id) {
         return <div>
           <p className="coment-list"><p1 className="name-coment"><p clsssName="date-time">{x.date}г-{x.time}</p>{x.name}</p1>:      {x.coments}</p>
           <br></br>
           </div>
       }
      })}
     <br></br>
     <input id="int" value={coments} className="int" onChange={e => setComents(e.target.value)} />
     <button  className="coment-btn" onClick={Comment}>COMMENT</button>
     
      </div>
      <br></br>
      <br></br>
      <br></br>
      </div>
    )
    }
    
   
    //{objcoments.map(x=><li>{x.name}</li>)}