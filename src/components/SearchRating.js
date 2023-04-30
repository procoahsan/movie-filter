import React from "react";
import RatingStars from "./Ratings";

export default function SearchRating({ items }) {
  return (
    <div className="w-full border border-[#979797] px-3 py-2 mt-2 ">
      {items.map(item => (
        <div className="mb-2 w-full">
          <div className="flex items-center justify-between">
            <h4>{item.title}</h4>
            <h4 className="text-[#777777]">{item.genre}</h4>
          </div>
          <RatingStars rating={item.rating} />
        </div>
      ))}
    </div>
  );
}
