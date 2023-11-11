import React from "react";

import { Button, Img, Text } from "components";

const HomeRowmediumlengthher = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-center justify-center w-full">
          <Text
            className="leading-[120.00%] max-w-[685px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center"
            size="txtRobotoCondensedBold56"
          >
            {props?.searchtext}
          </Text>
          <div className="flex flex-col items-center justify-start p-[3px] w-full">
            <Text
              className="max-w-[679px] md:max-w-full text-[13px] text-black-900 text-center tracking-[-0.26px]"
              size="txtWorkSansRegular13"
            >
              {props?.descriptiontext}
            </Text>
          </div>
          <div className="flex flex-row gap-[15.37px] items-center justify-center p-[3px] w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[94px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.searchbutton}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-[42px] min-w-[99px] text-base text-center"
              shape="round"
              color="light_blue_500_72"
              size="md"
              variant="fill"
            >
              {props?.signupbutton}
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start rounded-[10px] shadow-bs4 w-[90%] md:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-[610px] md:w-full">
              <Text
                className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900 w-full"
                size="txtDarkerGrotesqueBold29"
              >
                {props?.bestaitext}
              </Text>
              <div className="flex md:flex-col flex-row gap-2 items-center justify-start w-full">
                <div className="flex relative w-[99px]">
                  <div className="flex my-auto w-[79%]">
                    <div className="flex my-auto w-[74%]">
                      <Img
                        className="h-[37px] ml-[undefinedpx] my-auto rounded-[50%] w-[37px] z-[1]"
                        src="images/img_ellipse1.png"
                        alt="ellipseOne"
                      />
                      <Img
                        className="h-[37px] ml-[-16.19px] my-auto rounded-[50%] w-[37px] z-[1]"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo"
                      />
                    </div>
                    <Img
                      className="h-[37px] ml-[-16.19px] my-auto rounded-[50%] w-[37px] z-[1]"
                      src="images/img_ellipse3.png"
                      alt="ellipseThree"
                    />
                  </div>
                  <Img
                    className="h-[37px] ml-[-16.18px] my-auto rounded-[50%] w-[37px] z-[1]"
                    src="images/img_ellipse4.png"
                    alt="ellipseFour"
                  />
                </div>
                <Text
                  className="flex-1 leading-[101.00%] max-w-[503px] md:max-w-full text-[15px] text-black-900"
                  size="txtDarkerGrotesqueMedium15"
                >
                  {props?.joincommunitytext}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="flex-1 md:flex-none h-[630px] sm:h-auto object-cover w-full"
          src="images/img_frame1000001540.png"
          alt="frame1000001539"
        />
      </div>
    </>
  );
};

HomeRowmediumlengthher.defaultProps = {
  searchtext: "Find the perfect property for your needs today",
  descriptiontext:
    "Discover a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world with our AI-powered platform.",
  searchbutton: "Search",
  signupbutton: "Sign Up",
  bestaitext: "We have the best AI image generator",
  joincommunitytext: (
    <>
      Join our Community,
      <br />
      We are waiting for you
    </>
  ),
};

export default HomeRowmediumlengthher;
