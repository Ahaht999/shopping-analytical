// Simple serverless search that returns mocked product matches or proxies to an external API
exports.handler = async function(event) {
  const q = (event.queryStringParameters && event.queryStringParameters.q) || ''
  // In production, call your search service or DB here.
  const results = [
    { id: 'prod-1', title: 'Wireless Headphones X100', brand: 'Acme', image: '/placeholder.png' },
    { id: 'prod-2', title: 'Wireless Earbuds Pro', brand: 'Acme', image: '/placeholder.png' }
  ].filter(p => q.length === 0 || p.title.toLowerCase().includes(q.toLowerCase()))

  return { statusCode: 200, body: JSON.stringify({ data: results }) }
}
