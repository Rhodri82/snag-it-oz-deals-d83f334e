
import React from "react";
import { Deal } from "@/types";
import { Link } from "react-router-dom";
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";

interface DealCardProps {
  deal: Deal;
}

export const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  return (
    <div className="rounded-lg border shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-card px-4 py-5 mb-6">
      <div className="flex items-start justify-between">
        {/* Retailer and Metadata */}
        <div className="text-sm font-medium text-muted-foreground mb-2">
          {deal.retailer}
        </div>

        {/* Age */}
        <div className="text-xs text-muted-foreground">{deal.timeAgo}</div>
      </div>

      {/* Title & Price Block */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-6">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-1">{deal.title}</h2>
          <p className="text-sm text-muted-foreground">{deal.description}</p>

          <div className="mt-3 flex items-center gap-3">
            <span className="text-xl font-bold">${deal.price}</span>
            {deal.originalPrice && (
              <>
                <span className="line-through text-muted-foreground">${deal.originalPrice}</span>
                <span className="text-green-600 text-sm font-medium">
                  {deal.discountPercent}% OFF
                </span>
              </>
            )}
          </div>

          <div className="text-xs text-muted-foreground mt-2">
            Shipping: {deal.shipping}
          </div>
        </div>

        {/* Vote / Comment Stats */}
        <div className="flex flex-col items-center gap-2 mt-4 md:mt-0 md:w-[90px]">
          <div className="flex items-center gap-1 text-green-700">
            <ThumbsUp size={16} /> {deal.upvotes}
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <ThumbsDown size={16} /> {deal.downvotes}
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MessageSquare size={16} /> {deal.comments}
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {deal.tags.map((tag) => (
          <span
            key={tag}
            className="pill pill-amber font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-4 flex justify-end">
        <Link
          to={deal.link}
          className="inline-flex items-center gap-2 text-sm font-medium rounded-md bg-secondary text-white px-4 py-2 hover:opacity-90 transition"
        >
          Snag This Deal
        </Link>
      </div>
    </div>
  );
};
