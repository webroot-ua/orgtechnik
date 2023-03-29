import React, { useState, useEffect } from 'react'
import Link from "next/link"
import MainContainer from "../components/MainContainer"
import data from './brands/brands.json'

const Brands = (props) => {
  const [brands, setBrands] = useState([])

  console.log('data ', data)

  useEffect(() => {
    setBrands(data)
  }, [])

  console.log('brands.js => brands => ', brands)

  return (
    <MainContainer keywords={"бренды принтеров, производители принтеров"}>
      <div>
        <h1>Brands</h1>
        <ul>
        {brands.map(brand => (
          <li key={brand.id}>
            <Link href={`/brands/${brand.id}`} legacyBehavior>
              <a className="link">
                {brand.name}   
              </a>  
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </MainContainer>
  )
}

export default Brands
