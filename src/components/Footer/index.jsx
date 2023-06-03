import React from "react";
import { Link } from "react-router-dom";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-center mb-[35px] mt-[65px] mx-auto w-[78%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-end w-[31%] md:w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start mt-0.5 w-[43%] md:w-full">
                <Img
                  src="defaultNoData.png"
                  className="h-6 w-6"
                  alt="edit One"
                />
                <Text
                  className="font-extrabold font-nunitosans text-white_A700 uppercase"
                  as="h4"
                  variant="h4"
                >
                  Empowering Voices
                </Text>
              </div>
              {/* <div className="flex flex-row gap-2.5 items-start justify-start w-[48%] md:w-full">
                <Img
                  src="images/img_favorite.svg"
                  className="h-5 w-5"
                  alt="favorite"
                />
                <Text
                  className="font-medium font-publicsans text-white_A700"
                  as="h5"
                  variant="h5"
                >
                  Build with heart
                </Text>
              </div> */}
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-[50px] items-start justify-center md:mt-0 mt-[23px] w-[43%] md:w-full">
              <Text
                className="font-light font-publicsans text-white_A700"
                as="h5"
                variant="h5"
              >
                <Link to="/Home">
                Home
                </Link>
              </Text>
              <Text
                className="font-light font-publicsans text-white_A700"
                as="h5"
                variant="h5"
              >
                <Link to="/podcasts">Podcast</Link>
              </Text>
              <Text
                className="font-light font-publicsans text-white_A700"
                as="h5"
                variant="h5"
              >
                <Link to="/Blogs">Blog</Link>
              </Text>
              <Text
                className="font-light font-publicsans text-white_A700"
                as="h5"
                variant="h5"
              >
                Events
              </Text>
              <Text
                className="font-light font-publicsans text-white_A700"
                as="h5"
                variant="h5"
              >
                <Link to="/contactUs">Contact</Link>
              </Text>
            </div>
            {/* <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[178px] w-[11%] md:w-full">
              <Text
                className="font-bold font-publicsans text-white_A700"
                as="h5"
                variant="h5"
              >
                Follow Me on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="h-[25px] w-full"
                alt="GroupNinetyFour"
              />
            </div> */}
          </div>
          <Text
            className="font-light font-publicsans text-white_A700"
            variant="body1"
          >
            Powered by Dev Dynasty
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
