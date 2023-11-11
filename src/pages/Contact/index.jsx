import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import ContactContact15 from "components/ContactContact15";
import ContactContact27 from "components/ContactContact27";
import ContactContact4 from "components/ContactContact4";
import ContactTeam1 from "components/ContactTeam1";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-start mx-auto py-5 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
        <ContactContact27 className="flex flex-col md:gap-10 gap-20 items-start justify-start px-3 py-2.5 w-full" />
        <ContactTeam1 className="flex flex-col md:gap-10 gap-20 items-center justify-start px-3 py-2.5 w-full" />
        <ContactContact15 className="flex md:flex-col flex-row gap-[30px] items-start justify-center px-3 py-2.5 w-full" />
        <ContactContact4 className="flex flex-col gap-12 items-start justify-start px-3 py-2.5 w-full" />
        <Footer className="flex gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
