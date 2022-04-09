import React from "react";
import Layout from "../components/Layout";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { getAllUsButsalgagches, getAllPlitkas } from "../lib/api";
import Product from "../components/Product";

export default function Home({ usButsalgagches, plitkas }) {
  console.log(plitkas);
  const [menu, setMenu] = React.useState("Ус буцалгагч");
  console.log(menu);
  let data = [];
  switch (menu) {
    case "Ус буцалгагч":
      data = usButsalgagches;
      break;
    case "Плитка":
      data = plitkas;
      break;
    case "Ус буцалгагч":
      data = plitkas;
      break;
    case "Будаа агшаагч":
      data = plitkas;
      break;
    case "Индүү":
      data = usButsalgagches;
      break;
    case "Цахилгаан тогоо":
      data = usButsalgagches;
      break;
    case "Тоос сорогч":
      data = usButsalgagches;
      break;
    case "Хогийн сав":
      data = usButsalgagches;
      break;
    case "Бань":
      data = plitkas;
      break;
    case "Шал угаагч":
      data = plitkas;
      break;
    case "Сандал":
      data = plitkas;
      break;
  }
  return (
    <div>
      <Layout setMenu={setMenu}>
        <div className="flex-grow-0 flex-shrink-0 basis-3/4 max-w-3/4  pl-4 relative w-full">
          <div className="py-4 px-5 mb-4 bg-white">
            <div className="mb-4 flex items-center justify-between">
              <h4>
                Ус буцалгагч{" "}
                <span className="text-sm text-gray-500">4124 бүтээгдэхүүн</span>
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
              <div className="flex items-center justify-between mb-3">
                <h4>Брэндүүд</h4>
                <button className="inline-block">
                  Бүх брэнд
                  <span className="inline-block">
                    <ArrowRightIcon className="w-3 h-3 ml-2" />
                  </span>
                </button>
              </div>
              {/* <div className="flex bg-gray-900 w-full h-4"></div> */}
            </div>
            <div className="flex flex-wrap ">
              {data &&
                data.map((plitkas) => {
                  const { ner, code, une } = plitkas?.attributes;
                  return <Product ner={ner} code={code} une={une} />;
                })}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const usButsalgagches = (await getAllUsButsalgagches()) || [];
  const allUsButsalgagches = usButsalgagches?.data;

  const plitkas = (await getAllPlitkas()) || [];
  const allPlitkas = plitkas?.data;

  return {
    props: {
      usButsalgagches: allUsButsalgagches || [],
      plitkas: allPlitkas || [],
    },
  };
};
