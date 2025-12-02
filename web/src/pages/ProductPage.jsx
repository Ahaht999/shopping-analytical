import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PriceChart from '../components/PriceChart'

export default function ProductPage(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(()=>{
    axios.get(`/api/product?id=${encodeURIComponent(id)}`).then(r=>setProduct(r.data.data))
  },[id])

  if(!product) return <div>Loading...</div>
  const best = product.platforms.reduce((a,b)=> a.price_cents < b.price_cents ? a : b)
  return (
    <div>
      <h1>{product.title}</h1>
      <div className="price-cards">
        {product.platforms.map(p=> (
          <div key={p.id} className={`card ${p.id===best.id? 'best':''}`}>
            <div>{p.platform.toUpperCase()}</div>
            <div>₹{(p.price_cents/100).toFixed(2)}</div>
            <a className="btn" href={`/api/affiliate-redirect?asin=B08EXAMPLE&platform_product_id=${p.id}`}>Buy on {p.platform}</a>
          </div>
        ))}
      </div>

      <h3>Price history (last 90 days)</h3>
      <PriceChart data={product.price_history} />

    </div>
  )
}
