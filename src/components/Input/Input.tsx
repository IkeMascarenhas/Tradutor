import FromLang from "./FromLang"
import InputTypes from "../../types/InputTypes"

type InputProps = InputTypes & {
  text:string,
  setText:React.Dispatch<React.SetStateAction<string>>,
  setFromLang:React.Dispatch<React.SetStateAction<string>>
}

const Input = ({setFromLang, langOptions, text, setText}:InputProps) => {
  return (
    <>
      <FromLang langOptions={langOptions} setFromLang={setFromLang}/>
      <textarea name="from" id="from" required placeholder="Enter your text here" maxLength={2000} minLength={2} value={text} onChange={(el)=> setText(el.target.value)}/>
    </>
  )
}

export default Input