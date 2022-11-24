import React, { useState } from "react";

export const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputdata) {
      alert("Invalid item");
    } else {
      setItems([...items, inputdata]);
      setInputdata("");
    }
  };



  const deleteItem = (id)=>{
    console.log(id);

    let updateditems = items.filter((element,index)=>{

        
        return index !== id;
    })
    setItems(updateditems)

  };

  const removeAll = () =>{
    setItems([]);
  }


  return (
    <div className="">
      <div>
        <div className="">
          <h1>Todo App</h1>
          <div className="add-items">
            <label htmlFor="Add List">Add List: </label>
            <input
              type="text"
              placeholder="Add-Items"
              value={inputdata}
              onChange={(e) => setInputdata(e.target.value)}
            />
            <i
              className="fa-solid fa-plus add-btn my-2"
              title="Click to add"
              onClick={addItem}
            ></i>
            <div className="show-item">
              {items.map((element, index) => {
                return (
                  <div className="display-item" key={index}>
                    <h2>
                      {element} <i className="fa-solid fa-trash" onClick={()=>deleteItem(index) }></i>
                    </h2>
                  </div>
                );
              })}
            </div>
            <br />
            <div>
              <button className="remove-all" style={{margin:"30px",padding: '10px'}} onClick={removeAll} >Remove All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
