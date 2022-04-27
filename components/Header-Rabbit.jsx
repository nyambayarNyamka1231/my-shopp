import React from "react";
import {
  MenuAlt1Icon,
  SearchIcon,
  HeartIcon,
  CreditCardIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

const HeaderRabbit = () => {
  return (
    <div className="flex justify-between items-center bg-white z-10  border-b border-b-gray-200 relative">
      <div className="mx-auto flex justify-between items-center relative h-20 max-w-screen-2xl w-full text-sky-400">
        <div className="flex items-center">
          <button className=" py-2 px-3 z-30 ">
            <MenuAlt1Icon className="bg-white h-10 w-10 text-sky-400" />
          </button>
          <Link href="/">
            <a className="text-xl">M&Shop.mn</a>
          </Link>
        </div>
        <div className="mx-12  flex-grow flex-shrink basis-full relative">
          <div className="relative">
            <input
              placeholder="Эндээс бүгдийг хайж олох ..."
              className="w-full h-10 text-gray-600 rounded  border border-gray-100 bg-gray-100 pr-5 pl-12 outline-none"
              autoComplete="off"
            />
            <button>
              <SearchIcon className="bg-gray-100 h-10 rounded  w-12 cursor-pointer  text-sky-200 font-thin absolute top-0 bottom-0 left-0" />
            </button>
          </div>
          <div className="hidden"></div>
        </div>
        <div className="flex text-gray-700 text-sm">
          <button className="flex items-center flex-col ml-6 mr-5 relative">
            <HeartIcon className="text-red-500 w-8 h-8" />
            <h6>Хүсэл</h6>
          </button>
          <button className="flex items-center flex-col ml-6 mr-5 relative">
            <CreditCardIcon className="text-yellow-500 w-8 h-8" />
            <h6>Хэтэвч</h6>
          </button>
          <button className="flex items-center flex-col ml-6 mr-5 relative">
            <ShoppingCartIcon className="text-yellow-500 w-8 h-8" />
            <h6>Сагс</h6>
          </button>
          <button className="flex items-center flex-col ml-6 mr-5 relative">
            <UserIcon className="text-yellow-500 w-8 h-8" />
            <h6>Нэвтрэх</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderRabbit;
