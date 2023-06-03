import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[111px] items-center justify-start mx-auto w-full">
        {/* <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-0.5 w-[81%]">
              <Img
                src="images/img_group150.svg"
                className="h-6 w-[14%]"
                alt="Group151"
              />
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[211px] w-[37%] md:w-full">
                <div className="flex flex-col justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-bold text-indigo_200 tracking-[0.12px]"
                      as="h5"
                      variant="h5"
                    >
                      Home
                    </Text>
                    <Text
                      className="font-bold text-indigo_200 tracking-[0.12px]"
                      as="h5"
                      variant="h5"
                    >
                      Podcast
                    </Text>
                    <Text
                      className="font-bold text-indigo_200 tracking-[0.12px]"
                      as="h5"
                      variant="h5"
                    >
                      Blog
                    </Text>
                    <Text
                      className="font-bold text-indigo_900 tracking-[0.12px]"
                      as="h5"
                      variant="h5"
                    >
                      About
                    </Text>
                    <Text
                      className="font-bold text-indigo_200 tracking-[0.12px]"
                      as="h5"
                      variant="h5"
                    >
                      Contact
                    </Text>
                  </div>
                  <Line className="bg-indigo_900 h-px md:ml-[0] ml-[251px] mr-[100px] mt-[3px] w-[13%]" />
                </div>
              </div>
              <Img
                src="images/img_search.svg"
                className="h-[30px] md:ml-[0] ml-[324px] w-[30px]"
                alt="search"
              />
            </div>
          </div>
        </header> */}
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1103px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[45px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="font-bold text-bluegray_600"
                  as="h3"
                  variant="h3"
                >
                  Contact us
                </Text>
                <Text
                  className="font-light mt-[5px] text-bluegray_600"
                  as="h5"
                  variant="h5"
                >
                  Complete the form to contact us
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start w-[29%] md:w-full">
                  <Text
                    className="font-bold text-bluegray_600"
                    as="h3"
                    variant="h3"
                  >
                    Info
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[44%] md:w-full">
                      <Img
                        src="images/img_call.svg"
                        className="h-5 w-5"
                        alt="call"
                      />
                      <Text
                        className="font-light text-bluegray_600"
                        as="h5"
                        variant="h5"
                      >
                        0331223282
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[3px] w-[67%] md:w-full">
                      <Img
                        src="images/img_mail.svg"
                        className="h-5 w-5"
                        alt="mail"
                      />
                      <Text
                        className="font-light text-bluegray_600"
                        as="h5"
                        variant="h5"
                      >
                        Hellolaos@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[9px] items-start justify-start md:ml-[0] ml-[3px] w-full">
                      <Img
                        src="images/img_location_20X17.svg"
                        className="h-5 mt-[5px] w-[6%]"
                        alt="location"
                      />
                      <Text
                        className="sm:flex-1 font-light leading-[30.00px] text-bluegray_600 w-[92%] sm:w-full"
                        as="h5"
                        variant="h5"
                      >
                        Massachusetts Ave NW, Washington, DC 20036
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-1 p-[26px] sm:px-5 rounded-[10px] shadow-bs4 w-[69%] md:w-full">
                  <div className="flex flex-col gap-[30px] items-start justify-start my-[17px] rounded-[5px] w-full">
                    <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-full">
                      <Input
                        wrapClassName="sm:flex-1 sm:w-full"
                        className="font-light leading-[normal] md:text-[22px] p-0 placeholder:text-gray_400 sm:text-xl text-2xl text-gray_400 text-left w-full"
                        type="text"
                        name="field"
                        placeholder="Your Name"
                        shape="RoundedBorder5"
                        size="sm"
                        variant="OutlineGray301"
                      ></Input>
                      <Input
                        wrapClassName="sm:flex-1 sm:w-full"
                        className="font-light leading-[normal] md:text-[22px] p-0 placeholder:text-gray_400 sm:text-xl text-2xl text-gray_400 text-left w-full"
                        type="email"
                        name="field One"
                        placeholder="Your Email"
                        shape="RoundedBorder5"
                        size="sm"
                        variant="OutlineGray301"
                      ></Input>
                    </div>
                    <Input
                      wrapClassName="w-full"
                      className="font-light leading-[normal] md:text-[22px] p-0 placeholder:text-gray_400 sm:text-xl text-2xl text-gray_400 text-left w-full"
                      name="field Two"
                      placeholder="Your Subject"
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineGray301"
                    ></Input>
                    <TextArea
                      className="font-light leading-[normal] text-2xl md:text-[22px] placeholder:text-gray_400 text-gray_400 text-left sm:text-xl w-full"
                      name="field Three"
                      placeholder="Description"
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineGray301"
                    ></TextArea>
                    <Button
                      className="cursor-pointer font-normal leading-[normal] min-w-[190px] text-center text-lg text-white_A700"
                      shape="RoundedBorder5"
                      size="3xl"
                      variant="FillIndigo900"
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray_600 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
