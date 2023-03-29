import { useState } from "react"

const Brother = (props) => {
  const [models, setModels] = useState([
    {id: 1, name: ' Brother HL-L2300DR', kod: ' TN-2335 / TN-2375', price: ' 160 / 270 грн.', remanufacturing: ' Please call'},
    {id: 2, name: ' Brother HL-L2340DWR', kod: ' TN-2335 / TN-2375', price: ' 160 / 270 грн.', remanufacturing: ' Please call'},
    {id: 3, name: ' Brother HL-L2360DNR', kod: ' TN-2335 / TN-2375', price: ' 160 / 270 грн..', remanufacturing: ' Please call'},
    {id: 4, name: ' Brother HL-L2365DWR', kod: ' TN-2335 / TN-2375', price: ' 160 / 270 грн.', remanufacturing: ' Please call'},
    {id: 5, name: ' Brother HL-1030', kod: ' TN-6300 / TN-6600', price: ' 270 / 490 грн.', remanufacturing: ' Please call'}
  ])
  return (
    <div>
      <h1>Заправка картриджей, восстановление картриджей принтеров и мфу brother</h1>
      <ul>
        {models.map(model => (
          <li key={model.id}>
            {model.name} | {model.kod} | {model.price} | {model.remanufacturing} 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Brother
