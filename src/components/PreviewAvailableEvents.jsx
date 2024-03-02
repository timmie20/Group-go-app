import React, { useContext } from "react";
import moneySvg from "../assets/images/money.svg";
import profileSvg from "../assets/images/profile.svg";
import { Link } from "react-router-dom";

const PreviewAvailableEvents = ({ currentPreview }) => {
  return (
    <div>
      <div className="flex flex-col gap-8 laptop:flex-row laptop:items-center">
        <img
          src={currentPreview?.eventData.eventImg}
          alt=""
          className="h-[356px] w-full max-w-[439px] rounded-[10px]"
        />
        <aside className="space-y-5">
          <div>
            <span className="icon_text_block">
              <img src={moneySvg} alt="" />
              Total commitment
            </span>
            <h2 className=" text-[24px] font-medium tablet:text-[32px] laptop:text-[46px]">
              N 150,000
            </h2>
          </div>
          <div>
            <div className="flex items-start gap-6">
              <div className="space-y-2">
                <span className="icon_text_block">
                  <img src={profileSvg} alt="" />
                  Participants
                </span>
                <h5 className="text-[24px] font-medium">{`0/${currentPreview?.eventData.eventInfo.maxNumOfParticipant}`}</h5>
              </div>
              <div className="space-y-2">
                <span className="icon_text_block">
                  <img src={moneySvg} alt="" />
                  Amount per person
                </span>
                <h5 className="text-[24px] font-medium">
                  {`N ${currentPreview?.eventData.eventInfo.amountPerParticipant}`}
                </h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              className="flex items-center justify-center gap-2 rounded-[15px] bg-orange-clr py-[10px] text-white"
              to={`/${currentPreview?.eventData.eventId}`}
            >
              <svg
                width="21"
                height="10"
                viewBox="0 0 21 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 10H5.5C4.11667 10 2.93767 9.51233 1.963 8.537C0.988333 7.56167 0.500667 6.38267 0.5 5C0.5 3.61667 0.987667 2.43767 1.963 1.463C2.93833 0.488334 4.11733 0.000666667 5.5 0H9.5V2H5.5C4.66667 2 3.95833 2.29167 3.375 2.875C2.79167 3.45833 2.5 4.16667 2.5 5C2.5 5.83333 2.79167 6.54167 3.375 7.125C3.95833 7.70833 4.66667 8 5.5 8H9.5V10ZM6.5 6V4H14.5V6H6.5ZM11.5 10V8H15.5C16.3333 8 17.0417 7.70833 17.625 7.125C18.2083 6.54167 18.5 5.83333 18.5 5C18.5 4.16667 18.2083 3.45833 17.625 2.875C17.0417 2.29167 16.3333 2 15.5 2H11.5V0H15.5C16.8833 0 18.0627 0.487667 19.038 1.463C20.0133 2.43833 20.5007 3.61733 20.5 5C20.5 6.38333 20.0123 7.56267 19.037 8.538C18.0617 9.51333 16.8827 10.0007 15.5 10H11.5Z"
                  fill="white"
                />
              </svg>
              Go to event link
            </Link>
            <button className="rounded-[15px] border-[1px] border-[#E4E4E4] bg-white py-[10px]">
              Send money to bank account{" "}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PreviewAvailableEvents;
