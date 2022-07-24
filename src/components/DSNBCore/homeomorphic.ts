
const HLT_S1 = `
M 105.934 106.427
C 105.934 106.427 145.825 101.612 171.434 102.427
C 197.19 103.247 236.934 110.427 236.934 110.427
C 236.434 236.691 236.434 236.691 236.434 236.691
L 173.184 237.059
L 109.934 237.427
C 109.934 237.427 102.707 197.685 101.934 171.927
C 101.165 146.312 105.934 106.427 105.934 106.427
Z
`;

const HLT_S2 = `
M 91.2219 127.952
C 91.2219 127.952 110.065 126.223 124.012 124.452
C 134.948 123.064 141.439 123.597 152.279 124.452
C 172.777 126.069 200.333 135.217 200.333 135.217
L 243.893 150.927
L 113.836 238.597
C 101.964 238.597 101.964 238.597 101.964 238.597
C 91.2219 127.952 91.2219 127.952 91.2219 127.952
Z
`;

const HLB_S1 = `
M 105.934 368.191
C 105.934 368.191 101.175 328.451 101.934 302.927
C 102.7 277.169 109.934 237.427 109.934 237.427
L 173.184 237.927
C 236.434 238.427 236.434 238.427 236.434 238.427
C 236.934 364.427 236.934 364.427 236.934 364.427
C 236.934 364.427 197.193 371.7 171.434 372.427
C 145.811 373.151 105.934 368.191 105.934 368.191
Z
`;

const HLB_S2 = `
M 91.2218 347.452
C 101.963 238.452 101.963 238.452 101.963 238.452
C 113.836 238.992 113.836 238.992 113.836 238.992
L 244.458 324.991
C 244.458 324.991 222.037 336.379 205.421 341.452
C 185.967 347.393 152.279 350.452 152.279 350.452
C 152.279 350.452 134.683 351.72 124.012 350.452
C 109.625 348.743 91.2218 347.452 91.2218 347.452
Z
`;

const HRB_S1 = `
M 238.434 238.191
L 301.684 237.809
L 364.934 237.427
C 364.934 237.427 372.16 277.169 372.934 302.927
C 373.703 328.543 368.934 368.427 368.934 368.427
C 368.934 368.427 328.744 373.196 302.934 372.427
C 276.982 371.654 236.934 364.427 236.934 364.427
L 238.434 238.191
Z
`;

const HRB_S2 = `
M 371.632 237.952
L 388.027 237.952
L 398.768 347.452
C 398.768 347.452 379.607 350.215 367.109 350.952
C 356.052 351.605 349.754 351.581 338.842 350.952
C 316.423 349.661 304.223 347.261 284.569 341.452
C 267.382 336.373 244.458 324.978 244.458 324.978
L 371.632 237.952
Z
`;

const HRT_S1 = `
M 238.434 236.691
L 236.934 110.427
C 236.934 110.427 277.585 102.122 303.934 102.427
C 327.958 102.705 368.934 106.427 368.934 106.427
C 368.934 106.427 372.934 148.933 372.934 173.927
C 372.934 198.921 364.934 237.427 364.934 237.427
L 301.684 237.059
L 238.434 236.691
Z
`;

const HRT_S2 = `
M 371.632 237.63
L 243.892 150.926
C 243.892 150.926 267.142 138.77 284.569 133.452
C 304.407 127.399 316.997 125.814 338.842 124.452
C 350.339 123.736 368.24 124.452 368.24 124.452
C 398.768 127.952 398.768 127.952 398.768 127.952
L 388.592 237.63
L 371.632 237.63
Z
`;

export const horizonGroup  = {
  lt: {
    s1: HLT_S1,
    s2: HLT_S2,
  },
  lb: {
    s1: HLB_S1,
    s2: HLB_S2,
  },
  rb: {
    s1: HRB_S1,
    s2: HRB_S2,
  },
  rt: {
    s1: HRT_S1,
    s2: HRT_S2,
  },
};

