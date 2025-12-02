// Returns a canonical product with platform listings and price history (mocked data)
exports.handler = async function(event) {
  const productId = event.queryStringParameters && event.queryStringParameters.id || 'prod-1'

  // Mock data — replace with DB or API lookup
  const product = {
    id: productId,
    title: 'Wireless Headphones X100',
    brand: 'Acme',
    images: [ '/placeholder.png' ],
    platforms: [
      {
        id: 'amazon-1', platform: 'amazon', url: 'https://www.amazon.in/dp/EXAMPLE', price_cents: 249990, currency: 'INR', avg_rating: 4.3, review_count: 1245
      },
      {
        id: 'flipkart-1', platform: 'flipkart', url: 'https://www.flipkart.com/example', price_cents: 259900, currency: 'INR', avg_rating: 4.2, review_count: 980
      }
    ],
    price_history: generateMockHistory()
  }

  return { statusCode: 200, body: JSON.stringify({ data: product }) }
}

function generateMockHistory() {
  // returns last 90 days daily price points for 1 platform consolidated
  const points = []
  const today = new Date()
  for (let i = 90; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(today.getDate() - i)
    const ts = d.toISOString().slice(0,10)
    // create a sinusoidal-ish price curve with noise
    const base = 250000
    const variation = Math.round(8000 * Math.sin(i/7) + (Math.random()-0.5)*3000)
    points.push({ date: ts, price_cents: base + variation })
  }
  return points
}
