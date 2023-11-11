import React from "react";

import { Button, Img, Text } from "components";

const HomeColumnframe = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-5 items-center justify-center px-2.5 w-full">
          <div className="flex flex-1 flex-col gap-[18px] items-center justify-start p-2.5 w-full">
            <Button
              className="flex h-[60px] items-center justify-center w-[60px]"
              shape="circle"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <Img className="h-8" src="images/img_frame.svg" alt="frame" />
            </Button>
            <div className="flex flex-col gap-3.5 items-center justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center text-shadow-ts w-full"
                size="txtRobotoCondensedBold48"
              >
                {props?.userprice}
              </Text>
              <Text
                className="max-w-[314px] md:max-w-full text-[13px] text-black-900 text-center tracking-[-0.26px]"
                size="txtWorkSansRegular13"
              >
                {props?.ownedfromproperOne}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[18px] items-center justify-start p-2.5 w-full">
            <Button
              className="flex h-[60px] items-center justify-center w-[60px]"
              shape="circle"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <Img
                className="h-8"
                src="images/img_frame_orange_a700.svg"
                alt="frame_One"
              />
            </Button>
            <div className="flex flex-col gap-3.5 items-center justify-center w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center text-shadow-ts w-full"
                size="txtRobotoCondensedBold48"
              >
                {props?.user25k}
              </Text>
              <Text
                className="text-[13px] text-black-900 text-center tracking-[-0.26px] w-full"
                size="txtWorkSansRegular13"
              >
                {props?.propertysforbuy}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[18px] items-center justify-start p-2.5 w-full">
            <Img
              className="h-[60px] w-[60px]"
              src="images/img_file.svg"
              alt="file"
            />
            <div className="flex flex-col gap-3.5 items-center justify-center w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center text-shadow-ts w-full"
                size="txtRobotoCondensedBold48"
              >
                {props?.user500}
              </Text>
              <Text
                className="max-w-[314px] md:max-w-full text-[13px] text-black-900 text-center tracking-[-0.26px]"
                size="txtWorkSansRegular13"
              >
                {props?.dailycompleted}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[18px] items-center justify-start p-2.5 w-full">
            <Img
              className="h-[60px] w-[60px]"
              src="images/img_file_white_a700.svg"
              alt="file_One"
            />
            <div className="flex flex-col gap-3.5 items-center justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center text-shadow-ts w-full"
                size="txtRobotoCondensedBold48"
              >
                {props?.user600}
              </Text>
              <Text
                className="text-[13px] text-black-900 text-center tracking-[-0.26px] w-full"
                size="txtWorkSansRegular13"
              >
                {props?.reagularclientsOne}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeColumnframe.defaultProps = {
  userprice: "$15.4M",
  ownedfromproperOne: (
    <>
      Owned from
      <br />
      Properties transactions
    </>
  ),
  user25k: "25K+",
  propertysforbuy: "Properties for Buy & sell Successfully",
  user500: "500",
  dailycompleted: (
    <>
      Daily completed <br />
      transactions
    </>
  ),
  user600: "600+",
  reagularclientsOne: "Reagular Clients",
};

export default HomeColumnframe;
