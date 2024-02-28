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
    <section className="card rounded-box cardTarget card rounded-box cardFrom flex flex-col gap-3">
      <TargetLang langOptions={langOptions} setTargetLang={setTargetLang}/>
      <textarea name="target" 
      id="target" 
      required 
      placeholder={loading ? "Aguarde" : "O resultado aparecerá aqui"} 
      maxLength={2000} 
      minLength={2} 
      value={loading ? "Aguarde um momento" : translated} 
      readOnly
      className="textarea textarea-ghost h-32 textarea-accent"/>
    </section>
  )
}

export default Output