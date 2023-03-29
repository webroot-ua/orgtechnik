import {useRouter} from 'next/router'
import { useState, useEffect } from 'react'
import MainContainer from '../../components/MainContainer'
import styles from '../../styles/brand.module.css'
import data from './brands.json'

export default function Brand({}) {
  const {query} = useRouter()
  const [brands, setBrands] = useState([])
  const [brand, setBrand] = useState([])

  useEffect(() => {
    setBrands(data)
    if (query.id) {
      const filteredBrand = data.filter((brand) => brand.id === parseInt(query.id))[0]
      setBrand(filteredBrand)
    }
  }, [query.id])

console.log('brand ', brand)

let comment="" 
if(brand.name == "Konica Minolta") {
  comment="Цены указаны без	стоимости выезда мастера. Выезд мастера 20 грн. Примечание:*** В стоимость входит заправка картриджа и замена (обнуление, прошивка) чипа, smart card."
}

return (
  <MainContainer>
    <div className='container'>
    {brand ? (
      <div className={styles.brand}>
        <h1>Brand: {brand.name}</h1>
        <h2>Models:</h2>
        <table>
          <thead>
            <tr key={0}>
              <th>Модель аппарата</th>
              <th>Код картриджа</th>
              <th>Цена заправки</th>
              <th>Восстановление</th>
            </tr>
          </thead>
          <tbody>
          {brand && brand.models && brand.models.map((model) => (
            <tr key={model.id}>
              <td>{model.name}</td>
              <td>{model.kod}</td>
              <td>{model.price}</td>
              <td>{model.remanufacturing}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div>Loading...</div>
    )}
      <div className={styles.comment}>Цены указаны без стоимости выезда мастера выезд мастера 30 грн.</div>
      <div className={styles.note}>Примечание: {brand.note}</div>
    </div>
  </MainContainer>
)
}