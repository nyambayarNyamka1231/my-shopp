import React from "react";
import { useMenu } from "../hooks/use-menu";
import ActiveLink from "./ActiveLink";

const MenuItem = ({ name, description }) => {
  const { selectMenu } = useMenu();

  return (
    <ActiveLink
      activeClassName="font-extrabold text-black"
      href={`/categories/${name}`}
    >
      <div
        className={`mb-2 text-base flex items-center relative cursor-pointer px-2 py-2 rounded-lg text-gray-500`}
        onClick={() => selectMenu(description)}
      >
        <a>
          <span className={`mt-1 text-lg `}>{description}</span>
        </a>
      </div>
    </ActiveLink>
  );
};

export default MenuItem;
