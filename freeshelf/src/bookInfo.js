import React from "react";
import { useState } from "react";
import { TriangleDownIcon, TriangleRightIcon } from "@primer/octicons-react";
import BookDetails from "./bookDetails";
import "./bookInfo.css";

export default function BookInfo({ book, index }) {
  const [minimized, setMinimized] = useState(false);

  return (
    <div id="book" key={book.title}>
      <span id="head" className="title">
        {book.title}
      </span>
      <span id="head">
        by: <strong>{book.author}</strong>
      </span>
      <br></br>
      <div className="card_top">
        <div className="text_info">
          <div>{book.shortDescription}</div>
          {minimized ? (
            <div
              className="disclosure-control"
              role="button"
              aria-expanded={!minimized}
              onClick={() => setMinimized(!minimized)}
            >
              <TriangleDownIcon size={24} aria-label="Show Less" />
              <span>
                <strong>Show Less</strong>
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="photo">
            <img
              className="image"
              src={book.coverImageUrl}
              alt="photograph of book cover"
              onError={(e) => (e.target.src = "default_cover.png")}
            />
          </div>
        </div>
        <div></div>
      </div>

      {minimized ? (
        <>
          <BookDetails book={book} key={index} />
        </>
      ) : (
        <div
          className="text_info"
          role="button"
          aria-expanded={minimized}
          onClick={() => setMinimized(!minimized)}
        >
          <TriangleRightIcon size={24} aria-label="Show More" />
          <span>
            <strong>Show More</strong>
          </span>
        </div>
      )}
    </div>
  );
}
