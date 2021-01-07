export const style1 = {
  stopColor: "#012169",
  stopOpacity: 1,
};

export const style2 = {
  stopColor: "#c8102e",
  stopOpacity: 1,
};

const Map = () => (
  <svg
    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={style1} />
        <stop offset="100%" style={style2} />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      fill="url(#grad2)"
      d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Map;
