import { Link } from "react-router";

export const CustomShortLogo = () => {
  return (
    <Link to="/" className="flex items-center whitespace-nowrap">
      <span className="font-montserrat font-bold text-xl m-0 whitespace-nowrap">
        T | S
      </span>
    </Link>
  );
};
