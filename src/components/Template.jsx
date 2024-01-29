import React from "react";

const Template = ({ template, handleRedirect }) => {
  return (
    <>
      <div className="template_module_container">
        <div className="w-full">
          <img src={template.imgUrl} alt={template.imageAlt} />
        </div>
        <p className="pl-1 font-normal text-black-clr">
          {template.templateName}
        </p>
        <div
          className="choose_template_button"
          onClick={() => handleRedirect(template.id)}
        >
          <p className="text-[15px]"> choose template</p>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0893 9.91083C13.2455 10.0671 13.3333 10.279 13.3333 10.5C13.3333 10.721 13.2455 10.9329 13.0893 11.0892L8.37512 15.8033C8.29825 15.8829 8.2063 15.9464 8.10463 15.9901C8.00296 16.0338 7.89361 16.0567 7.78296 16.0577C7.67231 16.0587 7.56258 16.0376 7.46016 15.9957C7.35775 15.9538 7.2647 15.8919 7.18646 15.8137C7.10822 15.7354 7.04634 15.6424 7.00444 15.54C6.96254 15.4375 6.94145 15.3278 6.94241 15.2172C6.94338 15.1065 6.96636 14.9972 7.01004 14.8955C7.05371 14.7938 7.1172 14.7019 7.19679 14.625L11.3218 10.5L7.19679 6.375C7.04499 6.21783 6.961 6.00733 6.96289 5.78883C6.96479 5.57033 7.05243 5.36132 7.20694 5.20682C7.36145 5.05231 7.57046 4.96467 7.78896 4.96277C8.00745 4.96087 8.21795 5.04487 8.37512 5.19666L13.0893 9.91083Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Template;
