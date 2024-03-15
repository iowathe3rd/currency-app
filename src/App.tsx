import useCurrencies from "./api/useCurrencies.ts";

function App() {
  const { isLoading, data, error } = useCurrencies('metal')
  console.log(data)
  console.log(error)
  console.log(isLoading)
  // render i
  return <div>hello</div>
}

export default App
