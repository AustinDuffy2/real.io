import React from "react";

import { Img, Line, Text } from "components";

const HomeLayout219 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="flex-1 md:flex-none h-[630px] sm:h-auto object-cover w-full"
          src="images/img_frame1000001540.png"
          alt="frame1000001540"
        />
        <div className="flex flex-1 flex-col items-start justify-center w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <div className="border border-light_blue-500_3f border-solid flex md:flex-col flex-row gap-8 items-start justify-start px-[10.41px] py-[20.82px] rounded-[20px] shadow-bs6 w-full">
              <Line className="bg-black-900 md:h-0.5 h-[196px] w-0.5 md:w-full" />
              <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
                <Text
                  className="leading-[130.00%] max-w-[639px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtRobotoBold32"
                >
                  {props?.headingone}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[639px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.descriptionone}
                </Text>
              </div>
            </div>
            <div className="border border-light_blue-500_3f border-solid flex flex-col items-start justify-start px-[10.41px] py-[20.82px] rounded-[20px] shadow-bs6 w-full">
              <div className="flex flex-col gap-4 items-start justify-center w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                  size="txtRobotoBold32"
                >
                  {props?.headingtwo}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[639px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.descriptiontwo}
                </Text>
              </div>
            </div>
            <div className="border border-light_blue-500_3f border-solid flex flex-col items-start justify-start p-[20.82px] sm:px-5 rounded-[20px] shadow-bs6 w-full">
              <div className="flex flex-col gap-4 items-start justify-center w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                  size="txtRobotoBold32"
                >
                  {props?.headingthree}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[618px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.descriptionthree}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeLayout219.defaultProps = {
  headingone: "Discover Personalized Property Recommendations",
  descriptionone: (
    <>
      Our AI-powered platform analyzes real estate data to provide you with
      personalized property recommendations based on your preferences and
      requirements. Whether you&#39;re looking for commercial real estate,
      multi-family properties, industrial sites, or rental properties, we&#39;ve
      got you covered.
    </>
  ),
  headingtwo: "Get Comprehensive Market Analysis",
  descriptiontwo: (
    <>
      Stay ahead of the market with our comprehensive market analysis. Our AI
      platform analyzes real estate trends, market conditions, and investment
      opportunities to help you make informed decisions. Whether you&#39;re a
      buyer, seller, or investor, our market analysis will provide valuable
      insights to guide your real estate strategy.
    </>
  ),
  headingthree: "Find Your Dream Property",
  descriptionthree:
    "Search for your dream property with ease using our advanced search capabilities. Our AI-powered platform allows you to search for commercial real estate, multi-family properties, industrial sites, and rental properties around the world. With highly trained AI algorithms, we ensure that you find the perfect property that meets your specific needs and preferences.",
};

export default HomeLayout219;
