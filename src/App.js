import React, { useState, useEffect } from "react";
import GenreBox from "./components/GenreBox";
import RatingBox from "./components/RatingBox";
import SearchRating from "./components/SearchRating";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import RatingStars from "./components/Ratings";

export default function App() {
  const [selectedRatings, setSelectedRatings] = useState(["Any rating"]);
  const [selectedGenre, setSelectedGenre] = useState(["Any genre"]);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  const movies = [
    { id: 1, title: "The Matrix", rating: 7.5, genre: "Action" },
    { id: 2, title: "Focus", rating: 6.9, genre: "Comedy" },
    { id: 3, title: "The Lazarus Effect", rating: 6.4, genre: "Thriller" },
    { id: 4, title: "Everly", rating: 5.0, genre: "Action" },
    { id: 5, title: "Maps to the Stars", rating: 7.5, genre: "Drama" },
  ];

  //console.log("--------", selectedGenre, selectedRatings);

  const onCloseDropdown = type => {
    if (type === "genre" && dropdownOpen === "genre") {
      setDropdownOpen("");
    } else if (type === "genre") {
      setDropdownOpen("genre");
    }
    if (type === "rating" && dropdownOpen === "rating") {
      setDropdownOpen("");
    } else if (type === "rating") {
      setDropdownOpen("rating");
    }
  };

  const checkRating = rating => {
    if (selectedRatings.includes("Any rating")) {
      return true;
    }
    let flag = false;
    const isRating = selectedRatings.map(item => {
      console.log("****", rating, item, rating >= item, rating < item + 1);
      if (rating >= item && rating < item + 1) {
        flag = true;
      }
    });
    return flag;
  };

  console.log("--------", checkRating(6.2));

  useEffect(() => {
    const regex = new RegExp(search, "i");
    let searchResults = movies.filter(str => regex.test(str.title));
    searchResults = searchResults.filter(
      item =>
        selectedGenre.includes(item.genre) ||
        selectedGenre.includes("Any genre")
    );
    searchResults = searchResults.filter(item => checkRating(item.rating));
    console.log("=-=-", searchResults);
    setItems(searchResults);
  }, [search, selectedRatings, selectedGenre]);

  return (
    <div className="p-10">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Enter movie name"
            type="text"
            className="border border-[#979797] px-3 py-2 w-full"
          />
          {items.length > 0 && search && <SearchRating items={items} />}
        </div>

        <div className="col-span-2 ">
          <div className="flex items-center space-x-2">
            <div
              onClick={() => onCloseDropdown("rating")}
              className="border border-[#979797] p-2 flex-1 flex justify-between items-center"
            >
              <span>Rating</span>
              {dropdownOpen === "rating" ? (
                <BsChevronUp style={{ strokeWidth: 2 }} />
              ) : (
                <BsChevronDown style={{ strokeWidth: 2 }} />
              )}
            </div>
            <div
              onClick={() => onCloseDropdown("genre")}
              className="border border-[#979797] p-2 flex-1 flex-1 items-center flex justify-between"
            >
              <span>Genre</span>
              {dropdownOpen === "genre" ? (
                <BsChevronUp style={{ strokeWidth: 2 }} />
              ) : (
                <BsChevronDown style={{ strokeWidth: 2 }} />
              )}
            </div>
          </div>

          {dropdownOpen === "rating" && (
            <RatingBox
              selectedRatings={selectedRatings}
              setSelectedRatings={setSelectedRatings}
            />
          )}
          {dropdownOpen === "genre" && (
            <GenreBox
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
            />
          )}
        </div>
      </div>
    </div>
  );
}
