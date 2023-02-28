import { GlobalStyle } from "./styles/global";
import { BannerPizza, Banners, BannerScroll, BannerVariant, DescriptionLaMassa, Footer, MainContainer, WhereFind } from "./styles/styles";

import Pizza from "../src/assets/pizzaAbout.png"
import PizzaWhereFind from "../src/assets/pizzaWhereFind.png"

export function App() {
  
  return (
    <MainContainer>
      <BannerPizza>
        <h1>La Massa</h1>
        <h2>PIZZARIA E RESTAURANTE</h2>
      </BannerPizza>
      <DescriptionLaMassa>
      <div>
      <p>
      A palavra que define a La Massa <br />
      é: <strong>OPORTUNIDADE</strong>.
      </p>

      <p>
      A La Massa surge quando um dos
      seus donos que trabalhava como
      delivery vê uma banca de um senhor
      com pizzas pré cozidas e pizzas
      sendo entregues a todo vapor, viu
      ali entao um oportunidade para
      desenvolver seu empreendorismo.
      </p>

      <p>
      Ao lembrar de seu amigo, hoje
      seu socio na La Massa, bom cozinheiro, 
      resolve convida-lo para
      criar a La Massa, com o foco de
      da a oportunidade as pessoas
      de desfrutem de boas pizzas e
      massas no conforto de casa.
      </p>
      </div>

      <img src={Pizza} alt="" />
      </DescriptionLaMassa>

      <BannerScroll>
        <Banners variant="primary" variantColor="ColorPrimary">
          LA MASSA
        </Banners>

        <Banners variant="secondary" variantColor="ColorSecondary">
          LA MASSA
        </Banners>

        <Banners variant="tertiary" variantColor="ColorPrimary">
          LA MASSA
        </Banners>
      </BannerScroll>

      <WhereFind>
        <img src={PizzaWhereFind} width={500} alt="" />

        <div>
          <h1>Ficou em dúvida de onde pode nós encontrar?</h1>
          <h2>Por enquanto estamos trabalhando apenas com delivery </h2> 
          <p> cliquei aqui em baixo e compre para chegar no conforto de sua casa! </p>

          <button> Clique aqui para acessar </button>
        </div>
      </WhereFind>

      <Footer>
        <h2>Funcionamento no Ifood <a href="#">clique aqui</a></h2>
        <p> © 2023 La Massa. Todos os direitos reservados.</p>
        <p>Contate-me: +55 79 8831-5124</p>
        <p>Horários de funcionamento: <strong>Sextas e sábados, 18H as 00:00.</strong></p>
      </Footer>

      <GlobalStyle />
    </MainContainer>
  )
}

