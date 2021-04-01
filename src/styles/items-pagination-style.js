import { css } from 'lit-element';

export const ItemsPaginationStyles = css`
    .pagination {
        display: flex;
        justify-content: center;
    }
    .pagination[hidden] {
        display: none;
    }
    .pagination .controls {
        background: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        border: none;
        height: 25px;
        margin-top: 8px;
        cursor: pointer;
        width: 50px;
        outline: none;
    }

    .pagination .controls:focus {
        outline: 1px dashed #000;
    }

    .pagination .next {
        border-radius: 0 5px 5px 0;
        margin-left: 10px;
    }

    .pagination .prev {
        border-radius: 5px 0 0 5px;
        margin-right: 10px;
    }

    .pagination .controls:disabled {
        cursor: default;
        background: rgba(0, 0, 0, 0.35);
        color: #036e2a;
    }
    
    .pagination .btns {
        display: flex;
        list-style: none;
        justify-content: center;
        margin: 0;
        padding: 8px 0 0;
    }
    .pagination .btns li {
        margin: 0 6px;
    }
    @media(max-width: 550px) {
        .pagination .btns li {
            margin: 0 3px;
        } 
    }
    .pagination .btns button {
        padding: 0;
        margin: 0;
        border: none;
        width: 25px;
        height: 25px;
        text-align: center;
        border-radius: 3px;
        background: #000;
        color: #fff;
        box-shadow: 0 0 4px #3a423a;
        cursor: pointer;
        outline: none;
    }
    .pagination .btns button:focus {
        outline: 1px dashed #000;
    }
    .pagination .btns .active {
        background: #ff9800;
        color: #fff;
        cursor: default;
    }
`