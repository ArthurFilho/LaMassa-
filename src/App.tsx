import { GlobalStyle } from "./styles/global";
import { BannerPizza, Banners, BannerScroll, BannerVariant, DescriptionLaMassa, MainContainer } from "./styles/styles";
import Pizza from "../src/assets/pizzaAbout.png"

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
      seu socio na La Massa, bom co-
      zinheiro, resolve convida-lo para
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

        <Banners variant="secondary" variantColor="ColorPrimary">
          LA MASSA
        </Banners>

        <Banners variant="tertiary" variantColor="ColorSecondary">
          LA MASSA
        </Banners>
      </BannerScroll>

      <GlobalStyle />
    </MainContainer>
  )
}

