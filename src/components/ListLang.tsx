
type ListLangProps ={
    langOptions:Map<string, string>,
}

const ListLang = ({langOptions}:ListLangProps) => {
  return (
    <datalist id="fromLang">
        {Array.from(langOptions).map(([el, code])=>(
          <option value={el} key={code}>{el}</option>
        ))}
      </datalist>
  )
}

export default ListLang