import React from "react";

import { Button, Img, List, Text } from "components";

const HomeLayoutcustom1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start py-[30px] w-full">
          <Text
            className="flex-1 sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-auto"
            size="txtRobotoCondensedBold40"
          >
            {props?.featuredpropertOne}
          </Text>
          <Button
            className="bg-transparent cursor-pointer flex flex-1 items-center justify-center w-full"
            rightIcon={
              <Img
                className="h-6 mb-px ml-2"
                src="images/img_arrowright.svg"
                alt="arrow_right"
              />
            }
            size="xs"
          >
            <div className="font-bold font-roboto text-gray-400 text-right text-xl">
              {props?.exploreAll}
            </div>
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start py-5 w-full">
          <div className="flex sm:flex-col flex-row gap-5 items-start justify-start py-[30px] w-full">
            <Button className="bg-transparent cursor-pointer font-medium font-roboto min-w-[145px] text-black-900 text-center text-lg">
              {props?.residentProperty}
            </Button>
            <Button className="bg-transparent cursor-pointer font-medium font-roboto min-w-[172px] text-black-900 text-center text-lg">
              {props?.commercialProperty}
            </Button>
            <Button className="bg-transparent cursor-pointer font-medium font-roboto min-w-[150px] text-black-900 text-center text-lg">
              {props?.industrialProperty}
            </Button>
            <Button className="bg-transparent cursor-pointer font-medium font-roboto min-w-[164px] text-black-900 text-center text-lg">
              {props?.agricultureProperty}
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center p-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-start justify-start rounded-[10px] shadow-bs5 w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoRegular20"
                    >
                      {props?.p286162ndaveoaklone}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <Button
                      className="!text-white-A700 cursor-pointer font-roboto min-w-[96px] text-base text-center"
                      shape="round"
                      color="light_blue_500"
                      size="lg"
                      variant="fill"
                    >
                      {props?.button}
                    </Button>
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.price}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start rounded-[10px] shadow-bs5 w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_image_260x300.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoMedium20"
                    >
                      {props?.p286162ndaveoaklone1}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom1}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter1}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter1}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings_20x20.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath1}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <Button
                      className="!text-white-A700 cursor-pointer font-roboto min-w-[96px] outline outline-[1px] outline-white-A700 text-base text-center"
                      shape="round"
                      color="light_blue_500"
                      size="lg"
                      variant="fill"
                    >
                      {props?.button1}
                    </Button>
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.price1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start rounded-[10px] shadow-bs5 w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoRegular20"
                    >
                      {props?.p286162ndaveoaklone2}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom2}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter2}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter2}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings_1.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath2}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <Button
                      className="!text-white-A700 cursor-pointer font-roboto min-w-[96px] outline outline-[1px] outline-white-A700 text-base text-center"
                      shape="round"
                      color="light_blue_500"
                      size="lg"
                      variant="fill"
                    >
                      {props?.button2}
                    </Button>
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.price2}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start rounded-[10px] shadow-bs5 w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoRegular20"
                    >
                      {props?.p286162ndaveoaklone3}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom3}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter3}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter3}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings_2.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath3}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <Button
                      className="!text-white-A700 cursor-pointer font-roboto min-w-[96px] outline outline-[1px] outline-white-A700 text-base text-center"
                      shape="round"
                      color="light_blue_500"
                      size="lg"
                      variant="fill"
                    >
                      {props?.button3}
                    </Button>
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.price3}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

HomeLayoutcustom1.defaultProps = {
  featuredpropertOne: "Featured Properties",
  exploreAll: "Explore All",
  residentProperty: "Resident Property",
  commercialProperty: "Commercial Property",
  industrialProperty: "Industrial Property",
  agricultureProperty: "Agriculture Property",
  p286162ndaveoaklone: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom: "3 Bed Room3",
  bathcounter: "1 Bath",
  sqftcounter: "1,032 sqft",
  p1bath: "Family",
  button: "Button",
  price: "$649,900",
  p286162ndaveoaklone1: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom1: "3 Bed Room",
  bathcounter1: "1 Bath",
  sqftcounter1: "1,032 sqft",
  p1bath1: "Family",
  button1: "Button",
  price1: "$649,900",
  p286162ndaveoaklone2: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom2: "3 Bed Room",
  bathcounter2: "1 Bath",
  sqftcounter2: "1,032 sqft",
  p1bath2: "Family",
  button2: "Button",
  price2: "$649,900",
  p286162ndaveoaklone3: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom3: "3 Bed Room",
  bathcounter3: "1 Bath",
  sqftcounter3: "1,032 sqft",
  p1bath3: "Family",
  button3: "Button",
  price3: "$649,900",
};

export default HomeLayoutcustom1;
