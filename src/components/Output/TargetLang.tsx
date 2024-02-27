import ListLang from "../ListLang"
import InputTypes from "../../types/InputTypes"

type TargetLangProps = InputTypes & {
  setTargetLang: React.Dispatch<React.SetStateAction<string>>
}

const TargetLang = ({langOptions, setTargetLang}: TargetLangProps) => {
  return (
    <div>
      <input type="text" list="fromLang" onChange={(e)=> setTargetLang(e.target.value)} placeholder="Digite o texto"/>
      <ListLang langOptions={langOptions}/>
    </div>
  )
}

export default TargetLang