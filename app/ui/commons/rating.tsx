import { Star, StarHalf } from "lucide-react";

type Props = {
  rating: number;
  maxRating: number;
};
export const Rating = ({ maxRating, rating }: Props) => {
  // If has decimal we assume that is an half vote, so we add an half star
  const hasDecimal = rating % 1 !== 0;

  // Get only the integer part of the rating
  const integerRating = Math.floor(rating);

  return (
    <div className={"relative"}>
      <div className={"flex gap-1"}>
        {Array.from({ length: maxRating }, (_, i) => (
          // bfa37c
          <Star key={i} fill={"#262d33"} height={16} strokeWidth={0} />
        ))}
      </div>
      <div className={"flex gap-1 absolute top-0"}>
        {Array.from({ length: integerRating }, (_, i) => (
          <Star key={i} fill={"#bfa37c"} height={16} strokeWidth={0} />
        ))}
        {hasDecimal && (
          <StarHalf fill={"#bfa37c"} height={16} strokeWidth={0} />
        )}
      </div>
    </div>
  );
};
