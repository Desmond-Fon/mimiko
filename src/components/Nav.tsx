import x from "../assets/X.svg";
import hamburger from "../assets/hamburger.svg";
import telegram from "../assets/TELEGRAM.svg";
import tools from "../assets/Dextool.svg";
import screener from "../assets/Dexscreener.svg";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
      setOpen(!open);
    };
  return (
    <>
      <div className="border-black border-[4px] rounded-[20px] py-[10px] px-[30px] lg:px-[100px] min-[1724px]:px-[160px] bg-white whitespace-nowrap flex justify-between items-center gap-[50px] min-[1724px]:gap-[80px]">
        <div className="hidden text-[#0D3157] lg:flex justify-start items-center gap-[30px] min-[1724px]:gap-[48px]">
          <NavHashLink
            smooth
            to="/#about"
            className="leading-[18px] text-[18px] min-[1724px]:text-[20px]"
          >
            About
          </NavHashLink>

          <NavHashLink
            smooth
            to="/#tokenomics"
            className="hidden lg:block leading-[18px] text-[18px] min-[1724px]:text-[20px]"
          >
            TOKENOMICS
          </NavHashLink>
        </div>
        <h1 className="naughty text-[#0D3157] hidden lg:block lg:text-[35px] font-[900]">
          EasterRewards
        </h1>
        <div className="flex justify-start items-center gap-[30px] min-[1724px]:gap-[48px]">
          <button className="rounded-[114px] bg-[#0D3157] text-white h-[28px] lg:h-[40px] px-[20px] lg:px-[30px] whitespace-nowrap text-[10px] lg:text-[16px]">
            Buy Now!
          </button>
          <div className="hidden lg:flex justify-center items-center gap-2 h-full w-full">
            <Link
              to={"https://x.com/easterrewards?s=21"}
              target="_blank"
              rel="noreferrer"
            >
              <img src={x} alt="" className="h-[32px] w-[32px] object-cover" />
            </Link>
            <Link
              to="https://t.me/EasterRewards"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={telegram}
                alt=""
                className="h-[32px] object-cover w-[32px]"
              />
            </Link>
            <img
              src={tools}
              alt=""
              className="h-[32px] object-cover w-[32px]"
            />
            <img
              src={screener}
              alt=""
              className="h-[32px] object-cover w-[32px]"
            />
          </div>
        </div>
        <div className="lg:hidden" onClick={toggleMenu}>
          <img src={hamburger} alt="" className="h-[30px] w-[30px]" />
        </div>

        {open && (
          <div className="absolute top-24 p-5 right-0 w-screen bg-white shadow-lg flex flex-col items-start gap-6 z-[999]">
            <NavHashLink
              smooth
              onClick={toggleMenu}
              to="/#about"
              className="leading-[18px] comics text-[16px] mid:text-[14px] large:text-[18px]"
            >
              ABOUT
            </NavHashLink>{" "}
            <NavHashLink
              smooth
              onClick={toggleMenu}
              to="/#tokenomics"
              className="leading-[18px] comics text-[16px] mid:text-[14px] large:text-[18px]"
            >
              TOKENOMICS
            </NavHashLink>{" "}
            <div className="flex gap-[10px] items-center py-[12px] rounded-[14px]">
              <div className="flex justify-center items-center gap-2 h-full w-full">
                <Link to={"https://x.com/easterrewards?s=21"} target="_blank" rel="noreferrer">
                  <img
                    src={x}
                    alt=""
                    className="h-[32px] w-[32px] object-cover"
                  />
                </Link>
                <Link to={"https://t.me/EasterRewards"} target="_blank" rel="noreferrer">
                  <img
                    src={telegram}
                    alt=""
                    className="h-[32px] object-cover w-[32px]"
                  />
                </Link>
                <img
                  src={tools}
                  alt=""
                  className="h-[32px] object-cover w-[32px]"
                />
                <img
                  src={screener}
                  alt=""
                  className="h-[32px] object-cover w-[32px]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
