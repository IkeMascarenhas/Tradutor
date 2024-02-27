import { useState } from "react"
import ListLang from "./ListLang"

import InputProps from "../../types/InputTypes"


const TargetLang = ({langOptions, setFromLang}: InputProps) => {

  const handleSetFromLang = (lang: any) => {
    setFromLang(lang)
    console.log(lang)
  }
  return (
    <div>
      <input type="text" list="fromLang" onChange={(e)=> handleSetFromLang(e.target.value)}/>
      <ListLang langOptions={langOptions}/>
    </div>
  )
}

export default TargetLang