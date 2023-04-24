import Card from "./components/Card"
import Header from "./components/Header"
import './App.css'
import Photo from "./components/Photo"
import Bcard from "./components/Business-Card"

function App() {

  return (
    <>
    <Header></Header>
    <main>
      <Card/>
      <Photo />
    </main>
    <section className="otavio">

      <Bcard/>
    </section>
    </>
  )
}

export default App
