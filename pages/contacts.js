import MainContainer from "../components/MainContainer"

const Contacts = (props) => {
  return (
    <MainContainer keywords={"контакты"}>
      <div className="container">
        <div className="row">
          <h1>Контактная информация</h1>
          <p>
            Заправка картриджей в Киеве - выезд мастера! *
          </p>

          <p>График 
          работы:<br />
          Понедельник - пятница с 9:00 до 18:00 без перерыва<br />
          Суббота - воскресенье выходной<br />
          тел. 067 375 33 43<br />
          <a href="http://www.orgtechnik.com.ua">
          http://www.orgtechnik.com.ua</a>
          </p>
          <p><a href="../_rus_obukhiv/obukhiv_rus.html">
          Заправка картриджей в Обухове Киевской обл.</a><br />
          тел. 067 375 33 43
          </p>
          <p><a href="../_rus_obukhiv/obukhiv_rus.html">
          Заправка картриджей в г. Мироновка Киевской обл.</a><br />
          тел. 063 784 11 47<br/>
          тел. 096 732 88 77<br />
          </p>
        </div>
      </div>
    </MainContainer>
  )
}

export default Contacts
