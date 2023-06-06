import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, StaticRouterProvider } from 'react-router-dom/server'

import Routers from '../client/routers'

export default (ctx) => {
  const html = renderToString(
    <StaticRouter location={ctx.request.url}>
      <Routers />
    </StaticRouter>
  )
  ctx.body = renderFullPage(html)
}
  
function renderFullPage(html) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
        <title>Document</title>
        <script>
          var domEl = document.documentElement, domElWidth = domEl.clientWidth
          domEl.style.fontSize = domElWidth / 7.5 + 'px'
        </script>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `
}