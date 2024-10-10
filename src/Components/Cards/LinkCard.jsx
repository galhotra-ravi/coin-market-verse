import React from "react";
import { Link } from "react-router-dom";

function LinkCard({
  linkTitle = "",
  linkIconName = "",
  linkUrl = "",
  iconType = "solid",
}) {
  return (
    <>
          <Link to={linkUrl} target="_blank">
            <p className="-2 inline py-1 px-2 rounded-md text-sm font-medium bg-third-color hover:bg-[#4a4c52] transition-all ease-in-out duration-200 active:bg-third-color">
              <i className={`fa-${iconType} fa-${linkIconName} mr-1`}></i>{" "}
              {linkTitle}
            </p>
          </Link>
    </>
  );
}

export default LinkCard;
