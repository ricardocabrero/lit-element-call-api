import { LitElement, html } from 'lit-element';
import { HeaderTitleStyles } from '../styles/header-title-style';

export class HeaderTitle extends LitElement {

    static get styles() {
        return [HeaderTitleStyles];
    }

    firstUpdated() {
        const img = this.shadowRoot.querySelector('img');
        img.addEventListener('click', () => {
            window.location.reload();
        });
    }

    render() {
        return html`
        <header class="header">
            <img src='./src/img/pngaaa.com-1306328.png' alt='hero'>
        </header>
        `
    }
}

customElements.define('header-title', HeaderTitle);