
import ListLang from "../ListLang"

import InputTypes from "../../types/InputTypes"

type FromLangProps = InputTypes & {
  setFromLang: React.Dispatch<React.SetStateAction<string>>,
  
}

const FromLang = ({langOptions, setFromLang}: FromLangProps) => {

  return (
    <div>
      <input type="text" list="fromLang" onChange={(e)=> setFromLang(e.target.value)} placeholder="Digite o texto"/>
      <ListLang langOptions={langOptions}/>
    </div>
  )
}

export default FromLang