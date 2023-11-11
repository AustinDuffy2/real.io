import React from "react";

import { Button, Img, Text } from "components";

const AboutUsLayout4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-6 items-center justify-start px-5 w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtRobotoSemiBold16"
              >
                {props?.subheading}
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[120.00%] max-w-[653px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.heading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[653px] md:max-w-full text-black-900 text-center text-lg"
                  size="txtRobotoRegular18"
                >
                  {props?.description}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-center py-2 w-full">
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.subheadingone}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[314px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.text}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.subheadingtwo}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[314px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.textOne}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center justify-center pt-4 w-full">
            <Button
              className="!text-white-A700 bg-light_blue-500_7f cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
              shape="round"
              color="light_blue_500_7f"
              size="lg"
              variant="fill"
            >
              {props?.learnmorelabel}
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
        <Img
          className="flex-1 md:flex-none h-[630px] sm:h-auto object-cover w-full"
          src="images/img_frame1000001540.png"
          alt="frame1000001540"
        />
      </div>
    </>
  );
};

AboutUsLayout4.defaultProps = {
  subheading: "Revolutionize",
  heading: "Discover Your Dream Property with Our AI Platform",
  description:
    "Our AI platform utilizes advanced technology to provide users with an effortless way to find the perfect property. With our powerful search capabilities, you can easily explore a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world.",
  subheadingone: "Efficient Search",
  text: "Quickly find the properties that meet your specific criteria and preferences.",
  subheadingtwo: "Smart Recommendations",
  textOne:
    "Receive personalized property recommendations based on your search history and preferences.",
  learnmorelabel: "Learn More",
  signupbuttontext: "Sign Up",
};

export default AboutUsLayout4;
