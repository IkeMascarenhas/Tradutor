const Header = () => {
  return (
        

    <header className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Tradutor</a>
    </div>
    <div className="flex-none">
      <button className="btn btn-square btn-ghost">
      <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
      </button>
    </div>
  </header>
  )
}

export default Header