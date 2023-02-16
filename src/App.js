
import './App.css';
import { useState } from 'react';

function App() {

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];

  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')

  let homes = [ 
    {home_id : 1 , price:925},
    {home_id : 2 , price:1050},
    {home_id : 3 , price:1500},
    ]

    
  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e)=>setToDo(e.target.value)} placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now() ,text:toDo ,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
     

      {  
       toDos.map((obj)=>{
    return( 

        <div className="todo">
          <div className="left">
            <input type="checkbox" onChange={(e)=>{
              setToDos(toDos.filter(obj2=>{
                console.log(e.target.checked);
                console.log(obj);
                if(obj2.id===obj.id){
                  obj2.status = e.target.checked
                }
                return obj2
              }))

            }} value={obj.status} name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i  className="fas fa-times"
            onClick={()=>{
              setToDos(toDos.filter(obj2=>{
                if(obj2.id!==obj.id){
                  
                  return true
                 
                }
                return null
              }))

            }}

            ></i>
          </div>
        </div>
      )


    })}
    {
      toDos.map((obj)=>{

        if(obj.status){
          return(<h1>{obj.text}</h1>)
        }
        
        return null;

      })}

    {

      

    }


      </div>
    </div>
  );
}

export default App;
