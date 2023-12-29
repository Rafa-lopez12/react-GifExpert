import React, { useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useEffect } from 'react'
import GiftItem from './GiftItem'
import '../../src/styles.css'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GIfGrid = ({category}) => {
    const {images, isLoading}=useFetchGifs(category);
    
    return (
    <>
        <h3>{category}</h3> 
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        <div className='card-grid'>
            {
                images.map((image)=>(
                    <GiftItem key={image.id} title={image.title} url={image.url}/>
                ))
            }
        </div>
    </>
  )
}

export default GIfGrid
