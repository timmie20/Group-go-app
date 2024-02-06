import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FiAlertCircle } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineBellAlert } from "react-icons/hi2";

const Signin = () => {
  const {
    email,
    setEmail,
    sendEmailLink,
    handleSignInUser,
    navigate,
    user,
    search,
    alertMsg,
    signInWithGoogle,
  } = useContext(AuthContext);

  // useEffect(() => {
  //   handleSignInUser();
  // }, [user, navigate, search]);

  const handleGoogleSignin = async () => {
    try {
      await signInWithGoogle();
      if (user) {
        navigate("/create");
      } else {
        console.log("unable to sign in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-white px-14 py-16 shadow-xl"
          >
            <FiAlertCircle className="absolute -right-24 -top-24 z-0 rotate-12 text-[250px] text-red-200" />

            <form onSubmit={(event) => sendEmailLink(event, email)}>
              <div>
                <h2>groupgo</h2>
                <p>Sign in or sign up to create an event</p>
              </div>
              <div className="mt-6 flex flex-col gap-[22px]">
                <fieldset className="field_set_div">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="inputs"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {alertMsg && (
                    <div className="flex items-center gap-1">
                      <HiOutlineBellAlert color="red" />
                      <span className="text-[12px]">{alertMsg}</span>
                    </div>
                  )}
                </fieldset>
                <div>
                  <button
                    className="signin_btn bg-orange-clr text-white "
                    type="submit"
                  >
                    continue with email
                  </button>
                  <div
                    className="signin_btn mt-3 flex items-center justify-center gap-2 bg-[#F8F8F8] text-black-clr"
                    onClick={handleGoogleSignin}
                  >
                    <FcGoogle size={24} />
                    <span>Continue with google</span>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Signin;
