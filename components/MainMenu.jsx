import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
const MainMenu = ({ setMenu }) => {
  return (
    <div className="flex-grow-0 flex-shrink-0 basis-1/4 max-w-1/4 ">
      <div className="px-4 pt-1 bg-white rounded-sm">
        <div
          className="mb-2 text-base flex items-center relative cursor-pointer"
          onClick={() => setMenu("Ус буцалгагч")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Ус буцалгагч</span>
          </a>
        </div>
        <div
          className="mb-2 text-base flex items-center relative cursor-pointer"
          onClick={() => setMenu("Плитка")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline mr-3 mb-1" />
            <span className="mt-1 text-gray-600">Плитка</span>
          </a>
        </div>
        <div
          className="mb-2 text-base  flex items-center relative cursor-pointer"
          onClick={() => setMenu("Будаа агшаагч")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline  mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Будаа агшаагч</span>
          </a>
        </div>
        <div
          className="mb-2 text-base flex items-center relative cursor-pointer"
          onClick={() => setMenu("Индүү")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline  mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Индүү</span>
          </a>
        </div>
        <div
          className="mb-2 text-base  flex items-center relative cursor-pointer"
          onClick={() => setMenu("Цахилгаан тогоо")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Цахилгаан тогоо</span>
          </a>
        </div>
        <div
          className="mb-2 text-base  flex items-center relative cursor-pointer"
          onClick={() => setMenu("Тоос сорогч")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Тоос сорогч</span>
          </a>
        </div>
        <div
          className="mb-2 text-base  flex items-center relative cursor-pointer"
          onClick={() => setMenu("Хогийн сав")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Хогийн сав</span>
          </a>
        </div>
        <div
          className="mb-2 text-base  flex items-center relative cursor-pointer"
          onClick={() => setMenu("Төмпөн")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Төмпөн</span>
          </a>
        </div>
        <div
          className="mb-2 text-base  flex items-center relative cursor-pointer"
          onClick={() => setMenu("Бань")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Бань</span>
          </a>
        </div>
        <div
          className="mb-2 text-base  flex items-center relative cursor-pointer"
          onClick={() => setMenu("Шал угаагч")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Шал угаагч</span>
          </a>
        </div>
        <div
          className="mb-2 text-base  flex items-center relative cursor-pointer"
          onClick={() => setMenu("Сандал")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Сандал</span>
          </a>
        </div>
        <div
          className="mb-2 text-base  flex items-center relative cursor-pointer"
          onClick={() => setMenu("Аяга")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Аяга</span>
          </a>
        </div>
        <div
          className="mb-2 text-base  flex items-center relative cursor-pointer"
          onClick={() => setMenu("Халуун сав")}
        >
          <a>
            <ArrowRightIcon className="w-4 h-4 inline mr-3 mb-1" />
            <span className="mt-1 text-gray-600 ">Халуун сав</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
