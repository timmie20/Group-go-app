import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Field, Form } from "formik";
import InputField from "./InputField";

const PaymentInformation = () => {
  const { setCurrentStep, stepData } = useContext(AppContext);

  return (
    <>
      <Form className="payment_info_container">
        <h4 className="font-normal">How would you like to get paid?</h4>
        <Field
          id="bank_name"
          type="text"
          label="Name of bank"
          name="paymentInfo.bankName"
          component={InputField}
          placeholder="GT bank..."
        />

        <Field
          id="acc_num"
          type="text"
          label="Account number"
          name="paymentInfo.accountNum"
          component={InputField}
          placeholder="account number"
        />
        <div className="mt-10">
          <button
            onClick={() => setCurrentStep(stepData[3])}
            className="primary_button block"
          >
            Continue
          </button>
        </div>
      </Form>
    </>
  );
};

export default PaymentInformation;
