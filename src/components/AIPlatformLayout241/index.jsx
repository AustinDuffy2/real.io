import React from "react";

import { Button, Img, List, Text } from "components";

const AIPlatformLayout241 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingOne}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.descriptionOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <List
            className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                size="txtRobotoBold32"
              >
                {props?.propertysearchheading}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[440px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.propertysearchdescription}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                size="txtRobotoBold32"
              >
                {props?.markettrendsheading}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[440px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.markettrendsdescription}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <Text
                className="leading-[130.00%] max-w-[440px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtRobotoBold32"
              >
                {props?.recommendationsheading}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[440px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.recommendationsdescription}
              </Text>
            </div>
          </List>
          <div className="flex flex-row gap-6 items-center justify-center pt-4 w-auto">
            <Button
              className="!text-white-A700 bg-light_blue-500_72 cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
              shape="round"
              color="light_blue_500_72"
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
                {props?.button}
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
    </>
  );
};

AIPlatformLayout241.defaultProps = {
  subheading: "Discover",
  headingOne: "Unlock the Power of Our AI Platform",
  descriptionOne:
    "Our AI platform offers advanced property search capabilities, market trends analysis, and personalized recommendations to help you find the perfect real estate investment.",
  propertysearchheading: "Advanced Property Search",
  propertysearchdescription:
    "Effortlessly search for commercial real estate, multi-family properties, industrial sites, and rental properties around the world.",
  markettrendsheading: "Market Trends Analysis",
  markettrendsdescription:
    "Stay ahead of the curve with our AI-powered market trends analysis, providing valuable insights into real estate market dynamics.",
  recommendationsheading: "Personalized Recommendations",
  recommendationsdescription:
    "Receive tailored recommendations based on your preferences, ensuring you find the best investment opportunities.",
  learnmorelabel: "Learn More",
  button: "Sign Up",
};

export default AIPlatformLayout241;
