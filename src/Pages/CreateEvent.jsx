import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import StepProgress from '../components/StepProgress'
import { AppContext } from '../context/AppContext'
import TemplatePage from '../components/createEvent/TemplatePage'
import EventInfoPage from '../components/createEvent/EventInfoPage'
import PaymentPage from '../components/createEvent/PaymentPage'
import SendInvitationPage from '../components/createEvent/SendInvitationPage'

const CreateEvent = () => {
  const { stepData, currentStep } = useContext(AppContext)

  const mapping = {
    "template": <TemplatePage />,
    "event": <EventInfoPage />,
    "payment": <PaymentPage />,
    "invite": <SendInvitationPage />
  }
  console.log(currentStep)

  return (
    <>
        <StepProgress /> 
        { mapping[currentStep.page] }
    </>
  )
}

export default CreateEvent