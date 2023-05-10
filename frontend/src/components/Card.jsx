import React from "react";
import { parseISO, format } from "date-fns";
import { Link } from "react-router-dom";

const Card = ({ img, content, author, title, date, category, blogId }) => {
  const dateObj = parseISO(date);
  const newFormat = format(dateObj, "dd MMMM yyyy");
  return (
    <div className="card">
      <div className="card-img w-full relative">
        <img
          src={img}
          alt="blogs-img"
          className="object-cover object-center rounded-md"
        />

        <div className="backdrop-blur-sm absolute inset-x-0 bottom-0 h-16 "></div>

        <div className="absolute inset-x-0 bottom-0 flex justify-between text-white text-xs font-semibold h-16 py-3 px-6">
          <div>
            <p className="mb-1">{author}</p>
            <p>{newFormat}</p>
          </div>
          <div>
            <p>{category}</p>
          </div>
        </div>
      </div>

      <div className="w-11/12 py-5">
        <div className="capt mb-5">
          <h1 className="mb-2 font-bold text-2xl">{title}</h1>
          <p className="text-sm font-normal text-gray-300 leading-5 tracking-wide">
            {content.substring(0, 200)}...
          </p>
        </div>
        <Link
          to={`/detail/${blogId}`}
          className="text-xs font-bold flex gap-1 items-center"
        >
          <p>Read post</p>
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
