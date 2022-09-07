import React, { useState } from "react";
import Todolist from "./Todolist";

const App =()=>{

  const [items, setData]=useState('');
  const [inputlist,setlist]=useState([]);

  const listItems=(event)=>{
    setData(event.target.value);
    console.log(event.target.value);
  };


  const listofItems=()=>{
    setlist((olditems)=>{
      return [...olditems,items];
    });

    //////make array empty
    setData("");
   
  };

//delte items
  const deleitems=(id)=>{
    console.log("delete");

    setlist((olditems)=>{
return olditems.filter((arrElem,index)=>{
return index!== id;

})
    })
}



  return (<>
    <div className="list">
    <div className="child_list">
        <h2> To Do List</h2>
       <br/>
   
       <input type="text" placeholder="Add items in list"
       value={items}
       onChange={listItems} />
      <button onClick={listofItems}> + </button>
    
      <ol>
        {/* <li>{items}</li> */}

        {
          inputlist.map((items,index)=>{
        {/* return <li>{items}</li>  */}
      return <Todolist
      key={index}
      id={index}
        text={items}
        onselect={deleitems}
       />;
          })}
{/* in map method have four attribute value  current value,index,*/}

      </ol>  
    </div>
    </div>
  </>)
}


export default App;
