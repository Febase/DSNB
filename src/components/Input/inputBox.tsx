import {styled} from "@stitches/react";
import {useState, useMemo, useCallback, useEffect} from "react";
import Input from "./input";

const InputContainer = styled("div", {
  display: 'flex',
  flexDirection: 'column',
})

const InputBox = () => {
  const [inputData, setInputData] = useState({});
  const handleInput = (changeData, index) => {
    let newObj = {};

    console.log(newObj);
    setInputData(data => {
      if(data){
        newObj = {...data};
      }
       return (
         {...newObj, [index]: changeData}
       )
    })
  }

  useEffect(() => {
    console.log(inputData);
  }, [inputData])

  return (
    <InputContainer>
      {
        [0, 1, 2, 3, 4, 5, 6, 7].map((idx) => <Input changeInput={handleInput} index={idx}/>)
      }
    </InputContainer>
  )
}

export default InputBox;
