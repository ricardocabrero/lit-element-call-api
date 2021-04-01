import { html, LitElement } from 'lit-element';
import { ItemsPaginationStyles } from '../styles/items-pagination-style';

export class ItemsPagination extends LitElement {

    static get properties() {
        return {
            totalItems: {
                type: Number,
            },
            itemsPerPage: {
                type: Number,
            },
            currentPage: {
                type: Number,
            },
            isActiveClass: {
                type: Boolean,
            },
            completeBtns: {
                type: Boolean,
            }
        }
    }

    static get styles() {
        return [ItemsPaginationStyles];
    }

    constructor() {
        super();
        this.itemsPerPage = 10;
        this.isActiveClass = false;
        this.completeLoad = false;
    }

    handlePagination({target}) {

        const id = parseInt(target.id);

        this.dispatchEvent(new CustomEvent('update-page', {
            composed: true,
            bubbles: true,
            detail: id
        }))
    }

    handleNext() { 
        if(this.isLastBtn()) {
            return;
        }
        this.dispatchEvent(new CustomEvent('next-page', {
            composed: true,
            bubbles: true,
        }))
    }

    isLastBtn() {
        return this.currentPage === Math.ceil(this.totalItems / this.itemsPerPage);
    }

    handlePrev() {
        if(this.isFirstBtn()) {
            return;
        }
        this.dispatchEvent(new CustomEvent('prev-page', {
            composed: true,
            bubbles: true,
        }))
    }

    isFirstBtn() {
        return this.currentPage === 1;
    }

    get template() {

        const classActive = (param) => this.currentPage === param ? 'active' : ''; 
        const numBtns = Math.ceil(this.totalItems / this.itemsPerPage);
        const btns = [];

        for(let i = 0; i < numBtns; i++) {
            btns.push(html`<li>
                <button @click=${this.handlePagination}
                id=${i+1} class=${classActive(i+1)}>${i+1}
                </button></li>`);

                this.completeLoad = true;
        }

        return html`
        <div ?hidden=${!this.completeLoad} class="pagination">
            <button class="controls prev"
            ?disabled=${this.currentPage === 1} 
            @click=${this.handlePrev}>prev</button>
            <ul class="btns">
            ${btns}
            </ul>
            <button class="controls next"
            ?disabled=${this.currentPage === numBtns}
            @click=${this.handleNext}>next</button>
        </div>
        `
    }

    render() {
        return html`
        ${this.template}`
    }
}

customElements.define('items-pagination', ItemsPagination);