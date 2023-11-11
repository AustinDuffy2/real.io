import React from "react";

import { Button, Img, List, Text } from "components";

const PropertiesPortfolio8 = (props) => {
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
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.heading}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.language}
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
          <div className="flex flex-col items-start justify-center w-full">
            <List
              className="sm:flex-col flex-row gap-12 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
                <Img
                  className="h-[630px] md:h-auto object-cover w-full"
                  src="images/img_frame1000001540.png"
                  alt="frame1000001540"
                />
                <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                      size="txtRobotoBold24"
                    >
                      {props?.projectname}
                    </Text>
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      {props?.projectdescription}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start pt-4 w-full">
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.tagone}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.tagtwo}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[76px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.tagthree}
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-6 w-full">
                    <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs3 w-[120px]">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtRobotoRegular16"
                      >
                        {props?.actionbutton}
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
              <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
                <Img
                  className="h-[630px] md:h-auto object-cover w-full"
                  src="images/img_frame1000001540.png"
                  alt="frame1000001540"
                />
                <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                      size="txtRobotoBold24"
                    >
                      {props?.projectname1}
                    </Text>
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      {props?.projectdescription1}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start pt-4 w-full">
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.tagone1}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.tagtwo1}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[76px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.tagthree1}
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-6 w-full">
                    <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs3 w-[120px]">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtRobotoRegular16"
                      >
                        {props?.actionbutton1}
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
            </List>
          </div>
          <Button
            className="!text-white-A700 bg-light_blue-500_72 cursor-pointer font-roboto h-12 text-base text-center w-[104px]"
            shape="round"
            color="light_blue_500_72"
            size="lg"
            variant="fill"
          >
            {props?.button}
          </Button>
        </div>
      </div>
    </>
  );
};

PropertiesPortfolio8.defaultProps = {
  subheading: "Portfolio",
  heading: "Short heading goes here",
  language: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  projectname: "Project name here",
  projectdescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  tagone: "Tag one",
  tagtwo: "Tag two",
  tagthree: "Tag three",
  actionbutton: "Button",
  projectname1: "Project name here",
  projectdescription1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  tagone1: "Tag one",
  tagtwo1: "Tag two",
  tagthree1: "Tag three",
  actionbutton1: "Button",
  button: "Button",
};

export default PropertiesPortfolio8;
