import { html, LitElement } from 'lit-element';
import { GnrParaphStyles } from '../styles/gnr-paraph-style';

export class GnrParaph extends LitElement {

    static get properties() {
        return {
            text: {
                type: String,
            }
        }
    }

    static get styles() {
        return [GnrParaphStyles];
    }

    render() {
        return html`
        <p class="center">${this.text}</p>
        `
    }
}

customElements.define('gnr-paraph', GnrParaph);