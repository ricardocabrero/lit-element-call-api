import { css } from 'lit-element';

export const CardItemStyles = css`
    :host {
        width: 18%;
        margin: 0 1% 25px;
    }

    @media(max-width: 1200px) {
        :host {
            width: 23%;
            margin: 0 1% 25px;
        }  
    }
    @media(max-width: 992px) {
        :host {
            width: 31%;
            margin: 0 1% 25px;
        }  
    }
    @media(max-width: 740px) {
        :host {
            width: 48%;
            margin: 0 1% 25px;
        }  
    }
    .card {
        width: 100%;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 0 0 6px #000;
        background: #fff;
        height: 100%;
        display: flex;
        flex-direction: column;
        transition: transform .2s .1s ease-in-out;
    }
    .card:hover {
        transform: scale(1.1);
        z-index: 1;
        position: relative;
    }
    .image {
        position: relative;
        height: 295px;
        overflow: hidden;
        background: #ccc;
    }
    @media(max-width: 550px) {
        .image {
            height: 210px;
        }  
    }
    .image p {
        position: absolute;
        bottom: 0;
        color: #fff;
        background: rgb(0 0 0 / 35%);
        margin: 0;
        width: 100%;
        padding: 15px 10px;
        box-sizing: border-box;
        letter-spacing: 0.5px;
        font-style: italic;
    }
    .image img {
        width: 100%;
        height: auto;
        display: block;
    }
    .body {
        padding: 15px;
        height: calc( 100% - 295px);
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    @media(max-width: 550px) {
        .body {
            height: calc( 100% - 210px);
            padding: 15px 8px;
        }  
    }
    .body p {
        margin: 5px;
        font-size: 15px;
        word-break: break-all;
    }
    .body .header {
        margin-bottom: 10px;
        height: 50%;
    }
    .body .main {
        height: 50%;
        padding-bottom: 40px;
    }
    .body button {
        position: absolute;
        bottom: 15px;
        width: 80%;
        left: 10%;
        height: 30px;
        border: none;
        border-radius: 4px;
        outline:none;
        cursor:pointer;
    }
    `