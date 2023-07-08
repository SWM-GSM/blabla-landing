import { useState } from "react";

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

      </div>
    </>
  );
}
