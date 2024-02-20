import React, { useState, useEffect, useRef } from "react";

const SendEmail = () => {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const emailInputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEmails([...emails, { id: emails.length + 1, email: email }]);
      setEmail("");
    } else return;
  };

  useEffect(() => {
    const emailInput = emailInputRef.current;
    emailInput.addEventListener("keydown", handleKeyDown);
    return () => emailInput.removeEventListener("keydown", handleKeyDown);
  }, [emails, email]);

  const handleRemoveEmail = (id) => {
    if (!emails) {
      return;
    } else {
      setEmails(emails.filter((email) => email.id !== id));
    }
  };

  return (
    <>
      <form className="send_email_form">
        <div className="space-y-7">
          <div className="field_set_div">
            <label htmlFor="emailInput">To</label>
            <div className="rounded-[15px] bg-white">
              <div className="email_list_container ">
                {emails?.map((email, i) => (
                  <span key={i}>
                    {email.email}

                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleRemoveEmail(email.id)}
                      className="cursor-pointer"
                    >
                      <path
                        d="M9.72517 0.2825C9.65578 0.212972 9.57337 0.157812 9.48264 0.120175C9.3919 0.0825394 9.29464 0.0631667 9.19642 0.0631667C9.09819 0.0631667 9.00093 0.0825394 8.9102 0.120175C8.81947 0.157812 8.73705 0.212972 8.66767 0.2825L5.00017 3.9425L1.33267 0.275C1.26323 0.205563 1.1808 0.150483 1.09008 0.112905C0.999352 0.0753258 0.902116 0.0559845 0.803918 0.0559845C0.70572 0.0559845 0.608483 0.0753258 0.51776 0.112905C0.427037 0.150483 0.344604 0.205563 0.275168 0.275C0.205731 0.344436 0.150651 0.426869 0.113072 0.517592C0.0754937 0.608315 0.0561523 0.705552 0.0561523 0.80375C0.0561523 0.901948 0.0754937 0.999184 0.113072 1.08991C0.150651 1.18063 0.205731 1.26306 0.275168 1.3325L3.94267 5L0.275168 8.6675C0.205731 8.73694 0.150651 8.81937 0.113072 8.91009C0.0754937 9.00082 0.0561523 9.09805 0.0561523 9.19625C0.0561523 9.29445 0.0754937 9.39168 0.113072 9.48241C0.150651 9.57313 0.205731 9.65556 0.275168 9.725C0.344604 9.79444 0.427037 9.84952 0.51776 9.88709C0.608483 9.92467 0.70572 9.94401 0.803918 9.94401C0.902116 9.94401 0.999352 9.92467 1.09008 9.88709C1.1808 9.84952 1.26323 9.79444 1.33267 9.725L5.00017 6.0575L8.66767 9.725C8.7371 9.79444 8.81954 9.84952 8.91026 9.88709C9.00098 9.92467 9.09822 9.94401 9.19642 9.94401C9.29461 9.94401 9.39185 9.92467 9.48257 9.88709C9.5733 9.84952 9.65573 9.79444 9.72517 9.725C9.7946 9.65556 9.84968 9.57313 9.88726 9.48241C9.92484 9.39168 9.94418 9.29445 9.94418 9.19625C9.94418 9.09805 9.92484 9.00082 9.88726 8.91009C9.84968 8.81937 9.7946 8.73694 9.72517 8.6675L6.05767 5L9.72517 1.3325C10.0102 1.0475 10.0102 0.5675 9.72517 0.2825Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                ))}
              </div>
              <input
                ref={emailInputRef}
                id="emailInput"
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-[15px] bg-transparent px-6 py-2 font-light focus:shadow-none focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="field_set_div">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Geng meetup at fancy restaurant"
              className="inputs"
            />
          </div>

          <div className="field_set_div">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Hey, Let’s all catchup and have fun at a fancy restaurant!"
              className="inputs"
            />
          </div>
        </div>
        <div className="mt-5">
          {/* <PrimaryButton>Send event invite</PrimaryButton> */}
        </div>
      </form>
    </>
  );
};

export default SendEmail;
