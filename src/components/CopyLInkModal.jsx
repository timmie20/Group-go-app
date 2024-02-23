import React, { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

const CopyLInkModal = () => {
  const { eventData } = useContext(FormContext)

  const [isCopied, setIsCopied] = useState(false)
    
  const copyToClipboard = async (text) => {
    if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text)
    } else {
        return document.execCommand('copy', true, text)
    }
  }

  const handleCopyClick = () => {
    copyToClipboard(`https://groupgo.netlify.app/${eventData.eventId}`)
        .then(() => {
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 1500)
        })
        .catch((err) => {
            console.log(err)
        })
  }

  return (
    <>
      <div className="w-full">
        <div className="w-full flex items-center justify-between rounded-[15px] border-[1px] border-[#06081121] bg-white px-2 py-[6px] font-light text-black-clr">
          <p className="text-base font-light text-black-clr">
            {`https://groupgo.netlify.app/${eventData.eventId}`}
          </p>
          <button onClick={handleCopyClick} className="rounded-[10px] bg-orange-clr px-[18px] py-2 text-white">
            {!isCopied ? 'Copy invite link' : 'copied'}
          </button>
        </div>
      </div>
    </>
  );
};

export default CopyLInkModal;
