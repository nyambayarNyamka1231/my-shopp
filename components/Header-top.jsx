import React from "react";

function HeaderTop() {
  return (
    <div className=" bg-sky-400 relative h-9">
      <div className="h-9 text-white flex items-center justify-between xl:container mx-auto">
        <h6>Welcome to the M-&Shop</h6>
        <div className="flex flex-grow-0 flex-shrink-0 items-center text-sm">
          <h5>
            <a href="tel:91913877">7788-7788 |</a>
            <span className="ml-1">09:00-19:00 everyday</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
