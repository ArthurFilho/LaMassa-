import styled from "styled-components";

import Banner from "../assets/banner.jpg"

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
    font-family: 'Nunito', sans-serif;
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
    }
    }   
`

export const BannerScroll = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 900px;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 300px;
    }
`