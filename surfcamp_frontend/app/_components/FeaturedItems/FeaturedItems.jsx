"use client";
import { useState } from "react";
import FeaturedArticle from "./FeaturedArticle";

// function recieves a headline prop and renders a list of items
const FeaturedItems = ({ headline, items }) => {
  const [itemNumber, setItemNumber] = useState(3);
  const onShowMore = () => {
    if (items.length < itemNumber + 3) {
      return setItemNumber(itemNumber.length);
    }
    return setItemNumber(itemNumber + 3);
  };
  return (
    <section className="featured-items">
      <h3 className="featured-items__headline">
        {headline || "Our featured articles"}
      </h3>
      <div className="featured-items__container">
        {items.slice(0, itemNumber).map((item) => (
          <FeaturedArticle key={item.slug} article={item} />
        ))}
      </div>
      {
        // if there are more items to show, show the button
        itemNumber < items.length && (
          <button
            className="btn btn--medium btn--turquoise"
            onClick={onShowMore}
          >
            See more
          </button>
        )
      }
    </section>
  );
};

export default FeaturedItems;
