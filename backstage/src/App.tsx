import { useEffect } from "react"
import { Header, Nav } from "./components/common"
import init, { encrypt } from "../wasm-lib/pkg/wasm_lib"

const App = () => {
  useEffect(() => {
    console.log("Loading wasm")
    init().then(() => {
      console.log(encrypt("abcd"))
    })
  }, [])
  return (
    <div>
      <Header />
      <Nav />
    </div>
  )
}

export default App