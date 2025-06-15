import React from "react";
import { FaEye, FaTags, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ newsDetails }) => {
  const { image_url, title, details, total_view, tags } = newsDetails;

  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <figure>
        <img
          src={image_url}
          alt="News"
          className="rounded-xl max-h-60 w-full object-cover"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm">{details}</p>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <FaEye /> {total_view} views
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-blue-600 mt-2">
          <FaTags className="text-gray-400" />
          {tags?.map((tag, i) => (
            <span key={i} className="badge badge-outline badge-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className=" justify-start mt-4">
          <Link
            to={`/category/${newsDetails.category_id}`}
            className="btn text-white bg-red-500 hover:bg-red-700"
          >
            <FaArrowLeft className="mr-2" />
            All News in This Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
