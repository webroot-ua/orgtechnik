import MainContainer from "../components/MainContainer";

export default function Error() {
  return(
    <MainContainer keywords={"404 page"}>
      <div className="center">
        <h1>404 page</h1>
        <h2>Страница не найдена!</h2>
      </div>
    </MainContainer>
  )
}