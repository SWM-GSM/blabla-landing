import { useState } from "react";
import DifferenceWidget from "./widgets/difference_widget";
import ProsWidget from "./widgets/pros-widget";

import { StrData as Kor } from "../languages/korean";
import { StrData as Eng } from "../languages/english";

export default function MobileMain() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isLangEng, setLangEng] = useState(false);
  const strData = isLangEng ? Eng : Kor;

  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-b from-[#FF7F50] text-white whitespace-pre-line">
        <header
          className={`flex flex-row justify-between items-center w-[100%] h-[56px] text-black px-[10px] ${
            isNavOpen ? "bg-white" : "bg-transparent"
          }`}
        >
          <div className="flex">
            <img src="icons/ic_24_logo_black.svg" className="w-[24px]" />
            <div className="w-[8px]" />
            <h3 className="font-semibold text-xl">BLABLA</h3>
          </div>

          <button onClick={() => setNavOpen(!isNavOpen)}>
            <img src="icons/ic_24_menu.svg" />
          </button>
        </header>

        {isNavOpen ? (
          <div className="font-semibold bg-white text-black text-center w-[100%] flex flex-col">
            <button
              onClick={() => {
                setLangEng(false);
                setNavOpen(false);
              }}
            >
              <h5 className="h-[44px] flex flex-col justify-center">한국어</h5>
            </button>
            <button
              onClick={() => {
                setLangEng(true);
                setNavOpen(false);
              }}
            >
              <h5 className="h-[44px] flex flex-col justify-center">English</h5>
            </button>
          </div>
        ) : (
          <div></div>
        )}

        <div className="flex flex-col items-center my-[60px] text-center">
          <h3 className="font-semibold text-2xl">{strData[0].title}</h3>
          <h1 className="font-bold text-[30px] mt-[20px] mb-[24px]">
            {strData[0].appName}
          </h1>
          <div className="flex flex-row justify-center">
            <IconBtn
              name={strData[0].reserveBtnName}
              icon="logo"
              onClick={() => {
                window.open(
                  isLangEng
                    ? process.env.REACT_APP_NOTIFICATION_ENG_LINK
                    : process.env.REACT_APP_NOTIFICATION_KOR_LINK
                );
              }}
            />
            <div className="w-[12px]"></div>
            <IconBtn
              name={strData[0].serverBtnName}
              icon="discord"
              onClick={() => {
                window.open(process.env.REACT_APP_DISCORD_LINK);
              }}
            />
          </div>
          <img
            src="imgs/img_280_home.png"
            className="w-[280px] mt-[56px] mb-[20px]"
          />
        </div>
      </div>

      <div>
        <DifferenceWidget
          num="01"
          title={strData[1].title}
          subTitle={strData[1].subTitle}
          imgBefore="imgs/img_200_contents.png"
          imgBeforeDesc={strData[1].imgBeforeDesc}
          imgAfter="imgs/img_200_writing.png"
          imgAfterDesc={strData[1].imgAfterDesc}
          desc={
            <div className="text-sm text-medium flex flex-col items-center text-center">
              <h6>
                {strData[1].desc1[0]}
                <span className="font-bold text-[#FF7F50]">
                  {strData[1].desc1[1]}
                </span>
                {strData[1].desc1[2]}
              </h6>
              <br />
              <h6>
                {strData[1].desc2[0]}
                <span className="font-bold text-[#FF7F50]">
                  {strData[1].desc2[1]}
                </span>
                {strData[1].desc2[2]}
              </h6>
            </div>
          }
        />
        <DifferenceWidget
          num="02"
          title={strData[2].title}
          subTitle={strData[2].subTitle}
          imgBefore="imgs/img_200_crew.png"
          imgBeforeDesc={strData[2].imgBeforeDesc}
          imgAfter="imgs/img_200_voiceroom.png"
          imgAfterDesc={strData[2].imgAfterDesc}
          desc={
            <div className="text-sm text-medium flex flex-col items-center text-center">
              <h6>
                {strData[2].desc1[0]}
                <span className="font-bold text-[#FF7F50]">
                  {strData[2].desc1[1]}
                </span>
                {strData[2].desc1[2]}
              </h6>
              <br />
              <h6>
                {strData[2].desc2[0]}
                <span className="font-bold text-[#FF7F50]">
                  {strData[2].desc2[1]}
                </span>
                {strData[2].desc2[2]}
              </h6>
            </div>
          }
        />

        <div className="flex flex-col items-center bg-[#FBFBFB] py-[40px]">
          <ProsWidget
            img="shake"
            title={strData[3].title}
            desc={strData[3].subTitle}
          />
          <ProsWidget
            img="human"
            title={strData[4].title}
            desc={strData[4].subTitle}
          />
          <ProsWidget
            img="data"
            title={strData[5].title}
            desc={strData[5].subTitle}
          />
        </div>

        <div className="flex flex-col items-center text-center pt-[40px] pb-[80px] whitespace-pre-line">
          <img src="imgs/img_130_logo.png" className="w-[130px] my-[40px]" />
          <h4 className="font-bold text-xl">
            {strData[6].title}
          </h4>
          <h6 className="font-medium text-sm mt-[24px] mb-[20px]">
            {strData[6].subTitle}
          </h6>
          <IconBtn
            name={strData[6].btnName}
            icon="logo"
            onClick={() => {
              window.open(
                isLangEng
                  ? process.env.REACT_APP_NOTIFICATION_ENG_LINK
                  : process.env.REACT_APP_NOTIFICATION_KOR_LINK
              );
            }}
          />
          <div className="h-[80px]"></div>
          <h4 className="font-bold text-xl">
            {strData[7].title}
          </h4>
          <h6 className="font-medium text-sm mt-[24px] mb-[20px]">
            {strData[7].subTitle}
          </h6>
          <IconBtn
            name={strData[7].btnName}
            icon="discord"
            onClick={() => {
              window.open(process.env.REACT_APP_DISCORD_LINK);
            }}
          />
        </div>

      </div>
    </>
  );
}
