import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useMenu } from "../hooks/use-menu";

const ProductsList = ({ children, length }) => {
  const { menu } = useMenu();
  return (
    <div className="flex-grow-0 flex-shrink-0 basis-3/4 max-w-3/4  pl-4 relative w-full">
      <div className="py-4 px-5 mb-4 bg-white">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="">
            {menu}
            <span className="text-sm text-gray-500">
              {` ${length}`} бүтээгдэхүүн
            </span>
          </h4>
          <div className="w-56 block text-black text-sm leading-normal outline-none rounded border border-gray-200 relative">
            <select className="w-full h-9 outline-none appearance-none  pr-8 pl-4 bg-white text-gray-800 text-sm">
              <option className="block whitespace-nowrap min-h-fit px-0.5 mb-0.5">
                Энгийн
              </option>
              <option>Шинэ нь эхэндээ</option>
              <option>Хуучин нь эхэндээ</option>
              <option>Үнэ өсөхөөр</option>
              <option>Үнэ буурахаар</option>
              <option>Хямдралын хувиар</option>
              <option>Шинэ хямдрал</option>
            </select>
          </div>
        </div>
        <div>
          {/* <div className="flex items-center justify-between mb-3">
            <h4>Брэндүүд</h4>
            <button className="inline-block">
              Бүх брэнд
              <span className="inline-block">
                <ArrowRightIcon className="w-3 h-3 ml-2" />
              </span>
            </button>
          </div> */}
          {/* <div className="flex bg-gray-900 w-full h-4"></div> */}
        </div>
        <div className="flex flex-wrap ">{children}</div>
      </div>
    </div>
  );
};

export default ProductsList;
