import React, { useRef } from "react";
import CommonBtn from "./CommonBtn";
import Slider from "react-slick";
import sliderImg from '../assets/images/SliderImg.png'

const MetroverseCard = () => {
  const first = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="bg-white bg-[url(./assets/images/metroSecBg.png)] bg-no-repeat bg-cover rounded-lg sm:rounded-[18px] shadow">
      <div className="pl-3 sm:pl-5 md:pl-7 lg:pl-[34px] pr-2 sm:pr-4 md:pr-[26px] py-2 sm:py-4 md:py-6">
      <div className="flex justify-end gap-6 mb-[-12px] sm:mb-[-20px]">
        <button onClick={() => first?.current?.slickPrev()}><svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M14.084 0L5.916 0C2.377 0 0 2.276 0 5.665L0 14.335C0 17.724 2.377 20 5.916 20L14.084 20C17.622 20 20 17.723 20 14.334L20 5.665C20 2.276 17.622 0 14.084 0Z" fill="url(#paint0_linear_11237_207)" />
          <path d="M9.14503 5.72082L5.38003 9.46882C5.09703 9.75082 5.09703 10.2498 5.38003 10.5328L9.14503 14.2808C9.43903 14.5728 9.91403 14.5718 10.206 14.2778C10.498 13.9838 10.498 13.5098 10.204 13.2168L7.72703 10.7498H14.082C14.497 10.7498 14.832 10.4138 14.832 9.99982C14.832 9.58582 14.497 9.24982 14.082 9.24982L7.72703 9.24982L10.204 6.78382C10.351 6.63682 10.424 6.44482 10.424 6.25182C10.424 6.06082 10.351 5.86882 10.206 5.72282C9.91403 5.42982 9.43903 5.42882 9.14503 5.72082Z" fill="url(#paint1_linear_11237_207)" />
          <defs>
            <linearGradient id="paint0_linear_11237_207" x1="25.1316" y1="-1.44927" x2="-5.72395" y2="14.9337" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFC881" />
              <stop offset="1" stop-color="#DA8517" />
            </linearGradient>
            <linearGradient id="paint1_linear_11237_207" x1="17.3117" y1="4.85051" x2="2.89007" y2="13.076" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFC881" />
              <stop offset="1" stop-color="#DA8517" />
            </linearGradient>
          </defs>
        </svg>
        </button>
        <button onClick={() => first?.current?.slickNext()}><svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M5.916 20H14.084C17.623 20 20 17.724 20 14.335V5.665C20 2.276 17.623 0 14.084 0H5.916C2.378 0 0 2.277 0 5.666L0 14.335C0 17.724 2.378 20 5.916 20Z" fill="url(#paint0_linear_11237_136)" />
          <path d="M10.855 14.2792L14.62 10.5312C14.903 10.2492 14.903 9.75018 14.62 9.46718L10.855 5.71918C10.561 5.42718 10.086 5.42818 9.79397 5.72218C9.50197 6.01618 9.50197 6.49018 9.79597 6.78318L12.273 9.25018H5.91797C5.50297 9.25018 5.16797 9.58618 5.16797 10.0002C5.16797 10.4142 5.50297 10.7502 5.91797 10.7502H12.273L9.79597 13.2162C9.64897 13.3632 9.57597 13.5552 9.57597 13.7482C9.57597 13.9392 9.64897 14.1312 9.79397 14.2772C10.086 14.5702 10.561 14.5712 10.855 14.2792Z" fill="url(#paint1_linear_11237_136)" />
          <defs>
            <linearGradient id="paint0_linear_11237_136" x1="-5.13158" y1="21.4493" x2="25.724" y2="5.06634" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFC881" />
              <stop offset="1" stop-color="#DA8517" />
            </linearGradient>
            <linearGradient id="paint1_linear_11237_136" x1="2.68833" y1="15.1495" x2="17.1099" y2="6.92402" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFC881" />
              <stop offset="1" stop-color="#DA8517" />
            </linearGradient>
          </defs>
        </svg>
        </button>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-[29px]">
          <div className="flex flex-col justify-center mt-5">
            <div className="pl-[13px]">
              <div className="text-darkGold-gradient text-base font-medium font-Inter leading-tight">
                Create MetroVerse Genesis
              </div>
              <div className="max-w-[283px] text-[#7C7C7C] text-xs font-medium font-Inter mt-3 sm:mt-4 lg:mt-6 xl:mt-[30px]">
                physical claim for issue #1 now live. please check that the token
                is available for claim via website
              </div>
              <div className="max-w-[140px] mt-3 sm:mt-4 lg:mt-6 xl:mt-[30px]">
                <CommonBtn text="Explorer Now" />
              </div>
            </div>
            <div className="border border-[#FFC881] rounded-lg w-full max-w-[300px] mt-5">
              <div className="flex w-full">
                <div className="flex w-1/5 flex-col items-center justify-center border-r border-[#FFC881] pt-3 px-1 xs:px-3 pb-2">
                  <p className="text-orange-300 text-xs font-bold">24.8K</p>
                  <p className="text-zinc-500 text-center text-[8px] xs:text-[10px] font-medium">
                    Items
                  </p>
                </div>
                <div className="flex w-1/5 flex-col items-center justify-center border-r border-[#FFC881] pt-3 px-1 xs:px-3 pb-2">
                  <p className="text-orange-300 text-xs font-bold">4,1K</p>
                  <p className="text-zinc-500 text-center text-[8px] xs:text-[10px] font-medium">
                    Owners
                  </p>
                </div>
                <div className="flex w-1/4 flex-col items-center justify-center border-r border-[#FFC881] pt-3 px-1 xs:px-3 pb-2">
                  <p className="text-orange-300 text-xs font-bold">0.221</p>
                  <p className="text-zinc-500 text-center text-[8px] xs:text-[10px] font-medium">
                    Floor Price
                  </p>
                </div>
                <div className="flex w-[35%] flex-col items-center justify-center pt-3 px-1 sm:px-3 pb-2">
                  <p className="text-orange-300 text-xs font-bold">43.1K</p>
                  <p className="text-zinc-500 text-center text-[8px] xs:text-[10px] font-medium flex-nowrap" >
                    Volume Traded
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-lg:mt-5 lg:translate-y-14">
            <Slider ref={first} {...settings}>
              <div>
                <img className="h-full w-full rounded-2xl" src={sliderImg} alt=" metroverse Img" />
              </div>
              <div>
                <img className=" w-full rounded-2xl" src={sliderImg} alt=" metroverse Img" />
              </div>
              <div>
                <img className=" w-full rounded-2xl" src={sliderImg} alt=" metroverse Img" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetroverseCard;
