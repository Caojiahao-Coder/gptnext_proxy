export default eventHandler(async (event) => {
  const appid = process.env.VUE_APP_OPENWEATHER_APPID
  const address = `https://api.openweathermap.org/data/3.0/onecall?${event.path.split("?")[1].toString().trim()}&appid=${appid}`
  const response = await fetch(address, {
    method: "GET"
  })

  const data = await response.json()
  return data
})
