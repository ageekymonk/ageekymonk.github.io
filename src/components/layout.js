import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (

    <div>
        <Header siteName="/dev/random">
        </Header>

        {children}

        <Footer>

        </Footer>
  </div>
)
