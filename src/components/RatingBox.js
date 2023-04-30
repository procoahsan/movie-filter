import React from "react";
import RatingStars from "./Ratings";
import Checkbox from "react-custom-checkbox";
import { BsCheck } from "react-icons/bs";

export default function RatingBox({ setSelectedRatings, selectedRatings }) {
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const onChangeInput = (value, item) => {
    if (value) {
      if (item === "Any rating") {
        setSelectedRatings(["Any rating"]);
        return;
      }
      if (selectedRatings.includes("Any rating")) {
        setSelectedRatings([item]);
        return;
      }
      setSelectedRatings([...selectedRatings, item]);
    } else {
      if (item === "Any rating") {
        setSelectedRatings([]);
        return;
      }
      const filterItems = selectedRatings.filter(rating => rating !== item);
      setSelectedRatings(filterItems);
    }
  };
  return (
    <div className="w-full flex flex-col space-y-2 border border-[#979797] px-3 py-2 mt-2">
      <div className="flex space-x-2">
        <Checkbox
          icon={<BsCheck color="#000000" size={18} />}
          borderColor="#000000"
          checked={selectedRatings.includes("Any rating")}
          onChange={value => onChangeInput(value, "Any rating")}
        />
        <spa>Any rating</spa>
      </div>
      {ratings.map(item => (
        <div className="flex space-x-2">
          <Checkbox
            icon={<BsCheck color="#000000" size={18} />}
            borderColor="#000000"
            checked={selectedRatings.includes(item)}
            onChange={value => onChangeInput(value, item)}
          />
          <RatingStars rating={item} />
        </div>
      ))}
    </div>
  );
}
