import React from 'react'
import { Outlet } from 'react-router-dom'
import StepProgress from '../components/StepProgress'

const CreateEvent = () => {
  return (
    <>
        <StepProgress /> 
        <Outlet />
    </>
  )
}

export default CreateEvent