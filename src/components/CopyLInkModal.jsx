import React from "react";

const CopyLInkModal = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between rounded-[15px] border-[1px] border-[#06081121] bg-white px-2 py-[6px] font-light text-black-clr">
          <p className="text-base font-light text-black-clr">
            https://groupgo.com/eventid
          </p>
          <button className="rounded-[10px] bg-orange-clr px-[18px] py-2 text-white">
            Copy invite link
          </button>
        </div>
      </div>
    </>
  );
};

export default CopyLInkModal;
