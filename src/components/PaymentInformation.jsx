import React, { useCallback, useContext, useEffect } from "react";
import InputField from "./InputField";
import { useFormik } from "formik";
import { FormContext } from "../context/FormContext";

const PaymentInformation = () => {
  const { eventData, setEventData, handleEventCreation } =
    useContext(FormContext);

  const submitForm = () => {
    setEventData({ ...eventData, paymentInfo });
    handleEventCreation();
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      paymentInfo: { bankName: "", accountNum: "" },
    },
    submitForm,
  });

  return (
    <>
      <form className="payment_info_container" onSubmit={handleSubmit}>
        <h4 className="font-normal">How would you like to get paid?</h4>

        <InputField
          id="bank_name"
          type="text"
          label="Name of bank"
          name="paymentInfo.bankName"
          placeholder="GT bank..."
          value={values.paymentInfo.bankName}
          onChange={handleChange}
        />

        <InputField
          id="acc_num"
          type="text"
          label="Account number"
          name="paymentInfo.accountNum"
          value={values.paymentInfo.accountNum}
          placeholder="account number"
          onChange={handleChange}
        />
        <div className="mt-10">
          <button
            type="button"
            onClick={submitForm}
            className="primary_button block"
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default PaymentInformation;
