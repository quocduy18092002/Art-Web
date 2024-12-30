import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
const TopHeader = () => {
    return (
        <div>
          <div className="flex w-full h-[80px] justify-center pt-5">
        <div className="hidden md:flex gap-1 text-center md:text-sm text-xs font-normal text-gray-600 w-1/3 justify-center pt-2">
          <div>
            <a href="">Contact</a>
          </div>
          <span>|</span>
          <div>
            <a href="">About Us</a>
          </div>
        </div>
        <div className="w-1/3 md:text-3xl text-xl text-[#666666] flex justify-center font-bold">
          <a href={"/"}>CANVASTART</a>
          <span className="r text-base">®</span>
        </div>

        <div className="w-1/3 hidden md:flex justify-center">
          <ul className="flex gap-3 text-gray-400 text-xs pt-2 md:text-sm">
            <li className="w-[15px]">
              <FontAwesomeIcon icon={faUser} />
            </li>
            <li className="w-[15px]">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
            <li className="w-[15px]">
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
          </ul>
        </div>
      </div>
        </div>
    );
}

export default TopHeader;
