import { css } from 'lit-element';

export const HeaderTitleStyles = css`
    .header {
        display: flex;
        justify-content: center;
        padding-top: 25px;
    }
    .header img {
        width: 100%;
        max-width: 240px;
        cursor: pointer;
        align-self: center;
    }
    @media(max-width: 550px) {
        .header img {
            max-width: 210px;
        }
    }
`