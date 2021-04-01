import { LitElement, html } from 'lit-element';
import { ItemListStyles } from '../styles/items-list-style';
import './card-item';
import './gnr-paraph';

export class ItemsList extends LitElement {

    static get properties() {
        return {
            dataList: {
                type: Array,
            }
        }
    }

    static get styles() {
        return [ItemListStyles];
    }

    constructor() {
        super();
        this.dataList = [];
    }

    render() {
        const conditional = this.dataList.length
        ? html`
        <ul class="list">
            ${this.dataList.map(item => html`<card-item .dataItem=${item}></card-item>`)}
        </ul>`
        : html`<gnr-paraph text='...Loading'></gnr-paraph>`;

        return html`${conditional}`
    }
}

customElements.define('items-list', ItemsList);