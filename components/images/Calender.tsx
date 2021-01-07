import { style1, style2 } from "./Map";

const Calender = () => (
  <svg
    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={style2} />
        <stop offset="100%" style={style1} />
      </linearGradient>
    </defs>
    <path
      fill="url(#grad3)"
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Calender;
