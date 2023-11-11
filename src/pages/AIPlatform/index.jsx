import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import AIPlatformLayout121 from "components/AIPlatformLayout121";
import AIPlatformLayout241 from "components/AIPlatformLayout241";
import AIPlatformLayout25 from "components/AIPlatformLayout25";
import AIPlatformLayout27 from "components/AIPlatformLayout27";
import AIPlatformTestimonial7 from "components/AIPlatformTestimonial7";
import Header from "components/Header";
import PropertiesHeader26 from "components/PropertiesHeader26";
import PropertyDetailsCta7 from "components/PropertyDetailsCta7";

const AIPlatformPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-start mx-auto py-5 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
        <PropertiesHeader26 className="flex md:flex-col flex-row font-robotocondensed gap-[30px] items-start justify-center p-2.5 w-full" />
        <div className="flex flex-col font-roboto gap-[31.24px] items-center justify-start px-3 py-2.5 w-full">
          <Text
            className="text-black-900 text-lg text-shadow-ts2 w-full"
            size="txtRobotoBold18"
          >
            Trusted by industry-leading companies worldwide
          </Text>
          <Img
            className="h-14 max-w-[1416px] mx-auto w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <AIPlatformLayout241 className="flex flex-col font-roboto md:gap-10 gap-20 items-start justify-start px-3 py-2.5 w-full" />
        <AIPlatformLayout121 className="flex flex-col font-roboto gap-20 items-start justify-start px-3 py-2.5 w-full" />
        <AIPlatformLayout25 className="flex md:flex-col flex-row font-roboto md:gap-10 gap-20 items-start justify-start px-3 py-2.5 w-full" />
        <AIPlatformTestimonial7 className="flex flex-col font-roboto gap-20 items-center justify-start px-3 py-2.5 w-full" />
        <AIPlatformLayout27 className="flex flex-col gap-20 items-start justify-start px-3 py-2.5 w-full" />
        <PropertyDetailsCta7 className="flex flex-col font-roboto gap-20 items-start justify-start px-3 py-2.5 w-full" />
        <footer className="flex font-roboto items-center justify-center px-3 md:px-5 py-2.5 w-full">
          <div className="flex flex-col gap-[30px] items-center justify-center w-full">
            <div className="border border-black-900 border-solid flex flex-row items-start justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-1 flex-col gap-[30.73px] items-start justify-start w-full">
                  <Img
                    className="h-[25px] w-[60px]"
                    src="images/img_logo.svg"
                    alt="logo_One"
                  />
                  <div className="flex flex-col gap-[23.05px] items-start justify-start w-full">
                    <div className="flex flex-col gap-[3.84px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-sm w-full"
                        size="txtRobotoSemiBold14"
                      >
                        Address:
                      </Text>
                      <Text
                        className="text-black-900 text-sm w-full"
                        size="txtRobotoRegular14"
                      >
                        Level 1, 12 Sample St, Sydney NSW 2000
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[3.84px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-sm w-full"
                        size="txtRobotoSemiBold14"
                      >
                        Contact:
                      </Text>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-sm underline w-full"
                          size="txtRobotoRegular14"
                        >
                          1800 123 4567
                        </Text>
                        <Text
                          className="text-black-900 text-sm underline w-full"
                          size="txtRobotoRegular14"
                        >
                          info@relume.io
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[11.52px] items-start justify-start w-auto">
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_iconfacebook.svg"
                        alt="iconfacebook"
                      />
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_iconinstagram.svg"
                        alt="iconinstagram"
                      />
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin"
                      />
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_iconyoutube.svg"
                        alt="iconyoutube"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-[23.05px] items-start justify-start w-full">
                  <ul className="flex flex-1 flex-col gap-[11.52px] items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Home</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">About Us</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Property Search</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Property Detail</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">AI Platform</Text>
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-1 flex-col gap-[11.52px] items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Search</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Contact Us</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Sign In</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Sign Up</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30.73px] items-start justify-start w-full">
              <Line className="bg-black-900 h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 gap-[61.47px] items-start justify-between w-full">
                <Text
                  className="flex-1 text-black-900 text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  © 2023 Relume. All rights reserved.
                </Text>
                <div className="flex flex-1 flex-row gap-[23.05px] items-start justify-start w-full">
                  <a
                    href="javascript:"
                    className="flex-1 text-black-900 text-sm underline w-auto"
                  >
                    <Text size="txtRobotoRegular14">Privacy Policy</Text>
                  </a>
                  <a
                    href="javascript:"
                    className="flex-1 text-black-900 text-sm underline w-auto"
                  >
                    <Text size="txtRobotoRegular14">Terms of Service</Text>
                  </a>
                  <Text
                    className="text-black-900 text-sm underline w-auto"
                    size="txtRobotoRegular14"
                  >
                    Cookies Settings
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AIPlatformPage;
