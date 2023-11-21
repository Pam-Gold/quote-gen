import './styles/styles.css';

import Header from './components/Header';
import { useState, useEffect } from 'react';



let App = () => {


  let [quote, setQuote] = useState([])

  let [quoteDetail, setQuoteDetail] = useState({
    content: `Life isn't about finding yourself. Life is about creating yourself.`,
    author: ` George Bernard Shaw`
  })

useEffect(()=>{
fetch(`https://api.quotable.io/quotes/random`)
.then(res=>res.json())
.then(data=>setQuote(data[0]))

}, [quoteDetail])

let getQuote = () =>{
  

setQuoteDetail(quote)

// console.log(quote.content)

}


return(
  <main >
    <Header/>
  <div className="quote--container">
    <h1 className="quote--title">“{quoteDetail.content}”</h1>
    <p className="quote--author">― {quoteDetail.author}</p>
    <button className="get--quote" onClick={getQuote}>Get Quote</button>
  </div>
  </main>
)
}

export default App;