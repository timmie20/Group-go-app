import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../config/firebase'
import { useParams } from 'react-router-dom'
import Cover from "../assets/images/Frame 74.png"
import location from "../assets/images/location.svg"
import profile from "../assets/images/profile.svg"
import instagram from "../assets/images/instagram.svg"
import mapImg from "../assets/images/map.svg"
import dateImg from "../assets/images/date.svg"
import moneyImg from "../assets/images/money.svg"

const Event = () => {
    const [loading, setLoading] = useState(true)
    const { eventId } = useParams()
    const [event, setEvent] = useState(null)

    useEffect(() => {
        getEventData()
    }, [eventId])

    const getEventData = async () => {
        const docRef = doc(db, "event", eventId)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                // console.log(docSnap.data())
                setEvent(docSnap.data().eventData)
                setLoading(false)
                console.log(event)
            } else {
                console.log("No such document!")
                setLoading(false)
            }
    }
if (loading) {
    return (
        <div>Loading...</div>
    )
} 
else if (event) {
  return (
    <div>
        <img className='w-full h-[403px] object-cover' src={event?.eventImg} alt="" />

        <div className='flex gap-10 my-[55px]'>
            <div className='w-[50%] max-w-[50%] flex flex-col gap-[24px]'>
                <div className='flex flex-col gap-[6px]'>
                    <h3>{event?.eventType}</h3>
                    <div className='flex items-center gap-[22px]'>
                        <div className='flex gap-[8px] items-center'>
                            <img src={location} alt="" />
                            <p>{event?.eventInfo?.eventLocation}</p>
                        </div>
                        <div className='flex gap-[8px] items-center'>
                            <img src={profile} alt="" />
                            <p>{event?.eventInfo?.typeOfParticipants}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p>30 spots left</p>
                    <button className='w-[530px] max-w-full rounded-[15px] bg-[#e2614b] text-[#fff] px-[24px] py-[10px]'>Apply for event</button>
                </div>

                <div>
                    <h3>Event Description</h3>
                    <p>{event?.eventInfo?.eventDesc}</p>
                </div>

                <div>
                    <h3>Event Host/Creator</h3>
                    <div className='flex items-center gap-[16px]'>
                        <p>{event?.eventInfo?.creatorName}</p>
                        <a href="/"><img src={instagram} alt="" /></a>
                    </div>
                </div>
            </div>

            <div className='w-[50%] max-w-[100%] flex flex-col gap-[18px]'>
            <div className='flex gap-4'>
                <div className='bg-[#f7f6f9] rounded-[10px] p-[18px] w-[50%] h-[149px] flex flex-col justify-between'>
                    <div className='flex gap-[8px] items-center'>
                        <img src={dateImg} alt="" />
                        <p>Date and time</p>
                    </div>

                    <div className=''>
                        <h5>{`${event?.eventInfo?.startDate} to ${event?.eventInfo?.endDate}`}</h5>
                        <h5>{`${event?.eventInfo?.startTime} to ${event?.eventInfo?.endTime}`}</h5>
                    </div>
                </div>

                <div className='bg-[#f7f6f9] rounded-[10px] p-[18px] w-[50%] h-[149px] flex flex-col justify-between'>
                    <div className='flex gap-[8px] items-center'>
                        <img src={moneyImg} alt="" />
                        <p>Commitment per person</p>
                    </div>

                    <div>
                        <h5>{event?.eventInfo?.amountPerParticipant}</h5>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[8px]'>
                <p>Location</p>
                <img src={mapImg} alt="" className="map w-full" />
            </div>
        </div>
        </div>
    </div>
  )

}

else {
    return (
        <div>No event</div>
    )
}

}
export default Event