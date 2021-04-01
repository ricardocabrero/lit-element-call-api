import { LitElement, html } from 'lit-element';
import { SearchFormStyles } from '../styles/search-form-style';

export class SearchForm extends LitElement {

    static get properties() {
        return {
            value: {
                type: String,
            }
        }
    }

    static get styles() {
        return [SearchFormStyles];
    }

    constructor() {
        super();
        this.value = '';
    }

    handleChange({target}) {
        this.value = target.value;
    }

    handleSubmit(e) {
        e.preventDefault();

        if(!this.value.trim()) {
            return;
        }

        this.dispatchEvent(new CustomEvent('input-value', {
            composed: true,
            bubbles: true,
            detail: this.value,
        }));
        
        this.value = '';
    }

    render() {
        return html`
        <div class="form">
            <form @submit=${this.handleSubmit}>
                <input @input=${this.handleChange}
                type="text" .value=${this.value}>
                <button
                type="submit">Search</button>
            </form>
        </div>
        `
    }
}

customElements.define('search-form', SearchForm);