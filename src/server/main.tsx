import Koa from 'koa'
import Static from 'koa-static'

import render from './render'

const PORT = 9823
const server = new Koa()
  
server.use(Static('dist'))
  
server.use(async ctx => {
  render(ctx)
})

server.listen(PORT, () => {
  console.log(`server started at ${PORT}`)
})