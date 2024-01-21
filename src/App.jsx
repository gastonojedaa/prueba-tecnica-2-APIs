import React, { useEffect, useState } from 'react'
import './App.css'

const RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'
export const App = () => {
  const [fact, setfact] = useState()
  const [image, setImage] = useState()

  // para recuperar el fact nuevo al recargar pagina
  useEffect(() => {
    fetch(RANDOM_FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setfact(fact)
      })
  }, [])

  // para recuperar la imagen al recargar pagina
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 5).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        console.log(response)
        setImage(`https://cataas.com/cat/${_id}/says/${threeFirstWords}?fontSize=20&fontColor=white`)
      })
  }, [fact])

  return (
    <main>
      <h1>Facts sobre gatos</h1>
      {/* <section>
        {fact && <p>{fact}</p>}
        {image && <img src={image} alt={`image extracted using the three first words from ${fact}`} />}
      </section> */}
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt={`image extracted using the three first words from ${fact}`} />}
    </main>
  )
}
export default App
