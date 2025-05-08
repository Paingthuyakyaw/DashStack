import { type SVGProps } from "react";

const IconHeart = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.01" width="24" height="24" fill="black" />
      <path
        d="M12.0004 21C11.7346 21.0015 11.4791 20.8972 11.2904 20.71L3.52036 12.93C1.49191 10.8804 1.49191 7.57965 3.52036 5.53C5.5655 3.49063 8.87522 3.49063 10.9204 5.53L12.0004 6.61L13.0804 5.53C15.1255 3.49063 18.4352 3.49063 20.4804 5.53C22.5088 7.57965 22.5088 10.8804 20.4804 12.93L12.7104 20.71C12.5216 20.8972 12.2662 21.0015 12.0004 21Z"
        fill="black"
      />
    </svg>
  );
};

export default IconHeart;
