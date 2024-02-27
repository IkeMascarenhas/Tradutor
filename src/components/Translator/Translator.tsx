import React from 'react'
import Input from './Input'
import Output from './Output'
import Lang from './FromLang'
import { useState } from 'react'

const langOptions = new Map([
  ['Árabe', 'AR'],
  ['Búlgaro', 'BG'],
  ['Tcheco', 'CS'],
  ['Dinamarquês', 'DA'],
  ['Alemão', 'DE'],
  ['Grego', 'EL'],
  ['Inglês', 'EN'],
  ['Espanhol', 'ES'],
  ['Estoniano', 'ET'],
  ['Finlandês', 'FI'],
  ['Francês', 'FR'],
  ['Húngaro', 'HU'],
  ['Indonésio', 'ID'],
  ['Italiano', 'IT'],
  ['Japonês', 'JA'],
  ['Coreano', 'KO'],
  ['Lituano', 'LT'],
  ['Letão', 'LV'],
  ['Norueguês (Bokmål)', 'NB'],
  ['Holandês', 'NL'],
  ['Polonês', 'PL'],
  ['Português', 'PT'],
  ['Romeno', 'RO'],
  ['Russo', 'RU'],
  ['Eslovaco', 'SK'],
  ['Esloveno', 'SL'],
  ['Sueco', 'SV'],
  ['Turco', 'TR'],
  ['Ucraniano', 'UK'],
  ['Chinês', 'ZH'],
]);



const Translator = () => {
  const [fromLang, setFromLang] = useState('')
  return (
    <main>
      <Input setFromLang={setFromLang} langOptions={langOptions}/>
      <Output />
      
    </main>
  )
}

export default Translator