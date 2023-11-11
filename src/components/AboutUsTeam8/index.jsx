import React from "react";

import { Img, List, Text } from "components";

const AboutUsTeam8 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingone}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingtwo}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.loremipsumdolor}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start px-2.5 w-full">
            <List
              className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-6 items-center justify-start p-2.5 w-full">
                <Img
                  className="h-[388px] sm:h-auto object-cover w-full"
                  src="images/img_frame1000001540.png"
                  alt="frame1000001540"
                />
                <div className="flex flex-col gap-4 items-center justify-start px-2.5 w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[393px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-center w-[100px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start p-2.5 w-full">
                <Img
                  className="h-[388px] sm:h-auto object-cover w-full"
                  src="images/img_frame1000001540.png"
                  alt="frame1000001540"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name1}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle1}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[413px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description1}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start p-2.5 w-full">
                <Img
                  className="h-[388px] sm:h-auto object-cover w-full"
                  src="images/img_frame1000001540.png"
                  alt="frame1000001540"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name2}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle2}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[413px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description2}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

AboutUsTeam8.defaultProps = {
  subheadingone: "Revolutionizing",
  headingtwo: "Meet Our Team",
  loremipsumdolor: "Get to know the talented individuals driving our platform",
  name: "John Doe",
  jobtitle: "Founder",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name1: "Jane Smith",
  jobtitle1: "Developer",
  description1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name2: "Michael Johnson",
  jobtitle2: "Advisor",
  description2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default AboutUsTeam8;
