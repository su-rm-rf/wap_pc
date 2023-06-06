import React from 'react'

import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <nav>
        <Link to="/">首页</Link>
        <Link to="/category">分类</Link>
        <Link to="/cart">购物车</Link>
        <Link to="/mine">我的</Link>
      </nav>
    </div>
  )
}