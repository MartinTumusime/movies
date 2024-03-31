import React from "react";

const MovieCard = ({movi1}) => {
  return (
    <div className="movie">
            <div>
              <p>{movi1.Year}</p>
            </div>
            <div>
              <img
                src={
                  movi1.Poster !== "N/A"
                    ? movi1.Poster
                    : "https://via.placeholder.com/400"
                }
                alt={movi1.Title}
              />
            </div>
            <div>
              <span>{movi1.Type}</span>
              <h3>{movi1.Title}</h3>
            </div>
          </div>
  );
}

export default MovieCard;