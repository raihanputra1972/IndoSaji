import React from "react";
import Button from "../Shared/Button";
import Category1 from "../../assets/category/delicious-food.png";
import Category2 from "../../assets/category/french-fries.png";
import Category3 from "../../assets/category/nasi-lemak.png";
import Category4 from "../../assets/category/seafood.png";
import Category5 from "../../assets/category/pizza.png";
import Category6 from "../../assets/category/kroket.png";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Cols */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Main Course
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Category1}
              alt=""
              className="w-[220px] absolute -right-10 bottom-0"
            />
          </div>
          {/* Second Cols */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Fries
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={Category2}
              alt=""
              className="w-[220px] absolute -right-12"
            />
          </div>
          {/* Third Cols */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Nasi Lemak
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={Category3}
              alt=""
              className="w-[300px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
        </div>
        {/* Baris Kedua */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Four Cols */}
          <div className="col-span-2 mt-1 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-black rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-stone-950">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Sea Food
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Category4}
              alt=""
              className="w-[300px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* Five Cols */}
          <div className="mt-1 py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Pizza
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={Category5}
              alt=""
              className="w-[220px] absolute -right-3 lg:-top-[13px]"
            />
          </div>
          {/* Six Cols */}
          <div className="mt-1 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Kroket
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={Category6}
              alt=""
              className="w-[320px] absolute -right-20 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
