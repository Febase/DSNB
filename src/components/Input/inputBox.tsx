import {styled} from "@stitches/react";
import {useState, useMemo, useCallback, useEffect, SetStateAction, Dispatch} from "react";

const InputContainer = styled("div", {
  display: 'flex',
  flexDirection: 'column',
})
const Input = styled("input", {
  width: 100,
  borderRadius: 10,
  border: '#D61C4E 2px solid',
  margin: "10px 0",
  padding: "20px"
})

const InputBox = ({setIsFill} : {setIsFill : Dispatch<SetStateAction<boolean>>}) => {
  const [inputData, setInputData] = useState(new Array(8).fill(""));
  const handleInput = (changeData : string, index : number) => {
    const newData = [...inputData];
    newData[index] = changeData;
    setInputData(newData);
  }

  useEffect(() => {
    if(inputData.some(data => data === "")){
      setIsFill(false)
    }else{
      setIsFill(true)
    }
  }, [inputData])

  return (
    <InputContainer>
      <div>값을 입력하세요</div>
      <Input onChange={(e) => handleInput(e.target.value, 0)}/>
      <Input onChange={(e) => handleInput(e.target.value, 1)}/>
      <Input onChange={(e) => handleInput(e.target.value, 2)}/>
      <Input onChange={(e) => handleInput(e.target.value, 3)}/>
      <Input onChange={(e) => handleInput(e.target.value, 4)}/>
      <Input onChange={(e) => handleInput(e.target.value, 5)}/>
      <Input onChange={(e) => handleInput(e.target.value, 6)}/>
      <Input onChange={(e) => handleInput(e.target.value, 7)}/>
    </InputContainer>
  )
}

export default InputBox;
