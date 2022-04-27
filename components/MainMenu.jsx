import React from "react";
import { MENU_ITEMS } from "../constants";
import MenuItem from "./MenuItem";

const MainMenu = () => {
  return (
    <div className="flex-grow-0 flex-shrink-0 basis-1/4 max-w-1/4 ">
      <div className="px-4 pt-1 bg-white rounded-sm">
        {MENU_ITEMS.map((menu_item) => {
          const { name, description } = menu_item;
          return (
            <MenuItem key={description} name={name} description={description} />
          );
        })}
      </div>
    </div>
  );
};

export default MainMenu;
