//https://nitro.unjs.io/config
export default defineNitroConfig({
  preset: 'vercel',
  routeRules: {
    "/weather/**": {
      cors: true
    }
  }
});
