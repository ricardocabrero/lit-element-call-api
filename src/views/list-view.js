import { LitElement, html } from 'lit-element';
import '../components/header-title';
import '../components/search-form';
import '../components/items-list';
import '../components/gnr-paraph';
import '../components/items-pagination';

export class ListView extends LitElement {

    static get properties() {
        return {
            data: {
                type: Array,
            },
            dataPerPage: {
                type: Array,
            },
            url: {
                type: String,
            },
            query: {
                type: String,
            },
            emptyArr: {
                type: Boolean,
            },
            itemsPerPage: {
                type: Number,
            },
            currentPage: {
                type: Number,
            }
        }
    }

    constructor() {
        super();
        this.data = [];
        this.dataPage = [];
        this.url = 'https://www.breakingbadapi.com/api/characters';
        this.query = '';
        this.emptyArr = false;
        this.itemsPerPage = 10;
        this.currentPage = 1;
    }

    connectedCallback() {
        super.connectedCallback();

        this.addEventListener('input-value', this.updateQuery);
        this.addEventListener('update-page', this.handlePagination);
        this.addEventListener('next-page', this.handleNext);
        this.addEventListener('prev-page', this.handlePrev);
        this.callApi();
    }

    callApi() {
        fetch(`${this.url}${this.query}`)
            .then(res => res.json())
            .then(data => {
                 this.data = data;
                 this.dataPerPage();
                 this.emptyArr = this.noResults(this.data.length);
            })
            .catch(e => {
                this.emptyArr = true;
            })
    }

    updateQuery(param) {
        const query = `${param.detail}`;
        this.query = `?name=${query}`
        this.currentPage = 1;
        this.callApi();
    }

    dataPerPage() {
        const lastElement = this.currentPage * this.itemsPerPage;
        const firstElement = lastElement - this.itemsPerPage;
        this.dataPage = this.data.slice(firstElement, lastElement);
    }

    handlePagination({detail}) {
        if(this.currentPage === detail) {
            return;
        }

        this.currentPage = detail;
        this.dataPerPage();
    }

    handleNext() {
        this.currentPage += 1;
        this.dataPerPage();
    }

    handlePrev() {
        this.currentPage -= 1;
        this.dataPerPage();
    }

    noResults(arrLength) {
        return arrLength === 0;
    }
    
    render() { 

        const conditionalRender = this.emptyArr
        ? html `<gnr-paraph text='No results found'></gnr-paraph>`
        : html `<items-pagination 
                currentPage=${this.currentPage}
                totalItems=${this.data.length}></items-pagination>
                <items-list .dataList=${this.dataPage}></items-list>`;

        return html`
        <header-title></header-title>
        <search-form></search-form>
        ${conditionalRender}
        `
    }
}

customElements.define('list-view', ListView);