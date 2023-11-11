import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeColumnframe from "components/HomeColumnframe";
import HomeColumniconrelume from "components/HomeColumniconrelume";
import HomeLayout219 from "components/HomeLayout219";
import HomeLayoutcustom1 from "components/HomeLayoutcustom1";
import HomeRowmediumlengthher from "components/HomeRowmediumlengthher";
import HomeTestimonial4 from "components/HomeTestimonial4";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-start mx-auto py-5 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
        <HomeRowmediumlengthher className="bg-white-A700 flex md:flex-col flex-row font-robotocondensed gap-[30px] items-center justify-center p-5 w-full" />
        <HomeColumnframe className="flex flex-col gap-[30px] items-start justify-start px-3 py-2.5 w-full" />
        <div className="flex flex-col font-roboto gap-[30px] items-center justify-start px-[11.52px] py-[9.6px] w-full">
          <Text
            className="text-black-900 text-lg text-shadow-ts1 w-full"
            size="txtRobotoBold18"
          >
            Trusted by industry-leading companies worldwide
          </Text>
          <Img
            className="h-[53px] max-w-[1416px] mx-auto w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <HomeLayoutcustom1 className="flex flex-col font-roboto gap-[30px] items-start justify-start px-3 py-2.5 w-full" />
        <HomeLayout219 className="flex md:flex-col flex-row font-roboto gap-[31.24px] items-start justify-center px-[12.49px] py-[10.41px] w-full" />
        <HomeTestimonial4 className="flex flex-col font-roboto gap-[30px] items-center justify-start px-3 py-2.5 w-full" />
        <HomeColumniconrelume className="flex flex-col font-roboto gap-[30px] items-center justify-start px-[11.52px] py-[9.6px] w-full" />
        <div className="flex flex-col font-roboto gap-6 items-center justify-start px-3 py-2.5 w-full">
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
        <Footer className="flex font-roboto gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
