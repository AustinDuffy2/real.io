import React from "react";

import { Button, Img, Input, Line, PagerIndicator, Text } from "components";
import Header from "components/Header";
import SignUpScreenLogin from "components/SignUpScreenLogin";

const SignUpScreenPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-start mx-auto py-5 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
        <SignUpScreenLogin className="flex md:flex-col flex-row gap-[30px] items-center justify-start px-3 py-2.5 w-full" />
      </div>
    </>
  );
};

export default SignUpScreenPage;
