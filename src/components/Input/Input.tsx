import FromLang from "./FromLang"
import InputTypes from "../../types/InputTypes"
import microphone from "../../assets/icons/microphone.svg"

type InputProps = InputTypes & {
  text:string,
  setText:React.Dispatch<React.SetStateAction<string>>,
  setFromLang:React.Dispatch<React.SetStateAction<string>>
  className: string,
}



const Input = ({setFromLang, langOptions, text, setText}:InputProps) => {
  return (
    <section className="card rounded-box cardFrom flex flex-col gap-3">
      <FromLang langOptions={langOptions} setFromLang={setFromLang}/>
      <textarea name="from" 
      id="from" 
      required 
      placeholder="Enter your text here" 
      maxLength={2000} 
      minLength={2} 
      value={text} 
      onChange={(el)=> setText(el.target.value)} 
      className="textarea textarea-ghost h-32 textarea-accent"/>
    </section>
  )
}

export default Input