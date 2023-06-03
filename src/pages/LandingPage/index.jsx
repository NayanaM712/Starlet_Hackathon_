import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
// import Header from "components/Header";

const LandingPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[90px] items-center justify-start mx-auto w-full">
        {/* <Header className="flex items-center justify-center md:px-5 w-full" /> */}
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1030px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col gap-8 justify-start">
                <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-full">
                  <Img
                    src="images/img_cart.svg"
                    className="h-[61px] md:mt-0 mt-[66px] w-[61px]"
                    alt="cart"
                  />
                  <div className="flex flex-col gap-[30px] items-center justify-start">
                    <Text
                      className="font-merriweather text-center text-gray_600 w-full"
                      as="h1"
                      variant="h1"
                    >
                      Share  your stories out loud and listen to podcasts
                    </Text>
                    <Text
                      className="font-normal font-publicsans leading-[35.00px] text-center text-gray_601 w-[78%] sm:w-full"
                      as="h4"
                      variant="h4"
                    >
                      Inspire the people around you.
                      Lets rise Together
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-end md:ml-[0] ml-[259px] rounded-[35.5px] w-[56%] md:w-full">
                  {/* <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[221px] text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl tracking-[0.12px]"
                    shape="RoundedBorder35"
                    size="2xl"
                    variant="OutlineIndigo90056"
                  >
                    Read More
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[271px] text-2xl md:text-[22px] text-center text-indigo_900 sm:text-xl tracking-[0.12px]"
                    shape="RoundedBorder35"
                    size="2xl"
                    variant="OutlineIndigo201"
                  >
                    Listen to Podcasts
                  </Button> */}
                </div>
              </div>
              <Img
                src="images/img_ticket.svg"
                className="h-[61px] md:mt-0 mt-[205px] w-[61px]"
                alt="ticket"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-start max-w-[1111px] mt-[162px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[39%] sm:w-full">
                <Button
                  className="flex h-[76px] items-center justify-center rounded-[50%] w-[76px]"
                  size="mdIcn"
                  variant="icbFillGray300"
                >
                  <Img
                    src="images/img_microphone.svg"
                    className="h-[50px]"
                    alt="microphone"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="font-black font-merriweather ml-0.5 md:ml-[0] text-gray_600"
                    as="h3"
                    variant="h3"
                  >
                    Latest Podcasts{" "}
                  </Text>
                  <Text
                    className="font-normal font-publicsans mt-[5px] text-gray_601 tracking-[0.12px]"
                    as="h4"
                    variant="h4"
                  >
                    Get started on latest episodes
                  </Text>
                </div>
              </div>
              {/* <Text
                className="font-bold text-indigo_901 tracking-[0.12px]"
                variant="body1"
              >
                See all podcasts
              </Text> */}
            </div>
            <List
              className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('https://media.gettyimages.com/id/981061-006/photo/woman-in-white-bathrobe-curled-up-and-looking-pensive.jpg?s=612x612&w=0&k=20&c=0-7guaF5ahZJojsudjxLhSEdSfr2SFfZH1xmpH6GtpI=')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      shape="icbCircleBorder38"
                      size="lgIcn"
                      variant="icbFillGray60076"
                    >
                      <a href="https://open.spotify.com/episode/4fK4bAywbS35oKYuJohWEZ?si=d49d323009e04993"><Img
                        src="images/img_group.svg"
                        className="h-[35px]"
                        alt="Group"
                      />
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="font-bold font-merriweather text-gray_600 w-full"
                      as="h6"
                      variant="h6"
                    >
                      Equally Different
                    </Text>
                    <a href="https://open.spotify.com/show/68pXiVfNTlgbtbTC0QzArP?si=39ec6f1b330d4154" className="font-light font-publicsans text-bluegray_600" variant="body1">Listen To The Show</a>
                    <Text
                      className="font-light font-publicsans text-bluegray_600"
                      variant="body1"
                    >
                      By GirlUp Sreenagar
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('https://media.gettyimages.com/id/72681495/photo/nonmume-alitteee-age-18-a-victim-of-a-horrible-gang-rape-by-five-men-hides-her-face-as-she.jpg?s=612x612&w=0&k=20&c=SBAp1AfcLg19-THu6qvhd1Ivpvr4c4cfIJjrdCKvc3E=')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      shape="icbCircleBorder38"
                      size="lgIcn"
                      variant="icbFillGray60076"
                    >
                      <a href="https://open.spotify.com/episode/34Vbbv2rFbHc2anpjL3dCW?si=cc6a2c435a7740e6">
                        <Img
                        src="images/img_group.svg"
                        className="h-[35px]"
                        alt="Group One"
                      />
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="font-bold font-merriweather text-gray_600 w-full"
                      as="h6"
                      variant="h6"
                    >
                     Becky Mahmud's Case
                    </Text>
                    <a href="https://open.spotify.com/show/5sfLSBWLXJKgCp0K4vkyfP?si=1eb28f5e01b3476e" className="font-light font-publicsans text-bluegray_600" variant="body1">Listen To The Show</a>
                    <Text
                      className="font-light font-publicsans text-bluegray_600"
                      variant="body1"
                    >
                      By Glorious Michel
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('https://media.gettyimages.com/id/532547978/vector/domestic-violence-against-women.jpg?s=612x612&w=0&k=20&c=yyme4RsV3p1AN3TshcGxA6M72hJ_j3WwLdNwlrmq4Eg=')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      shape="icbCircleBorder38"
                      size="lgIcn"
                      variant="icbFillGray60076"
                    >
                      <a href="https://open.spotify.com/episode/50IomPG83GfmpRBvy8OuM5?si=4969a03e6fb04a0f">
                        <Img
                        src="images/img_group.svg"
                        className="h-[35px]"
                        alt="Group Two"
                      />
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="font-bold font-merriweather text-gray_600 w-full"
                      as="h6"
                      variant="h6"
                    >
                      Rape Hurts
                    </Text>
                    <a href="https://open.spotify.com/show/6vAYzdboERyMq9HsgrDQDC?si=cab398d90fcb4dd4" className="font-light font-publicsans text-bluegray_600" variant="body1">Listen To The Show</a>
                    <Text
                      className="font-light font-publicsans text-bluegray_600"
                      variant="body1"
                    >
                      By Ms.Divine
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('https://tse2.mm.bing.net/th?id=OIP.Jci6ZwyA9K5OHPlfj_kerQHaEx&pid=Api&P=0&h=180')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      shape="icbCircleBorder38"
                      size="lgIcn"
                      variant="icbFillGray60076"
                    >
                      <a href="https://open.spotify.com/episode/4KxulwsQe8P7nPh2mhHFlm?si=b5fe355435434c49"><Img
                        src="images/img_group.svg"
                        className="h-[35px]"
                        alt="Group Three"
                      />
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="font-bold font-merriweather text-gray_600 w-full"
                      as="h6"
                      variant="h6"
                    >
                      Rainbow Diaries
                    </Text>
                    <a href="https://open.spotify.com/show/6ON7nEpoywDJ3lWCztp6CO?si=16c76231a3364ee4" className="font-light font-publicsans text-bluegray_600" variant="body1">Listen To The Show</a>
                    <Text
                      className="font-light font-publicsans text-bluegray_600"
                      variant="body1"
                    >
                      By RedFM
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-[29px] items-start justify-start max-w-[1110px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[50px] justify-start w-[66%] md:w-full">
              <List
                className="flex-col gap-[50px] grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                      {/* <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[34%] sm:w-full">
                        <Img
                          src="images/img_ellipse5.png"
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          alt="EllipseFive"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="font-semibold text-bluegray_600"
                            as="h5"
                            variant="h5"
                          >
                            By Jhone Leonardo
                          </Text>
                          <Text
                            className="font-light mt-[5px] text-bluegray_600"
                            variant="body1"
                          >
                            12 September, 2020
                          </Text>
                        </div>
                      </div> */}
                      {/* <Text
                        className="font-light text-bluegray_600"
                        variant="body1"
                      >
                        <span className="text-bluegray_600 text-sm font-publicsans text-left">
                          Category{" "}
                        </span>
                        <span className="text-pink_300 text-lg font-merriweather text-left font-black">
                          Writing
                        </span>
                      </Text> */}
                    </div>
                    <Text
                      className="font-merriweather italic ml-0.5 md:ml-[0] mt-[30px] text-gray_600 tracking-[0.12px] w-full"
                      as="h2"
                      variant="h2"
                    >
                      Laxmi Agrawal 
                    </Text>
                    <Img
                      src="https://tse4.mm.bing.net/th?id=OIP.lDaEwJ6AAO2v0kLhYeuzhQHaDg&pid=Api&P=0&h=180"
                      className="h-[390px] sm:h-auto ml-0.5 md:ml-[0] mt-[30px] object-cover rounded-[5px] w-full"
                      alt="RectangleEleven"
                    />
                    <Text
                      className="font-light font-publicsans leading-[30.00px] ml-0.5 md:ml-[0] mt-[30px] text-bluegray_900 w-full"
                      as="h5"
                      variant="h5"
                    >
                      I was 15, in 2005, when a 32-year-old man proposed marriage to me. 
                      I said no. On April 19, he sent me a text proclaiming that he loves me and wants to marry me, and I didn’t respond. 
                      He texted again, demanding a response, but I never did. On April 22, he, along with his brother’s girlfriend, stopped me outside the bus stand in Khan Market I would take a bus from every day. 
                      The girl pushed me and threw the acid she was holding on my face.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-5 w-[65%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                        {/* <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLightblue50"
                        >
                          <Img
                            src="images/img_clock.svg"
                            className="h-[30px]"
                            alt="clock"
                          />
                        </Button> */}
                        {/* <Text
                          className="font-light text-black_900"
                          variant="body1"
                        >
                          5 minutes ago
                        </Text> */}
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center w-[34%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLime50"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[30px]"
                            alt="checkmark"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900"
                          variant="body1"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[24%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillRed50"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="h-[30px]"
                            alt="location"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900"
                          variant="body1"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[255px] mt-5"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="mt-6 mb-[23px] ml-[19px] mr-[29px]"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder5"
                      size="3xl"
                      variant="FillIndigo90067"
                    >
                      <a href="https://www.vogue.in/wellness/content/acid-attack-survivor-laxmi-agarwal-story-interview-deepika-padukone-chhapaak">
                      <div className="font-bold font-publicsans leading-[normal] text-indigo_900 text-left text-lg tracking-[0.12px]">
                        Continue Reading
                      </div>
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                      <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[34%] sm:w-full">
                        {/* <Img
                          src="images/img_ellipse5.png"
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          alt="EllipseFive One"
                        /> */}
                        <div className="flex flex-col items-start justify-start">
                          {/* <Text
                            className="font-semibold text-bluegray_600"
                            as="h5"
                            variant="h5"
                          >
                            By Jhone Leonardo
                          </Text>
                          <Text
                            className="font-light mt-[5px] text-bluegray_600"
                            variant="body1"
                          >
                            12 September, 2020
                          </Text> */}
                        </div>
                      </div>
                      {/* <Text
                        className="font-light text-bluegray_600"
                        variant="body1"
                      >
                        <span className="text-bluegray_600 text-sm font-publicsans text-left">
                          Category{" "}
                        </span>
                        <span className="text-pink_300 text-lg font-merriweather text-left font-black">
                          Writing
                        </span>
                      </Text> */}
                    </div>
                    <Text
                      className="font-merriweather italic ml-0.5 md:ml-[0] mt-[30px] text-gray_600 tracking-[0.12px] w-full"
                      as="h2"
                      variant="h2"
                    >
                      Rebuilding A Life Of Dignity
                    </Text>
                    <Img
                      src="https://tse4.mm.bing.net/th?id=OIP.u3pRWU_wd0hTNvaLwxfU-AHaD1&pid=Api&P=0&h=180"
                      className="h-[390px] sm:h-auto ml-0.5 md:ml-[0] mt-[30px] object-cover rounded-[5px] w-full"
                      alt="RectangleEleven One"
                    />
                    <Text
                      className="font-light font-publicsans leading-[30.00px] ml-0.5 md:ml-[0] mt-[30px] text-bluegray_900 w-full"
                      as="h5"
                      variant="h5"
                    >
                      I want to share my experience as a survivor of social abuses, a journey that took me from darkness to empowerment. I found myself trapped in an abusive relationship, where control and manipulation gradually turned into physical and emotional torment. Living in constant fear, I felt isolated and believed the lies that I deserved such treatment.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-5 w-[65%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                        {/* <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLightblue50"
                        >
                          <Img
                            src="images/img_clock.svg"
                            className="h-[30px]"
                            alt="clock One"
                          />
                        </Button> */}
                        {/* <Text
                          className="font-light text-black_900"
                          variant="body1"
                        >
                          5 minutes ago
                        </Text> */}
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center w-[24%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLime50"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[30px]"
                            alt="checkmark One"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900"
                          variant="body1"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[23%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillRed50"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="h-[30px]"
                            alt="location One"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900"
                          variant="body1"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[255px] mt-5"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="mt-6 mb-[23px] ml-[19px] mr-[29px]"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder5"
                      size="3xl"
                      variant="FillIndigo90067"
                    >
                      <Link to="/blogs">
                      <div className="font-bold font-publicsans leading-[normal] text-indigo_900 text-left text-lg tracking-[0.12px]">
                        Continue Reading
                      </div>
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                      <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[34%] sm:w-full">
                        {/* <Img
                          src="images/img_ellipse5.png"
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          alt="EllipseFive Two"
                        /> */}
                        <div className="flex flex-col items-start justify-start">
                          {/* <Text
                            className="font-semibold text-bluegray_600"
                            as="h5"
                            variant="h5"
                          >
                            By Jhone Leonardo
                          </Text> */}
                          {/* <Text
                            className="font-light mt-[5px] text-bluegray_600"
                            variant="body1"
                          >
                            12 September, 2020
                          </Text> */}
                        </div>
                      </div>
                      {/* <Text
                        className="font-light text-bluegray_600"
                        variant="body1"
                      >
                        <span className="text-bluegray_600 text-sm font-publicsans text-left">
                          Category{" "}
                        </span>
                        <span className="text-pink_300 text-lg font-merriweather text-left font-black">
                          Writing
                        </span>
                      </Text> */}
                    </div>
                    {/* <Text
                      className="font-merriweather italic ml-0.5 md:ml-[0] mt-[30px] text-gray_600 tracking-[0.12px] w-full"
                      as="h2"
                      variant="h2"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Img
                      src="images/img_rectangle11_1.png"
                      className="h-[390px] sm:h-auto ml-0.5 md:ml-[0] mt-[30px] object-cover rounded-[5px] w-full"
                      alt="RectangleEleven Two"
                    /> */}
                    {/* <Text
                      className="font-light font-publicsans leading-[30.00px] ml-0.5 md:ml-[0] mt-[30px] text-bluegray_900 w-full"
                      as="h5"
                      variant="h5"
                    >
                      We all know that every person has his or her own desire to
                      work, but do you know that we can actually be consistent
                      in making works if we want, now in this article I want to
                      invite all of you to learn to be consistent in creating.
                    </Text> */}
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-5 w-[65%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                        {/* <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLightblue50"
                        >
                          <Img
                            src="images/img_clock.svg"
                            className="h-[30px]"
                            alt="clock Two"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900"
                          variant="body1"
                        >
                          5 minutes ago
                        </Text> */}
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center w-[24%] sm:w-full">
                        {/* <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLime50"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[30px]"
                            alt="checkmark Two"
                          />
                        </Button> */}
                        {/* <Text
                          className="font-light text-black_900"
                          variant="body1"
                        >
                          12 Like
                        </Text> */}
                      </div>
                      {/* <div className="flex flex-row gap-2.5 items-center justify-between w-[23%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillRed50"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="h-[30px]"
                            alt="location Two"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900"
                          variant="body1"
                        >
                          Share
                        </Text>
                      </div> */}
                    </div>
                    {/* <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[255px] mt-5"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="mt-6 mb-[23px] ml-[19px] mr-[29px]"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder5"
                      size="3xl"
                      variant="FillIndigo90067"
                    >
                      <div className="font-bold font-publicsans leading-[normal] text-indigo_900 text-left text-lg tracking-[0.12px]">
                        Continue Reading
                      </div>
                    </Button> */}
                  </div>
                </div>
              </List>
              {/* <div className="flex flex-row items-center justify-end md:ml-[0] ml-[450px] w-[29%] md:w-full">
                <Text
                  className="bg-indigo_900 flex font-normal h-10 items-center justify-center rounded-[50%] text-center text-white_A700 w-10"
                  as="h5"
                  variant="h5"
                >
                  1
                </Text>
                <Text
                  className="bg-white_A700 flex font-normal h-10 items-center justify-center ml-5 rounded-[50%] text-center text-indigo_900 w-10"
                  as="h5"
                  variant="h5"
                >
                  2
                </Text>
                <div className="flex flex-row gap-[15px] items-start justify-between ml-10 w-[34%]">
                  <Text
                    className="font-light text-indigo_900"
                    as="h5"
                    variant="h5"
                  >
                    Next
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-4 mt-[3px] w-4"
                    alt="arrowright Three"
                  />
                </div>
              </div> */}
            </div>
            <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start w-[32%] md:w-full">
              <div
                className="common-pointer flex flex-col items-start justify-start rounded-[5px] w-full"
                onClick={() => navigate("/bloggerdetails")}
              >
                <Img
                  src="https://tse4.mm.bing.net/th?id=OIP.JGE1kIJ_mBZJ4PimciUb-wHaEK&pid=Api&P=0&h=180"
                  className="h-[400px] sm:h-auto object-cover rounded-[5px] w-full"
                  alt="RectangleTen"
                />
                <div className="flex flex-col items-start justify-start mt-5">
                  <Text
                    className="font-bold font-merriweather text-gray_600"
                    as="h4"
                    variant="h4"
                  >
                    Laxmi Agarwal
                  </Text>
                  <Text
                    className="font-medium font-publicsans mt-[5px] text-bluegray_600"
                    as="h6"
                    variant="h6"
                  >
                    Acid Attack Survivor
                  </Text>
                </div>
                <Text
                  className="font-light leading-[30.00px] mt-[26px] text-bluegray_600 w-full"
                  as="h5"
                  variant="h5"
                >
                  I am not a victim, I am a survivor. The man who attacked me will cover his face, I won’t.
                  He changed my face, not my heart. He threw acid on my face, not my dreams.
                  You will know that I am alive, free and thriving and living my dreams.
                </Text>
              </div>
              {/* <div className="flex flex-col font-merriweather gap-5 items-start justify-start w-[56%] md:w-full">
                <Text className="font-bold text-gray_600" as="h5" variant="h5">
                  Follow Me On
                </Text>
                <div className="flex flex-col font-publicsans gap-[15px] items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-evenly w-full">
                    <Img
                      src="images/img_email1.svg"
                      className="h-5 w-5"
                      alt="emailOne"
                    />
                    <Text
                      className="font-light text-bluegray_600"
                      as="h6"
                      variant="h6"
                    >
                      Hellojhone@gmail.com
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[77%] md:w-full">
                    <Img
                      src="images/img_camera.svg"
                      className="h-5 w-5"
                      alt="camera"
                    />
                    <Text
                      className="font-light ml-[5px] text-bluegray_600"
                      as="h6"
                      variant="h6"
                    >
                      @Johoe_Podcast
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[78%] md:w-full">
                    <Img
                      src="images/img_twitter.svg"
                      className="common-pointer h-5 w-5"
                      alt="twitter"
                      onClick={handleNavigate}
                    />
                    <Text
                      className="font-light ml-[5px] text-bluegray_600"
                      as="h6"
                      variant="h6"
                    >
                      @JohoeLeonardo
                    </Text>
                  </div>
                </div>
              </div> */}
              <div className="flex flex-col font-merriweather items-start justify-start w-full">
                <Text className="font-bold text-gray_600" as="h5" variant="h5">
                  Tranding Blog
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start mt-5 rounded-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_bloghead.png')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2.5 h-[200px] items-start justify-end p-[26px] sm:px-5 rounded-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_title.png')" }}
                  >
                    <Text
                      className="font-bold font-merriweather italic ml-3.5 md:ml-[0] mt-[71px] text-white_A700 w-[91%] sm:w-full"
                      as="h5"
                      variant="h5"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Text
                      className="font-light font-publicsans ml-3.5 md:ml-[0] text-white_A700"
                      variant="body1"
                    >
                      5 minutes ago
                    </Text>
                  </div>
                </div>
                <List
                  className="flex-col gap-5 grid items-center mt-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      src="images/img_rectangle14.png"
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      alt="RectangleFourteen"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 w-full"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      src="images/img_rectangle14_96X96.png"
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      alt="RectangleFourteen One"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 w-full"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      src="images/img_rectangle14_1.png"
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      alt="RectangleFourteen Two"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 w-full"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      src="images/img_rectangle14_2.png"
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      alt="RectangleFourteen Three"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 w-full"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col font-merriweather gap-5 items-start justify-start w-full">
                {/* <Text
                  className="font-bold text-gray_600 tracking-[0.12px]"
                  as="h5"
                  variant="h5"
                >
                  Categories
                </Text> */}
                <div className="flex flex-col font-publicsans gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    {/* <Text
                      className="font-light text-bluegray_600"
                      as="h5"
                      variant="h5"
                    >
                      Writing
                    </Text> */}
                    {/* <Text
                      className="bg-blue_50 flex font-normal h-10 items-center justify-center rounded-[50%] text-center text-gray_600 w-10"
                      as="h5"
                      variant="h5"
                    >
                      1
                    </Text> */}
                  </div>
                  {/* <Line className="bg-bluegray_100 h-[0.5px] w-full" /> */}
                  <div className="flex flex-row items-center justify-between w-full">
                    {/* <Text
                      className="font-light text-bluegray_600"
                      as="h5"
                      variant="h5"
                    >
                      Working
                    </Text> */}
                    {/* <Text
                      className="bg-blue_50 flex font-normal h-10 items-center justify-center rounded-[50%] text-center text-gray_600 w-10"
                      as="h5"
                      variant="h5"
                    >
                      5
                    </Text> */}
                  </div>
                  {/* <Line className="bg-bluegray_100 h-[0.5px] w-full" /> */}
                  <div className="flex flex-row items-center justify-between w-full">
                    {/* <Text
                      className="font-light text-bluegray_600"
                      as="h5"
                      variant="h5"
                    >
                      Podcaster
                    </Text> */}
                    {/* <Text
                      className="bg-blue_50 flex font-normal h-10 items-center justify-center rounded-[50%] text-center text-gray_600 w-10"
                      as="h5"
                      variant="h5"
                    >
                      3
                    </Text> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-green_50 flex flex-col items-center justify-end max-w-[1110px] mt-[100px] mx-auto p-[50px] md:px-5 rounded-[5px] w-full">
            <div className="flex md:flex-col flex-row md:gap-[53px] items-start justify-between mt-8 w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="font-light font-publicsans text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  NEWSLETTER
                </Text>
                <Text
                  className="font-black font-merriweather mt-[5px] text-gray_600 w-full"
                  as="h3"
                  variant="h3"
                >
                  Subscribe to our website newsletter to receive news and
                  updates.
                </Text>
                <Text
                  className="font-light font-publicsans mt-5 text-bluegray_900"
                  as="h5"
                  variant="h5"
                >
                  Get special offers directly to your email every week!
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] justify-start w-[44%] md:w-full">
                <div className="flex flex-col gap-5 items-start justify-start rounded-[5px] w-full">
                  <Input
                    wrapClassName="w-full"
                    className="font-bold leading-[normal] p-0 placeholder:text-indigo_900_79 text-indigo_900_79 text-left text-lg w-full"
                    type="email"
                    name="field"
                    placeholder="Your Email"
                    shape="RoundedBorder5"
                    size="md"
                    variant="OutlineIndigo900"
                  ></Input>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[137px] text-center text-lg text-white_A700"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillIndigo900"
                  >
                    Subscribe
                  </Button>
                </div>
                <Button
                  className="flex h-[77px] items-center justify-center md:ml-[0] ml-[283px] mr-[77px] w-[77px]"
                  shape="icbCircleBorder38"
                  size="smIcn"
                  variant="icbOutlinePink3007f"
                >
                  <Img
                    src="images/img_ticket_77X77.svg"
                    className="h-[55px]"
                    alt="ticket One"
                  />
                </Button>
              </div>
            </div>
          </div> */}
          <Footer className="bg-gray_600 flex items-center justify-center mt-[129px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
