import { css } from 'lit-element';

export const ItemDetailStyles = css`
    .detail {
        display: flex;
        width: 100%;
        max-width: 650px;
        min-height: 390px;
        margin: 25px auto 40px;
        justify-content: space-around;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 0 4px #000;
    }
    @media(max-width: 700px){
        .detail {
            max-width: none;
            margin: 30px 15px;
            width: calc(100% - 30px);
        }
    }
    @media(max-width: 550px){
        .detail {
            flex-direction: column;
        }
    }
    .detail .img {
        width: 45%;
        background: rgb(204, 204, 204);
    }
    .detail img {
        width: 100%;
        height: auto;
        display: block;
    }
    .body {
        width: 55%;
        padding: 20px;
        box-sizing: border-box;
    }
    @media(max-width: 550px){
        .detail .img, .body {
            width: 100%;
            min-height: 0;
        }
    }
    .back-btn {
        margin: 20px auto 0px;
        width: 100%;
        max-width: 650px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
    @media(max-width: 700px){
        .back-btn {
            max-width: none;
            padding: 0 15px;
        }
    }
    .back-btn  img {
        width: 100%;
        height: auto;
        display: block;
        max-width: 135px;
        align-self: center;
    }
    .back-btn button {
        height: 25px;
        margin-top: 25px;
        border: none;
        border-radius: 5px;
        line-height: 25px;
        padding: 0 10px;
        box-shadow: 0 0 5px #666;
        background: #000;
        color: #fff;
        outline: none;
        cursor: pointer;
    }`