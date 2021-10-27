import NestedLink from "./NestedLink"

const App = () => {
  return (
  <div className="App">
      <nav>
        <ul>
          <li> <a href="/"> link1 </a></li>
          <li> <a href="/"> link2 </a></li>
          <li> 
            <NestedLink />
          </li>
        </ul>
      </nav>
  </div>
  )
}

export default App
