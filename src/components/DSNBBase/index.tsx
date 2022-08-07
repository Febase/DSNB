import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  isStart: boolean;
}

const variants = {
  hide: { opacity: [1, 0],  rotate: [0, 720]}, //rotateY: [0, 720], rotateX: [0, 720]
  show: { opacity: [0, 1],  rotate: [720, 0]}, //rotateY: [720, 0], rotateX: [720, 0]
};

const DSNBBase = ({ isStart }: IProps) => {
  return (
    <>
      <motion.svg
        width="475"
        height="475"
        viewBox="0 0 475 475"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key="inner"
        animate={isStart ? "hide" : ""}
        variants={variants}
      >
        <path d="M372 102H102V372H372V102Z" fill="#0074FF" />
        <path d="M237 238L371.234 372.25H102.766L237 238Z" fill="#80BAFF" />
        <line
          x1="237.25"
          y1="238"
          x2="237.25"
          y2="371.492"
          stroke="#0074FF"
          strokeWidth="0.5"
        />
        <path
          d="M239 237L371.75 102.766L371.75 371.234L239 237Z"
          fill="#80BAFF"
        />
        <line
          x1="239"
          y1="236.75"
          x2="371"
          y2="236.75"
          stroke="#0074FF"
          strokeWidth="0.5"
        />
        <path
          d="M235 237L102.25 371.234L102.25 102.766L235 237Z"
          fill="#80BAFF"
        />
        <line
          x1="235"
          y1="237.25"
          x2="103"
          y2="237.25"
          stroke="#0074FF"
          strokeWidth="0.5"
        />
        <path
          d="M237 236L102.766 101.75L371.234 101.75L237 236Z"
          fill="#80BAFF"
        />
        <line
          x1="236.75"
          y1="236"
          x2="236.75"
          y2="102.508"
          stroke="#0074FF"
          strokeWidth="0.5"
        />
      </motion.svg>
      <motion.svg
        width="475"
        height="475"
        viewBox="0 0 475 475"
        fill="none"
        opacity={0}
        xmlns="http://www.w3.org/2000/svg"
        animate={isStart ? "show" : ""}
        variants={variants}
        key="outer"
      >
        <path
          d="M170.613 169.151L110 236.902L169.613 304.651L237.5 364L305.613 304.651L365 236.902L303.113 167.651L237 110L170.613 169.151Z"
          fill="#0074FF"
        />
        <path
          d="M105.934 106.427C105.934 106.427 145.825 101.612 171.434 102.427C197.19 103.247 236.934 110.427 236.934 110.427L236.434 236.691L173.184 237.059L109.934 237.427C109.934 237.427 102.707 197.685 101.934 171.927C101.165 146.312 105.934 106.427 105.934 106.427Z"
          fill="#80BAFF"
        />
        <path
          d="M238.434 238.191L301.684 237.809L364.934 237.427C364.934 237.427 372.16 277.169 372.934 302.927C373.703 328.543 368.934 368.427 368.934 368.427C368.934 368.427 328.744 373.196 302.934 372.427C276.982 371.654 236.934 364.427 236.934 364.427L238.434 238.191Z"
          fill="#80BAFF"
        />
        <path
          d="M105.934 368.191C105.934 368.191 101.175 328.451 101.934 302.927C102.7 277.169 109.934 237.427 109.934 237.427L173.184 237.927L236.434 238.427L236.934 364.427C236.934 364.427 197.193 371.7 171.434 372.427C145.811 373.151 105.934 368.191 105.934 368.191Z"
          fill="#80BAFF"
        />
        <path
          d="M238.434 236.691L236.934 110.427C236.934 110.427 277.585 102.122 303.934 102.427C327.958 102.705 368.934 106.427 368.934 106.427C368.934 106.427 372.934 148.933 372.934 173.927C372.934 198.921 364.934 237.427 364.934 237.427L301.684 237.059L238.434 236.691Z"
          fill="#80BAFF"
        />
        <path
          d="M236.434 238.191L105.934 368.191L237.434 372.191L236.434 238.191Z"
          fill="url(#paint0_linear_1_140)"
        />
        <path
          d="M238.434 238.691L368.934 368.191L237.434 372.691L238.434 238.691Z"
          fill="url(#paint1_linear_1_140)"
        />
        <path
          d="M238.434 236.691L368.934 106.191C368.934 106.191 373.381 146.542 372.434 172.427C371.509 197.701 364.434 236.691 364.434 236.691L238.434 236.691Z"
          fill="url(#paint2_linear_1_140)"
        />
        <path
          d="M105.934 106.191L236.434 236.691L102.434 238.191L105.934 106.191Z"
          fill="url(#paint3_linear_1_140)"
        />
        <path
          d="M236.934 110.427V204.427H237.934L236.934 110.427Z"
          fill="#0074FF"
          fillOpacity="0.29"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_140"
            x1="21.4338"
            y1="279.691"
            x2="246.925"
            y2="362.609"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3190FF" />
            <stop offset="1" stopColor="#80BAFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_140"
            x1="472.934"
            y1="280.691"
            x2="228.069"
            y2="361.776"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3190FF" />
            <stop offset="1" stopColor="#80BAFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_140"
            x1="336.434"
            y1="27.691"
            x2="375.373"
            y2="253.87"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3190FF" />
            <stop offset="1" stopColor="#80BAFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_140"
            x1="161.434"
            y1="32.1909"
            x2="86.6804"
            y2="242.479"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3190FF" />
            <stop offset="1" stopColor="#80BAFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </>
  );
};

export default DSNBBase;
