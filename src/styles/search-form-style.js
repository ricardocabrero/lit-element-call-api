import { css } from 'lit-element';

export const SearchFormStyles = css`
    .form, .form *, 
    .form *::after, 
    .form *:before {
        box-sizing: border-box;
    }
    .form {
        width: 240px;
        margin: 25px auto;
        height: 25px;
        border-radius: 5px;
        box-shadow: 0 0 5px #03210e;
    }
    .form form, .form input, .form button {
        height: 100%;
    }
    .form form {
        display: flex;
    }
    .form input {
        outline: none;
        padding: 4px 7px;
        width: 180px;
        border: none;
        font-size: 16px;
        border-radius: 5px 0 0 5px;
    }
    .form button {
        width: 60px;
        border: none;
        -webkit-appearance: none;
        border-radius: 0 5px 5px 0;
        outline: none;
        cursor: pointer;
        background: #000;
        color: #fff;
        font-size: 14px;
    }
    @media(max-width: 550px) {
        .form input {
            width: 170px;
        }
        .form button {
            width: 70px;
        }
    }
`