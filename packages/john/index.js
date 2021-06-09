const html = `<!doctype html>
<html dir="ltr" lang="en" prefix="og: https://ogp.me/ns#">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>John's One Language 🍇 😎 🤓 🚀 🚀 🚀</title>
    <!-- Facebook Meta Tags -->
    <meta property="og:image" content="https://fuchsia.surf/assets/images/gifs/police-quest.gif">
    <meta property="og:image:type" content="image/gif">
    <meta property="og:image:width" content="360">
    <meta property="og:image:height" content="360">
    <meta property="og:image:alt" content="">
    <meta property="og:title" content="The One Lang Magazine">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://john.onelang.workers.dev">
    <meta property="og:description" content="Police Quest and the Forever One">
    <!-- Twitter Meta Tags -->
    <meta property="twitter:domain" content="john.onelang.workers.dev">
    <meta property="twitter:url" content="https://john.onelang.workers.dev">
    <meta name="twitter:title" content="The One Lang Magazine">
    <meta name="twitter:description" content="Police Quest and the Forever One">
  </head>
  <body>
    <h1>Hello John One!!</h1>
  </body>
</html>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
