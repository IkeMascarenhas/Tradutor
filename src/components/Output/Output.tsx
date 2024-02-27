import TargetLang from "./TargetLang"
import InputTypes from "../../types/InputTypes"

type OutputProps = InputTypes & {
  translated: string,
  targetLang:string,
  setTargetLang: React.Dispatch<React.SetStateAction<string>>
  loading:boolean
}


const Output = ({translated, setTargetLang, langOptions, loading}:OutputProps) => {
  return (
    <>
      <TargetLang langOptions={langOptions} setTargetLang={setTargetLang}/>
      <textarea name="target" id="target" required placeholder={loading ? "Aguarde" : ""} maxLength={2000} minLength={2} value={translated} readOnly/>
    </>
  )
}

export default Output