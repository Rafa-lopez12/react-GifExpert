import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GIfGrid from './components/GIfGrid'

const GifExpertApp = () => {
    const [categories,setCategories]=useState(['One punch'])
    
    const onAddCategory=(newCategory)=>{
        if (categories.includes(newCategory)) {
            return;
        }
        const nuevo=[newCategory]
        setCategories([nuevo,...categories])
    }
    return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
          //setCategories={setCategories}
          onNewCategory={value=>onAddCategory(value)}
          />
       
            {categories.map((category )=>{
               return(
                    <GIfGrid key={category} category={category}/>
               )
              
            })}
    </>
  )
}

export default GifExpertApp
