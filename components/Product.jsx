import React from "react";

const Product = ({ ner, code, une }) => {
  return (
    <div className="flex-grow-0 flex-shrink-0 basis-1/4 max-w-1/4 relative w-full px-2">
      <div className="cursor-pointer rounded-sm border border-gray-300 bg-white mb-4 relative">
        <div
          className="py-1 pr-1 pl-2 text-center bg-contain border-2 border-yellow-400 h-auto z-10 text-gray-900 flex  flex-col rounded
     bg-white overflow-hidden absolute right-2 top-2 "
        >
          <span className="text-xs">Шинэ</span>
        </div>
        <div className="w-full overflow-hidden inline-block bg-white">
          <a>
            <img src="https://cdn3.shoppy.mn/spree/images/1296516/product/BLPGSS1462.png" />
          </a>
          <a className="w-8 h-8 z-10 rounded bg-gray-500 absolute left-2 top-2 ">
            <img src="https://cdn3.shoppy.mn/stores/3599/medium/blue-point1.jpeg" />
          </a>
        </div>
        <div className="-mt-1 p-3">
          <h2 className="m-0 text-gray-900 text-sm font-medium truncate uppercase">
            {/* 1/4 инчийн дорцовны цуглуулга 62 ширхэг */}
            {ner}
          </h2>
          <h4 className="m-0 h-4 text-gray-900 text-xs font-normal truncate">
            {/* Багаж */}
            {code}
          </h4>
          <div className="text-gray-900 p-0  mt-1 text-base font-sans font-semibold">
            <span>{une} ₮</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
