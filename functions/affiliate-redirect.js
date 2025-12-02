// Affiliate redirect: build Amazon Associates link server-side and log click (simple example)
const AFFILIATE_TAG = process.env.AMAZON_AFFILIATE_TAG || 'yourtag-21'
exports.handler = async function(event) {
  const params = event.queryStringParameters || {}
  const platform_product_id = params.platform_product_id || ''
  // Resolve platform product (in prod, lookup DB to get ASIN/URL)
  // For demo, we'll redirect to a sample ASIN and append affiliate tag.
  const asin = params.asin || 'B08EXAMPLE'
  const region = params.region || 'in'
  const url = `https://www.amazon.${region}/dp/${asin}/?tag=${AFFILIATE_TAG}`

  // Optionally log the click to an analytics service or DB asynchronously.
  return {
    statusCode: 302,
    headers: { Location: url }
  }
}
