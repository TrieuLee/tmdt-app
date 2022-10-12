import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import {useParams} from "react-router-dom"
export default function ProductLayout() {
  const {id} = useParams()
  return (

        <>
        <Navbar />

        <div>Day la {id} </div>

        </>
  )
}
