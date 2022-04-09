import React, { useState } from "react";

const MenuContext = React.createContext();

export const MenuProvider = (props) => {
  return (
    <MenuContext.Provider value={{ menu: "us" }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

// import React, { useState } from "react";

// const ThemeContext = React.createContext();

// export const ThemeProvider = (props) => {
//   const [theme, setTheme] = useState(themes.light);

//   const toggleTheme = () => {
//     setTheme(theme === themes.light ? themes.dark : themes.light);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {props.children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContext;
