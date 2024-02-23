import React, { useContext, useState } from "react";
import InputField from "./InputField";
import { FormContext } from "../context/FormContext";
import loader from "../assets/images/loader.svg"

const PaymentInformation = () => {
  const { eventData, handleChangeForPaymentInfo, uploadCoverImage, loading } =
    useContext(FormContext);

  const { paymentInfo } = eventData;

  const submitForm = (e) => {
    e.preventDefault();
    uploadCoverImage();
  };

  return (
    <>
      <form className="payment_info_container" onSubmit={submitForm}>
        <h4 className="font-normal">How would you like to get paid?</h4>

        <InputField
          id="bank_name"
          type="text"
          label="Name of bank"
          name="bankName"
          placeholder="GT bank..."
          value={paymentInfo.bankName}
          onChange={handleChangeForPaymentInfo}
        />

        <InputField
          id="acc_num"
          type="text"
          label="Account number"
          name="accountNum"
          value={paymentInfo.accountNum}
          placeholder="account number"
          onChange={handleChangeForPaymentInfo}
        />
        <div className="mt-10">
          <button
            type="submit"
            disabled={loading}
            onClick={submitForm}
            className="primary_button flex items-center justify-center disabled:bg-[#EE9080] disabled:cursor-default"
          >
            {!loading ? 'Continue' : <img src={loader} />}
          </button>
        </div>
      </form>
    </>
  );
};

export default PaymentInformation;
