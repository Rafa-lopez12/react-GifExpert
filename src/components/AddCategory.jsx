import React, { useState } from 'react'


const AddCategory = ({onNewCategory}) => {
  
    const[inputValue, setInputValue]=useState('One punch')

    const onInputChanged=({target})=>{
        
        setInputValue(target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if (inputValue.trim().length <=1) {
            return;
        }
       // setCategories(categori=>[inputValue,...categori])
       onNewCategory(inputValue.trim());
       setInputValue('')
    }
    return (
    <form onSubmit={onSubmit}>
        <input 
            type='text' 
            placeholder='Buscar Gifs' 
            value={inputValue} 
            onChange={onInputChanged}
        />
    </form>    
  )
}

export default AddCategory
