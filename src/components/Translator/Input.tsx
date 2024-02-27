import FromLang from "./FromLang"
import InputProps from "../../types/InputTypes"


const Input = ({setFromLang, langOptions}:InputProps) => {
  return (
    <>
      <FromLang langOptions={langOptions} setFromLang={setFromLang}/>
      <textarea name="from" id="from" required placeholder="Enter your text here" maxLength={2000} minLength={2}/>
    </>
  )
}

export default Input