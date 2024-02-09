import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PaymentInformation = () => {
  const { setCurrentStep, stepData } = useContext(AppContext)

  return (
    <>
      <form className="payment_info_container">
        <h4 className="font-normal">How would you like to get paid?</h4>
        <div className="field_set_div">
          <label htmlFor="bank_name">Name of bank</label>
          <input
            type="text"
            id="bank_name"
            name="bank_name"
            placeholder="GTBank"
            className="inputs max-w-full"
          />
        </div>

        <div className="field_set_div">
          <label htmlFor="account_number">Account number</label>
          <input
            type="text"
            id="account_number"
            name="account_number"
            placeholder="account number"
            className="inputs max-w-full"
          />
        </div>
        <div className="mt-10">
        <button onClick={() => setCurrentStep(stepData[3])} className="primary_button block">Continue</button>
        </div>
      </form>
    </>
  );
};

export default PaymentInformation;
