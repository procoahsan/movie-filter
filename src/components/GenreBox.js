import React from "react";
import Checkbox from "react-custom-checkbox";
import { BsCheck } from "react-icons/bs";

export default function GenreBox({ selectedGenre, setSelectedGenre }) {
  const genre = ["Any genre", "Action", "Comedy", "Drama", "Thriller"];
  const onChangeInput = (value, item) => {
    if (value) {
      if (item === "Any genre") {
        setSelectedGenre(["Any genre"]);
        return;
      }
      if (selectedGenre.includes("Any genre")) {
        setSelectedGenre([item]);
        return;
      }
      setSelectedGenre([...selectedGenre, item]);
    } else {
      if (item === "Any genre") {
        setSelectedGenre([]);
        return;
      }
      const filterItems = selectedGenre.filter(rating => rating !== item);
      setSelectedGenre(filterItems);
    }
  };
  return (
    <div className="w-full flex flex-col space-y-2 border border-[#979797] px-3 py-2 mt-2">
      {genre.map(item => (
        <div className="flex space-x-2">
          <Checkbox
            icon={<BsCheck color="#000000" size={14} />}
            borderColor="#000000"
            checked={selectedGenre.includes(item)}
            onChange={value => onChangeInput(value, item)}
            labelStyle={{ marginLeft: 5, userSelect: "none" }}
            label={item}
          />
        </div>
      ))}
    </div>
  );
}
