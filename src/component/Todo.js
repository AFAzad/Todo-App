import React from 'react'

export const Todo = () => {
  return (
    <div className='main-div'>
        <div>
            <div className='App-header'>
                <h1>Todo App</h1>
            <div className='add-items'>
                    <label htmlFor="Add List">Add List:   </label>
                <input type="text" placeholder='Add-Items' /> 
                <i className="fa-solid fa-plus add-btn my-2" title='Click to add'></i>
                <div className='show-item'>
                    
                    <div className='display-item'>
                        <h2>Apple</h2>
                    <i class="fa-solid fa-trash"></i>
                        

                    </div>
                </div>
            </div>
            </div>
            
        </div>

    </div>
  )
};
