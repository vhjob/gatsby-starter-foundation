import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiCheckboxCircleLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <RiCheckboxCircleLine style={{
        fontSize: "128px",
        color: "var(--primary-color)"
      }}/>
      <h1>Ваше сообщение направлено</h1>
      <p>Благодарим за ваше обращение.</p>
      <p><img src="/assets/comanda-1.jpg" alt="Мы готовим ответ." /></p>
      <p> Оно уже нами рассматривается и мы готовим вам ответ.</p> 
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>На главную страницу</Link>
    </div>

  </Layout>
)

export default Thanks