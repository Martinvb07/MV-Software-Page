import React from 'react'
import Header from '../components/Header.jsx'
import Products from '../components/Products/Products.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'
import { products } from '../models/data.js'

const ProductsPage = ({ scrolled }) => {
  return (
    <div className="app">
      <Header scrolled={scrolled} activeSection="productos" />
      <main>
        <Products products={products} />
      </main>
      <CTA />
      <Footer />
    </div>
  )
}

export default ProductsPage
