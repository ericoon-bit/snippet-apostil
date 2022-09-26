import { useEffect } from "react"
import { Header } from "./components/common"
import init, { complex } from "../wasm-lib/pkg/wasm_lib"

const App = () => {
  useEffect(() => {
    console.log("Loading wasm")
    init().then(() => {
      console.log(complex())
    })
  }, [])
  return (
    <div>
      <Header />
    </div>
  )
}

export default App