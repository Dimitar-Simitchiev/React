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
      const[programId,setProgramid]=useState(program._id)
      let date=new Date();
      
      
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
    
    
  },[])

      
       
      
     const Comment=(e)=>{
      e.preventDefault()
     setProgramid(program._id)
     document.getElementById('int').value='';
   
     
      const empobj = {coments, name, programId,date};

     

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
       
        console.log(date)
       
  
       })
      
      
    
    
   
        
        

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
       <button className="delete-diet" id={program._id} onClick={onDelete}>Delete program</button>
       <h1></h1>
       
      </p>
     
      
      {objcoments.map(x=>{
       if (x.programId===program._id) {
         return <div>
           <p className="coment-list"><p2 className="name-coment">{x.date}...{x.name}</p2>:      {x.coments}</p>
           <br></br>
           </div>
       }
      })}
     <br></br>
     <input id="int" className="int" onChange={e => setComents(e.target.value)} />
     <button  className="coment-btn" onClick={Comment}>COMMENT</button>
     
      </div>
      <br></br>
      <br></br>
      <br></br>
      </div>
    )
    }
    
   
    //{objcoments.map(x=><li>{x.name}</li>)}