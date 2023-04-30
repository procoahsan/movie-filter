import React from "react";
import { IoStarHalfSharp, IoStarOutline, IoStarSharp } from "react-icons/io5";

export default function RatingStars({ rating }) {
  if (rating < 0.5) {
    return (
      <div className="flex flex-row -ml-1">
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 1) {
    return (
      <div className="flex flex-row -ml-1">
        <IoStarHalfSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 1.5) {
    return (
      <div className="flex flex-row -ml-1">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 2) {
    return (
      <div className="flex flex-row -ml-1">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarHalfSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 2.5) {
    return (
      <div className="flex flex-row -ml-1">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 3) {
    return (
      <div className="flex flex-row -ml-1">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarHalfSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 3.5) {
    return (
      <div className="flex flex-row -ml-1">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 4) {
    return (
      <div className="flex flex-row -ml-1">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarHalfSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 4.5) {
    return (
      <div className="flex flex-row -ml-1">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 5) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarHalfSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 5.5) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 6) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarHalfSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 6.5) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 7) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarHalfSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 7.5) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 8) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarHalfSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 8.5) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 9) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarHalfSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 9.5) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarOutline className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating < 10) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarHalfSharp className="text-[#171717] text-lg" />
      </div>
    );
  } else if (rating >= 10) {
    return (
      <div className="flex flex-row">
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
        <IoStarSharp className="text-[#171717] text-lg" />
      </div>
    );
  }
}
