import React from "react";
import { Link } from "react-router-dom";
import { Img,Line, Text } from "components";
import SearchBar from "pages/SearchBar";


const Header = (props) => {
  return (
    <>
      <header className={props.className} style={{Shadow:"#8F8952"}}>
        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-5 items-center justify-center p-6 sm:px-5 w-full" >
          <div className="header-row mt-0.5 mb-[5px]">
            <div className="flex flex-row gap-3.5 items-center justify-center">
              <Img src="images/img_edit.svg" className="h-6 w-6" alt="edit" />
              <Text
                className="font-extrabold font-nunitosans text-gray_600 uppercase"
                as="h4"
                variant="h4"
              >
                <Link to="/Home">
                Empowering Voices
                </Link>
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-start md:ml-[0] ml-[211px] w-[29%] md:w-full">
            <div className="flex flex-col items-start justify-start w-1/5 sm:w-full">
              {/* <Text
                className="font-bold font-publicsans text-indigo_200 tracking-[0.12px]"
                as="h5"
                variant="h5"><Link to="/Home">
                Home
                </Link>
              </Text> */}
              {/* <Line className="bg-indigo_900 h-px mt-1 w-[64%]" /> */}
            </div>
            <Text
              className="font-bold font-publicsans text-indigo_200 tracking-[0.12px]"
              as="h5"
              variant="h5"
            >
              <Link to="/podcasts">Podcast</Link>
            </Text>
            <Text
              className="font-bold font-publicsans ml-[29px] text-indigo_200 tracking-[0.12px]"
              as="h5"
              variant="h5"
            >
              <Link to="/Blogs">Blog</Link>
            </Text>
            <Text
              className="font-bold font-publicsans ml-[30px] text-indigo_200 tracking-[0.12px]"
              as="h5"
              variant="h5"
            >
            <Link to="/EventList"> Events</Link>
            </Text>
            <Text
              className="font-bold font-publicsans ml-[29px] text-indigo_200 tracking-[0.12px]"
              as="h5"
              variant="h5"
            >
              <Link to="/contactUs">Contact</Link>
            </Text>
            <Text
              className="font-bold font-publicsans ml-[29px] text-indigo_200 tracking-[0.12px]"
              as="h5"
              variant="h5"
            >
              <Link to="/job">Jobs</Link>
            </Text>
          </div>
          <button >
          <Img
            src="images/img_search.svg"
            className="h-[30px] sm:hidden mb-0.5 md:ml-[0] ml-[324px] w-[30px]"
            alt="search"
          />
          </button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
