export default defineEventHandler(async (event) => {
  const clientid = process.env.VUE_APP_UNSPLASH_CLIENTID
  const address = `https://api.unsplash.com/search/photos?${event.path.split("?")[1].toString().trim()}`
  const response = await fetch(address, {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${clientid}`
    }
  })

  const data = await response.json();
  return data
})
