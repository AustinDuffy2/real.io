import React from "react";

import { Button, Img, Text } from "components";

const PropertiesHeader26 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-[38.42px] items-center justify-center w-full">
          <Text
            className="leading-[120.00%] max-w-[695px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center"
            size="txtRobotoCondensedBold56"
          >
            {props?.mediumlengthhertext}
          </Text>
          <div className="flex flex-col items-center justify-start p-[2.88px] w-full">
            <Text
              className="max-w-[689px] md:max-w-full text-[13px] text-black-900 text-center tracking-[-0.26px]"
              size="txtWorkSansRegular13"
            >
              {props?.descriptiononetext}
            </Text>
          </div>
          <div className="flex flex-row gap-[14.76px] items-center justify-center p-[2.88px] w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[92px] rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.searchonebutton}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-10 min-w-[97px] rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500_72"
              size="md"
              variant="fill"
            >
              {props?.signupbutton}
            </Button>
          </div>
        </div>
        <Img
          className="flex-1 md:flex-none h-[605px] sm:h-auto object-cover w-full"
          src="images/img_frame1000001540.png"
          alt="frame1000001540"
        />
      </div>
    </>
  );
};

PropertiesHeader26.defaultProps = {
  mediumlengthhertext: "Find the perfect property for your needs today",
  descriptiononetext:
    "Discover a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world with our AI-powered platform.",
  searchonebutton: "Search",
  signupbutton: "Sign Up",
};

export default PropertiesHeader26;
