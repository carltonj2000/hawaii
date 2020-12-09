import { style1, style2 } from "./Map";

const Clipboard = () => (
  <svg class="w-12 h-12" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={style2} />
        <stop offset="100%" style={style1} />
      </linearGradient>
    </defs>
    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
    <path
      fill="url(#grad3)"
      fillRule="evenodd"
      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
      clipRule="evenodd"
    ></path>
  </svg>
);
export default Clipboard;
