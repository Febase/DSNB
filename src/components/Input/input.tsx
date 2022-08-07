import {styled} from "@stitches/react";

const InputBox = styled("input", {
  width: 180,
  borderRadius: 10,
  border: '#D61C4E 3px solid',
  margin: "10px 0",
  padding: "20px"
})

const Input = ({changeInput, index} : {changeInput : () => {}, input : number}) => {
  return (
    <InputBox onChange={(e) => changeInput(e.target.value, index)}/>
  )
}

export default Input;
