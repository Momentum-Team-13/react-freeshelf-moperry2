import React from "react";
import "./bookDetails.css";

export default function BookDetails({ book }) {
  return (
    <div className="detail">
      <div className="expanded">{book.detailedDescription} &nbsp; &nbsp;</div>
      {book.publicationDate != null && (
        <span>Published: {book.publicationDate}</span>
      )}{" "}
      {book.publisher != null && <span>by {book.publisher}</span>}
      <div id="url">
        <a href={book.url}>More Information</a>
      </div>
    </div>
  );
}
