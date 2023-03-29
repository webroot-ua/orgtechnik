import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={"Заправка картриджей, ремонт принтеров, " + keywords}></meta>
        <title>Заправка картриджей, ремонт принтеров в Киеве www.orgtechnik.com.ua т.0673753343</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text="Главная" />
        <A href={'/contacts'} text="Contacts" />
        <A href={'/brands'} text="Brands" />
      </div>
      <div>
        {children}
      </div>

    </>
  );
};

export default MainContainer;