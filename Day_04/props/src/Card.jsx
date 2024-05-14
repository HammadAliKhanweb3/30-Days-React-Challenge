import React from "react";

function Card({ someObject, btnText }) {
  let { name, about } = someObject;
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md ">
        <img
          src="https://images.pexels.com/photos/20861047/pexels-photo-20861047/free-photo-of-a-view-of-a-
          small-town-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{name}</h1>
          <p className="mt-2 text-sm text-gray-300">{about}</p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText} →
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
