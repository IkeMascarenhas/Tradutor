import { useState } from 'react'
import Input from './Input/Input';
import Output from './Output/Output';


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
    ['Português', 'PT-BR'],
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
    const [fromLang, SetFromLang] = useState("")
    const [targetLang, setTargetLang] = useState("")
    const [translated, setTranslated] = useState("")
    const [text, setText] = useState("")

    let loading = false
    const handleTranslation = async ()=>{
      try {
        setTranslated("")
        loading = true
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${langOptions.get(fromLang)}|${langOptions.get(targetLang)}`)
        const result = await response.json()
        loading=false
        setTranslated(result.responseData.translatedText)
      } catch (err:any) {
        console.log(err.message)
      }
    }
    
  return (
    <main>
        <Input setFromLang={SetFromLang} langOptions={langOptions} text={text} setText={setText}/>
        <Output translated={translated} targetLang={targetLang} setTargetLang={setTargetLang} langOptions={langOptions} loading={loading}/>
        <button onClick={handleTranslation}>Traduzir</button>
    </main>
  )
}

export default Translator