import React from "react";
import PrimaryButton from "./PrimaryButton";
import { Link } from "react-router-dom";

const PaymentInformation = () => {
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
            className="inputs"
          />
        </div>

        <div className="field_set_div">
          <label htmlFor="account_number">Account number</label>
          <input
            type="text"
            id="account_number"
            name="account_number"
            placeholder="account number"
            className="inputs"
          />
        </div>
        <div className="mt-10">
          {/* <PrimaryButton>Create event</PrimaryButton> */}
          <Link className="primary_button block" to="/create/invitation">Create event</Link>
        </div>
      </form>
    </>
  );
};

export default PaymentInformation;
