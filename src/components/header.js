import React from "react"

const Header = ({children}) => (
  <header className="site-header">
    <meta name="Yandex meta" content="Vidal cfv" />
    {children}
  </header>
)

export default Header