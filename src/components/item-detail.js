import { LitElement, html } from 'lit-element';
import { ItemDetailStyles } from '../styles/item-detail-style';

export class ItemDetail extends LitElement {

    static get properties() {
        return {
            data: {
                type: Object,
            }
        }
    }

    static get styles() {
        return [ItemDetailStyles];
    }

    constructor() {
        super();
        this.data = {};
    }

    handleView() {
        this.dispatchEvent(new CustomEvent('back-btn', {
            composed: true,
            bubbles: true,
        }))
    }

    render() {

        const { char_id, name, nickname, img, status, birthday, occupation } = this.data;
        
        return html`
        <div class="back-btn">
            <button @click=${this.handleView}>Back to home</button>
            <img src='./src/img/pngaaa.com-1306328.png' alt='hero'>
        </div>
        <div class="detail" id=${char_id}>
            <div class="img">
                <img src=${img} alt=${name}>
            </div>
            <div class="body">
                <p>
                    <strong>Name:</strong> ${name}
                </p>
                <p>
                    <strong>Nickname:</strong> ${nickname}
                </p>
                <p>
                    <strong>Birthday:</strong> ${birthday}
                </p>
                <p>
                    <strong>Status:</strong> ${status}
                </p>
                <p>
                    <span>
                        <strong>Professions:</strong>
                    </span>
                    ${occupation.map(item => html`&nbsp;<span>${item}</span>,`)}
                </p>
            </div>
        </div>
        `
    }
}

customElements.define('item-detail', ItemDetail);