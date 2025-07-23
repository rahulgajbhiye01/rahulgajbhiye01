import * as React from "react";

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    id="Final"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:#fff;}.cls-1,.cls-2,.cls-3{stroke-miterlimit:10;stroke-width:2px;}.cls-1,.cls-3{stroke:#a5d6a7;}.cls-2{fill:#a5d6a7;stroke:#231f20;}.cls-3{fill:#231f20;}"
        }
      </style>
    </defs>
    <g id="Final-2">
      <polygon
        className="cls-1"
        points="659.67 467.31 659.67 506.81 626.43 473.57 626.43 483.42 598.5 509.4 598.5 379.58 626.43 353.6 626.43 434.07 659.67 467.31"
      />
      <path
        className="cls-3"
        d="M682.31,373.51l-104.38,113.75-.23-37.93c1.71-1.57,72.78-58.86,74.55-60.47l-97.65,30.91-.53-37.63,128.24-8.63Z"
      />
      <path
        className="cls-2"
        d="M637.61,448.63c0,1.77-.22,3.49-.62,5.13-2.31,9.35-10.75,16.29-20.82,16.29-2.97,0-5.8-.6-8.37-1.7-7.68-3.26-13.07-10.87-13.07-19.74,0-11.84,9.6-21.44,21.44-21.44v6.67c-8.13.01-14.71,6.61-14.71,14.74v.03c.01,7.08,5.02,12.99,11.69,14.4.98.21,1.99.31,3.02.32h.03c6.32,0,11.71-3.98,13.8-9.56h-13.76s0-5.13,0-5.13h21.37Z"
      />
    </g>
  </svg>
);
export default Logo;
