import { useState } from 'react'
import Input from './Input/Input';
import Output from './Output/Output';


const langOptions = new Map([
    ['Alemão', 'DE'],
    ['Inglês', 'EN'],
    ['Espanhol', 'ES'],
    ['Francês', 'FR'],
    ['Italiano', 'IT'],
    ['Japonês', 'JA'],
    ['Coreano', 'KO'],
    ['Holandês', 'NL'],
    ['Polonês', 'PL'],
    ['Português', 'PT-BR'],
    ['Russo', 'RU'],
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
    const [incomplete, setIncomplete] = useState(false)
 
    const handleTranslation = async ()=>{
      try {
        if(fromLang && targetLang && text){
          setTranslated("")
          setError(false)
          setIsLoading(true)
          const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${langOptions.get(fromLang)}|${langOptions.get(targetLang)}`)
          const result = await response.json()
          setIsLoading(false)
          setTranslated(result.responseData.translatedText)
        } else {
          setIncomplete(true)
          setTimeout(()=>{
            setIncomplete(false)
          }, 2000)
        }
        
      } catch (err:any) {
        setError(true)
        setTimeout(()=>{
          setError(false)
        }, 2000)
        console.log(err.message)
      }
    }
    
  return (
    <>
    {error  &&
    <div role="alert" className="alert alert-error absolute z-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Ocorreu um erro!</span> 
    </div>
  }
  {incomplete && 
  <div role="alert" className="alert alert-warning absolute z-10">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>Preencha todos os campos!</span>
</div>
  }
    <article className='flex flex-col items-center sm:justify-center my-16 sm:my-0'>
    <main className='md:grid md:grid-cols-2 md:grid-rows-2 layoutGridArea gap-x-5 sm:flex sm:flex-wrap sm:flex-col sm:justify-center'>
        <Input setFromLang={SetFromLang} langOptions={langOptions} text={text} setText={setText} className="w-2"/>
        <Output translated={translated} targetLang={targetLang} setTargetLang={setTargetLang} langOptions={langOptions} loading={isLoading}/>
        <button onClick={handleTranslation} className='buttonTranslate justify-self-center btn btn-outline btn-primary btn-success sm:m-auto'>Traduzir</button>
    </main>
    </article>
    </>
  )
}

export default Translator