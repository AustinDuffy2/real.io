import React from "react";

import { Img, List, Text } from "components";

const ContactContact27 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.heading}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.language}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-16 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <Img
              className="h-[630px] md:h-auto object-cover w-full"
              src="images/img_frame1000001540.png"
              alt="frame1000001540"
            />
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtRobotoBold32"
                >
                  {props?.locationname1}
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.locationaddress1}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs3 w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.button1}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_folder.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <Img
              className="h-[630px] md:h-auto object-cover w-full"
              src="images/img_frame1000001540.png"
              alt="frame1000001540"
            />
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtRobotoBold32"
                >
                  {props?.locationname2}
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.locationaddress2}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs3 w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.button2}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_folder.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

ContactContact27.defaultProps = {
  subheading: "Tagline",
  heading: "Locations",
  language: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  locationname1: "Sydney",
  locationaddress1: "123 Sample St, Sydney NSW 2000 AU",
  button1: "Button",
  locationname2: "New York",
  locationaddress2: "123 Sample St, New York NY 10000 USA",
  button2: "Button",
};

export default ContactContact27;
