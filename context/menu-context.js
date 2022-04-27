import React from "react";

const MenuContext = React.createContext();

export const MenuProvider = (props) => {
  const [menu, setMenu] = React.useState("");

  const selectMenu = (selectedMenu) => {
    setMenu(selectedMenu);
  };
  return (
    <MenuContext.Provider value={{ menu, selectMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
