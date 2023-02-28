import styled, { css } from "styled-components";

import Banner from "../assets/banner.jpg"

export type BannerVariant = "primary" | "secondary" | "tertiary";
export type BannerColorVariant = "ColorPrimary" | "ColorSecondary";

interface BannerProps {
    variant: BannerVariant;
    variantColor: BannerColorVariant;
}

const BannersVariants = {
    primary: 'black',
    secondary: 'orange',
    tertiary: 'white',
    ColorPrimary: 'white',
    ColorSecondary: 'black',
}
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const BannerPizza = styled.div`
    width: 100%;
    height: 850px;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Berkshire Swash', cursive;
    h1 {
        font-size: 60px;
    }

    h2 {
        font: 50px;
    }
`

export const DescriptionLaMassa = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
    margin-left: 90px;
    img {
        left: 600px;
        position: absolute;
        width: 1000px;
        height: 500px;
    }
    div {
        width: 500px;
        text-align: left;
        p {
        margin-bottom: 30px;
        font-size: 30px;
        font-family: 'nunito', sans-serif;
    }
    } 
    @media (max-width: 768px) {
        margin-left: 10px;
        
        img {
            display: none;
        }
    }  
`

export const BannerScroll = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 900px;
`

export const Banners = styled.div<BannerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    font-size: 80px;
    font-family: 'Berkshire Swash', cursive;
    ${props => {
        return css`background-color: ${BannersVariants[props.variant]}`
    }};
    ${props => {
        return css`color: ${BannersVariants[props.variantColor]}`
    }};
    @media (max-width: 768px) {
        font-size: 50px;
    }
`