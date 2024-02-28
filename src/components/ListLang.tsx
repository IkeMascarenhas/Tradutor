
type ListLangProps ={
    langOptions:Map<string, string>,
}

const ListLang = ({langOptions}:ListLangProps) => {
  return (
    <datalist id="fromLang" className="dropdown">
        {Array.from(langOptions).map(([el, code])=>(
          <option value={el} key={code} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">{el}</option>
        ))}
      </datalist>
  )
}

export default ListLang