import { LitElement, html } from 'lit-element';
import { CardItemStyles } from '../styles/card-item-style';

export class CardItem extends LitElement {

    static get properties() {
        return {
            dataItem: {
                type: Object,
            }
        }
    }

    static get styles() {
        return [CardItemStyles];
    }

    constructor() {
        super();
        this.dataItem = {};
    }

    handleClick({target}) {
        const { id } = target;
        
        this.dispatchEvent(new CustomEvent('view-detail-evt', {
            composed: true,
            bubbles: true,
            detail: {
                id
            }
        }))
    }

    render() {

        const { char_id, name, nickname, birthday, status, occupation, img } = this.dataItem;

        return html`
        <li class="card" id=${char_id}>
            <div class="image">
                <img src=${img} alt=${name}>
                <p>${nickname}</p>
            </div>
            <div class="body">
                <div class="header">
                    <p class="name">${name}</p>
                    <p class="birthday">${birthday}</p>
                    <p class="status">${status}</p>
                </div>
                <div class="main">
                    <p>Profession: ${occupation}</p>
                </div>
                <button 
                @click=${this.handleClick}
                id=${char_id}>Detail</button>
            </div>
        </li>
        `
    }
}

customElements.define('card-item', CardItem);