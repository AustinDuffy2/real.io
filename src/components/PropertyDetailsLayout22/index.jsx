import React from "react";

import { Button, Img, Text } from "components";

const PropertyDetailsLayout22 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col items-start justify-center w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Img
                className="h-20 w-20"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.headingtext}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[703px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoRegular18"
                >
                  {props?.descriptiontext}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start pt-4 w-full">
              <Button
                className="!text-white-A700 bg-light_blue-500_72 cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
                shape="round"
                color="light_blue_500_72"
                size="lg"
                variant="fill"
              >
                {props?.learnmorebuttontext}
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs3 w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.signupbuttontext}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_folder.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
        </div>
        <Img
          className="flex-1 md:flex-none h-[630px] sm:h-auto object-cover w-full"
          src="images/img_frame1000001540.png"
          alt="frame1000001540"
        />
      </div>
    </>
  );
};

PropertyDetailsLayout22.defaultProps = {
  headingtext: "Key Features of the Property",
  descriptiontext:
    "Discover the amazing amenities, nearby facilities, and investment potential of this property.",
  learnmorebuttontext: "Learn More",
  signupbuttontext: "Sign Up",
};

export default PropertyDetailsLayout22;
