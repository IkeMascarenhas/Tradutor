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
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
 
    const handleTranslation = async ()=>{
      try {
        setTranslated("")
        setError(false)
        setIsLoading(true)
        if(fromLang && targetLang && text){
          const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${langOptions.get(fromLang)}|${langOptions.get(targetLang)}`)
          const result = await response.json()
          setIsLoading(false)
          setTranslated(result.responseData.translatedText)
        } else {
          alert("Preencha todos os campos")
        }
        
      } catch (err:any) {
        setError(true)
        console.log(err.message)
      }
    }
    
  return (
    <>
    {error  ?
    
    <div role="alert" className="alert alert-error absolute z-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Error! Task failed successfully.</span> 
    </div>:
    null
  }
    <article className='flex flex-col items-center justify-center'>
    <main className='grid grid-cols-2 grid-rows-2 layoutGridArea gap-5'>
        <Input setFromLang={SetFromLang} langOptions={langOptions} text={text} setText={setText} className="w-2"/>
        <Output translated={translated} targetLang={targetLang} setTargetLang={setTargetLang} langOptions={langOptions} loading={isLoading}/>
        <button onClick={handleTranslation} className='buttonTranslate justify-self-center btn btn-outline btn-primary btn-success'>Traduzir</button>
    </main>
    </article>
    </>
  )
}

export default Translator