const VLT_S1 = `
M 105.934 106.427
C 105.934 106.427 145.825 101.612 171.434 102.427
C 197.19 103.247 236.934 110.427 236.934 110.427
L 236.434 236.691
C 173.184 237.059 173.184 237.059 173.184 237.059
C 109.934 237.427 109.934 237.427 109.934 237.427
C 109.934 237.427 102.707 197.685 101.934 171.927
C 101.165 146.312 105.934 106.427 105.934 106.427
Z
`;

const VLT_S2 = `
M 127.547 88.6102
C 236.547 99.0442 236.547 99.0442 236.547 99.0442
C 236.008 110.577 236.008 110.577 236.008 110.577
L 150.009 237.459
C 150.009 237.459 138.621 215.68 133.547 199.54
C 127.607 180.643 124.547 147.919 124.547 147.919
C 124.547 147.919 123.28 130.827 124.547 120.462
C 126.257 106.487 127.547 88.6102 127.547 88.6102
Z
`;

const VLB_S1 = `
M 105.934 368.191
C 105.934 368.191 101.175 328.451 101.934 302.927
C 102.7 277.169 109.934 237.427 109.934 237.427
C 173.184 237.927 173.184 237.927 173.184 237.927
C 236.434 238.427 236.434 238.427 236.434 238.427
C 236.934 364.427 236.934 364.427 236.934 364.427
C 236.934 364.427 197.193 371.7 171.434 372.427
C 145.811 373.151 105.934 368.191 105.934 368.191
Z
`;

const VLB_S2 = `
M 237.548 360.443
C 128.548 387.105 128.548 387.105 128.548 387.105
C 128.548 387.105 125.274 368.458 124.548 356.353
C 123.918 345.867 123.905 339.929 124.548 329.444
C 125.846 308.252 128.263 296.263 134.548 276.176
C 139.52 260.281 150.548 237.981 150.548 237.981
C 237.548 360.443 237.548 360.443 237.548 360.443
Z
`;

const VRB_S1 = `
M 238.434 238.191
L 301.684 237.809
C 364.934 237.427 364.934 237.427 364.934 237.427
C 364.934 237.427 372.16 277.169 372.934 302.927
C 373.703 328.543 368.934 368.427 368.934 368.427
C 368.934 368.427 328.744 373.196 302.934 372.427
C 276.982 371.654 236.934 364.427 236.934 364.427
L 238.434 238.191
Z
`;

const VRB_S2 = `
M 237.37 360.992
L 324.074 236.91
C 324.074 236.91 336.23 259.494 341.548 276.422
C 347.601 295.692 349.186 307.922 350.548 329.141
C 351.264 340.309 352.02 346.99 350.548 357.697
C 348.74 370.849 347.048 387.351 347.048 387.351
C 237.37 377.467 237.37 377.467 237.37 377.467
L 237.37 360.992
Z
`;

const VRT_S1 = `
M 238.434 236.691
C 236.934 110.427 236.934 110.427 236.934 110.427
C 236.934 110.427 277.585 102.122 303.934 102.427
C 327.958 102.705 368.934 106.427 368.934 106.427
C 368.934 106.427 372.934 148.933 372.934 173.927
C 372.934 198.921 364.934 237.427 364.934 237.427
L 301.684 237.059
L 238.434 236.691
Z
`;

const VRT_S2 = `
M 347.048 88.6102
C 347.048 88.6102 348.777 106.913 350.548 120.461
C 351.936 131.084 351.403 137.39 350.548 147.919
C 348.931 167.83 339.783 194.598 339.783 194.598
C 324.073 236.91 324.073 236.91 324.073 236.91
C 236.403 110.577 236.403 110.577 236.403 110.577
L 236.403 99.0445
L 347.048 88.6102
Z
`;

export const verticalGroup = {
  lt: {
    s1: VLT_S1,
    s2: VLT_S2,
  },
  lb: {
    s1: VLB_S1,
    s2: VLB_S2,
  },
  rb: {
    s1: VRB_S1,
    s2: VRB_S2,
  },
  rt: {
    s1: VRT_S1,
    s2: VRT_S2,
  },
};
