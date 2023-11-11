import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AboutUsLayout4 from "components/AboutUsLayout4";
import AboutUsTeam8 from "components/AboutUsTeam8";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeColumniconrelume from "components/HomeColumniconrelume";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-start mx-auto py-5 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
        <AboutUsLayout4 className="flex md:flex-col flex-row gap-[30px] items-start justify-center px-3 py-2.5 w-full" />
        <div className="flex flex-col gap-[31.24px] items-center justify-start px-3 py-2.5 w-full">
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
        <HomeColumniconrelume className="flex flex-col gap-[31.24px] items-center justify-start px-3 py-2.5 w-full" />
        <AboutUsTeam8 className="flex flex-col md:gap-10 gap-20 items-center justify-start px-3 py-2.5 w-full" />
        <div className="flex flex-col gap-6 items-center justify-start px-3 py-2.5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start max-w-[1416px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
              size="txtRobotoBold32"
            >
              Join Us!
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              Exciting opportunities to be part of our team
            </Text>
          </div>
          <Button
            className="!text-white-A700 bg-light_blue-500_7f cursor-pointer h-12 text-base text-center w-[155px]"
            shape="round"
            color="light_blue_500_7f"
            size="lg"
            variant="fill"
          >
            Button
          </Button>
        </div>
        <Footer className="flex gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
