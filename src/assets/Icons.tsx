import { twMerge } from "tailwind-merge";

export const XMark:React.FC<{active:boolean}> = ({active}) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 162 162"
    xmlSpace="preserve"
    className={twMerge("h-6 w-6 group-hover/card:scale-125 transition-all ease-in-out duration-300",active && " rotate-45")}
  >
    <path
      className="ser-cross-svg"
      d="M108 88.7c-10.8 0-19.7 8.8-19.7 19.7v47.4c0 1.9-1.5 3.4-3.4 3.4h-8.6c-1.9 0-3.4-1.5-3.4-3.4v-47.4c0-10.8-8.8-19.7-19.7-19.7H6.4c-1.9 0-3.4-1.5-3.4-3.4v-8c0-1.9 1.5-3.4 3.4-3.4h46.9c10.8 0 19.7-8.8 19.6-19.7V6.4c0-1.9 1.5-3.4 3.4-3.4H85c1.9 0 3.4 1.5 3.4 3.4v47.8c0 10.8 8.8 19.7 19.7 19.7h46.6c1.9 0 3.4 1.5 3.4 3.4v8c0 1.9-1.5 3.4-3.4 3.4H108z"
      style={{ fillRule: "evenodd", clipRule: "evenodd" }}
      fill="white"
    />
  </svg>
)