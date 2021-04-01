import { LitElement, html } from 'lit-element';
import '../components/item-detail';
import '../components/gnr-paraph';

export class DetailView extends LitElement {

    static get properties() {
        return {
            url: {
                type: String,
            },
            data: {
                type: Array,
            },
            id: {
                type: String,
            }
        }
    }

    constructor() {
        super();
        this.url = 'https://www.breakingbadapi.com/api/characters/';
        this.data = [];
    }

    connectedCallback() {
        super.connectedCallback();
        fetch(`${this.url}${this.id}`)
        .then(res => res.json())
        .then(data => this.data = data);
    }

    render() {
        const conditional = this.data.length
        ? html`
        <item-detail .data=${this.data[0]}></item-detail>`
        : html`
        <gnr-paraph text='...Loading'></gnr-paraph>`;

        return html`
            ${conditional}
        `
    }
}

customElements.define('detail-view', DetailView);