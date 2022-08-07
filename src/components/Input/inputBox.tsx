import { styled } from "@stitches/react";
import { useState, useEffect, SetStateAction, Dispatch } from "react";

const InputContainer = styled("div", {
  display: "flex",
  width: "270px",
  height: "270px",
  position: "absolute",
  top: "100px",
  left: "100px",
  zIndex: 10,
});
const Input = styled("input", {
  position: "absolute",
  width: "70px",
  borderRadius: 8,
  border: "#0074FF 2px solid",
  backgroundColor: "rgba(255,255,255,0.7)",
  margin: "10px 0",
  padding: "5px",
});

const InputBox = ({
  inputData,
  handleInputData,
  setIsFill,
}: {
  inputData: string[];
  handleInputData: (changeData: string, index: number) => void;
  setIsFill: Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    if (inputData.some((data) => data === "")) {
      setIsFill(false);
    } else {
      setIsFill(true);
    }
  }, [inputData]);

  return (
    <InputContainer>
      {/* <div>값을 입력하세요</div> */}
      <Input
        onChange={(e) => handleInputData(e.target.value, 0)}
        style={{ top: "90px", left: "10px" }}
      />
      <Input
        onChange={(e) => handleInputData(e.target.value, 1)}
        style={{ top: "0px", left: "40px" }}
      />
      <Input
        onChange={(e) => handleInputData(e.target.value, 2)}
        style={{ top: "0px", right: "40px" }}
      />
      <Input
        onChange={(e) => handleInputData(e.target.value, 3)}
        style={{ top: "90px", right: "5px" }}
      />
      <Input
        onChange={(e) => handleInputData(e.target.value, 4)}
        style={{ bottom: '85px', left: '10px' }}
      />
      <Input
        onChange={(e) => handleInputData(e.target.value, 5)}
        style={{ bottom: "0px", left: '40px' }}
      />
      <Input
        onChange={(e) => handleInputData(e.target.value, 6)}
        style={{ bottom: "0px", right: '40px' }}
      />
      <Input
        onChange={(e) => handleInputData(e.target.value, 7)}
        style={{ bottom: '85px', right: '5px' }}
      />
    </InputContainer>
  );
};

export default InputBox;
