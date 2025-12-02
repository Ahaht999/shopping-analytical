import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function SearchPage(){
  const [q,setQ] = useState('')
  const [results,setResults] = useState([])
  async function doSearch(e){
    e.preventDefault()
    const res = await axios.get(`/api/search?q=${encodeURIComponent(q)}`)
    setResults(res.data.data)
  }
  return (
    <div>
      <form onSubmit={doSearch} className="search-form">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products..." />
        <button>Search</button>
      </form>
      <ul className="results">
        {results.map(r=> (
          <li key={r.id}><Link to={`/product/${r.id}`}>{r.title} — <small>{r.brand}</small></Link></li>
        ))}
      </ul>
    </div>
  )
}
