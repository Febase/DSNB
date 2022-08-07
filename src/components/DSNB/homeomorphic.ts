const HLT_S1 = `
M 105 107
C 105 107 99.8764 149.337 101 176.5
C 102.001 200.699 109 238 109 238
L 235.5 237
L 237 111
C 237 111 196.036 103.683 169.5 103
C 144.271 102.35 105 107 105 107
Z
`;

const HLT_S2 = `
M 81.0001 127
C 81.0001 127 79.3965 158.756 81.0001 179
C 82.8304 202.105 91.0001 237.5 91.0001 237.5
L 107.5 237.5
L 236.5 151
C 236.5 151 192.87 128.899 162.5 124
C 131.057 118.928 81.0001 127 81.0001 127
Z
`;

const HLB_S1 = `
M 105 369
C 105 369 99.8764 326.663 101 299.5
C 102.001 275.301 109 238 109 238
L 235.5 239
L 237 365
C 237 365 196.036 372.317 169.5 373
C 144.271 373.649 105 369 105 369
Z
`;

const HLB_S2 = `
M 81.0001 348.5
C 81.0001 348.5 79.3965 316.744 81.0001 296.5
C 82.8304 273.395 91.0001 238 91.0001 238
L 107.5 238
L 236.5 324.5
C 236.5 324.5 192.87 346.601 162.5 351.5
C 131.057 356.572 81.0001 348.5 81.0001 348.5
Z
`;

const HRB_S1 = `
M 369 369
C 369 369 374.124 326.663 373 299.5
C 371.999 275.301 365 238 365 238
L 238.5 239
L 237 365
C 237 365 277.964 372.317 304.5 373
C 329.729 373.649 369 369 369 369
Z
`;

const HRB_S2 = `
M 391.5 348.5
C 391.5 348.5 393.104 316.744 391.5 296.5
C 389.67 273.395 381.5 238 381.5 238
L 365 238
L 236 324.5
C 236 324.5 279.63 346.601 310 351.5
C 341.443 356.572 391.5 348.5 391.5 348.5
Z
`;

const HRT_S1 = `
M 369 107
C 369 107 374.124 149.337 373 176.5
C 371.999 200.699 365 238 365 238
L 238.5 237
L 237 111
C 237 111 277.964 103.683 304.5 103
C 329.729 102.35 369 107 369 107
Z
`;

const HRT_S2 = `
M 391.5 127.5
C 391.5 127.5 393.104 159.256 391.5 179.5
C 389.67 202.605 381.5 238 381.5 238
L 365 238
L 236 151.5
C 236 151.5 279.63 129.399 310 124.5
C 341.443 119.428 391.5 127.5 391.5 127.5
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
M 105 107
C 105 107 99.8764 149.337 101 176.5
C 102.001 200.699 109 238 109 238
L 235.5 237
L 237 111
C 237 111 196.036 103.683 169.5 103
C 144.271 102.35 105 107 105 107
Z
`;

const VLT_S2 = `
M 126.5 81
C 126.5 81 158.256 79.3963 178.5 81
C 201.605 82.8303 237 91 237 91
L 237 107.5
L 150.5 236.5
C 150.5 236.5 128.399 192.87 123.5 162.5
C 118.428 131.057 126.5 81 126.5 81
Z
`;

const VLB_S1 = `
M 105 369
C 105 369 99.8764 326.663 101 299.5
C 102.001 275.301 109 238 109 238
L 235.5 239
L 237 365
C 237 365 196.036 372.317 169.5 373
C 144.271 373.649 105 369 105 369
Z
`;

const VLB_S2 = `
M 126.5 391.5
C 126.5 391.5 158.256 393.104 178.5 391.5
C 201.605 389.67 237 381.5 237 381.5
L 237 365
L 150.5 236
C 150.5 236 128.399 279.63 123.5 310
C 118.428 341.443 126.5 391.5 126.5 391.5
Z
`;

const VRB_S1 = `
M 369 369
C 369 369 374.124 326.663 373 299.5
C 371.999 275.301 365 238 365 238
L 238.5 239
L 237 365
C 237 365 277.964 372.317 304.5 373
C 329.729 373.649 369 369 369 369
Z
`;

const VRB_S2 = `
M 347.5 391.5
C 347.5 391.5 315.744 393.104 295.5 391.5
C 272.395 389.67 237 381.5 237 381.5
L 237 365
L 323.5 236
C 323.5 236 345.601 279.63 350.5 310
C 355.572 341.443 347.5 391.5 347.5 391.5
Z
`;

const VRT_S1 = `
M 369 107
C 369 107 374.124 149.337 373 176.5
C 371.999 200.699 365 238 365 238
L 238.5 237
L 237 111
C 237 111 277.964 103.683 304.5 103
C 329.729 102.35 369 107 369 107
Z
`;

const VRT_S2 = `
M 348 81
C 348 81 316.244 79.3963 296 81
C 272.895 82.8303 237.5 91 237.5 91
L 237.5 107.5
L 324 236.5
C 324 236.5 346.101 192.87 351 162.5
C 356.072 131.057 348 81 348 81
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
