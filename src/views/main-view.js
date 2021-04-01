import { LitElement, html } from 'lit-element';
import './list-view';
import './detail-view';

export class MainView extends LitElement {

    static get properties() {
        return {
            handleViews: {
                type: Boolean,
            },
            id: {
                type: String,
            }
        }
    }

    constructor() {
        super();
        this.handleViews = false; // false is list view
        this.id = '';
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('view-detail-evt', this.handleViewDetail);
        this.addEventListener('back-btn', this.handleViewList);
    }

    handleViewDetail({detail}) {
        this.handleViews = true;
        this.id = detail.id;
    }

    handleViewList() {
        this.handleViews = false;
    }

    render() {

        const handleView = !this.handleViews
        ? html` <list-view></list-view>`
        : html` <detail-view id=${this.id}></detail-view>`; 

        return html`
            ${handleView}
        `
    }
}

customElements.define('main-view', MainView);