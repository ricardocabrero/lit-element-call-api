import { html, fixture, expect, assert } from '@open-wc/testing';
import '../src/views/main-view';

describe('main-view component', () => {

    let el;
  
    beforeEach( async () => {
      el = await fixture(html`<main-view></main-view>`);
    });
  
    it('propertie "handleViews" is "false"', async () => {
      expect(el.handleViews).to.equal(false);
    });

    it('active component is "list-view"', async () => {
      expect(el.shadowRoot.innerHTML).contains('list-view');
    });

    it('active component is detail-view when handleViews propertie is true', async () => {
      el.handleViews = true;
      await el.updateComplete;
      expect(el.shadowRoot.innerHTML).contains('detail-view');
    });
 
});


describe('list-view component', () => {

  let el;

  beforeEach(async () => {
    el = await fixture(html`<list-view></list-view>`);
  });

  it('active component is item-pagination when emptyArr propertie is true', async () => {
    el.emptyArr = true;
    await el.updateComplete;
    expect(el.shadowRoot.innerHTML).contains('gnr-paraph');
  });

  it('check updateQuery method, param name is equal to "param-detail"', async () => {
    const data = {detail: 'param-detail'};
    el.updateQuery(data)
    await el.updateComplete;
    expect(el.query).to.be.equal(`?name=${data.detail}`);
  });

  it('check dataPerPage method, dataPage propertie is typeof Array', async () => {
    el.dataPerPage()
    await el.updateComplete;
    expect(el.dataPage, 'array');
  });

  it('check handlePagination method, currentPage propertie is equal to param.detail', async () => {
    const data = { detail: 2 };
    el.handlePagination(data)
    await el.updateComplete;
    expect(el.currentPage).to.be.equal(data.detail);
  });

  it('check handleNext method, currentPage propertie is equal to currentPage + 1', async () => {
    const current = el.currentPage;
    el.handleNext();
    await el.updateComplete;
    expect(el.currentPage).to.be.equal(current + 1);
  });

  it('check handlePrev method, currentPage propertie is equal to currentPage - 1', async () => {
    const current = el.currentPage;
    el.handlePrev();
    await el.updateComplete;
    expect(el.currentPage).to.be.equal(current - 1);
  });

  it('check noResults method, return "true" if param is zero', async () => {
    const res = el.noResults(0);
    await el.updateComplete;
    expect(res).to.be.equal(true);
  });

});

describe('detail-view component', () => {

  let el;

  beforeEach( async () => {
    el = await fixture(html`<detail-view></detail-view>`);
  });

  it('gnr-paraph is the component showed by default', async () => {
    assert.shadowDom.equal(el, '<gnr-paraph text="...Loading"></gnr-paraph>');
  });

  it('item detail component is showed if "data" has length', async () => {
    el.data = [1];
    await el.updateComplete;
    assert.shadowDom.equal(el, '<item-detail></item-detail>');
  });

});

describe('search-form component', () => {

  let el;

  beforeEach( async () => {
    el = await fixture(html`<search-form></search-form>`);
  });

  it('check handleChange method, propertie value is equal to target value', async () => {
    const target = { value: 'value test' };
    el.handleChange({target});
    await el.updateComplete;
    expect(el.value).to.be.equal(target.value);
  });

  it('check handleSubmit value propertie is clear after submit', async () => {
    el.value = 'test';
    el.handleSubmit(new Event('submit'));
    await el.updateComplete;
    expect(el.value).to.be.equal('');
  });

});

describe('items-pagination component', () => {

  let el;

  beforeEach( async () => {
    el = await fixture(html`<items-pagination></items-pagination>`);
  });

  it('has 2 buttons', async () => {
    const btns = el.shadowRoot.querySelectorAll('button')
    expect(btns.length).to.be.equal(2);
  });

  it('has 12 buttons if totalItems is 62', async() => {
    el.totalItems = 62;

    await el.updateComplete;
    const btns = el.shadowRoot.querySelectorAll('button');
    expect(btns.length).to.be.equal(9);
  });

  it('has 3 buttons if totalItems is "9"', async() => {
    el.totalItems = 9;

    await el.updateComplete;
    const btns = el.shadowRoot.querySelectorAll('button');
    expect(btns.length).to.be.equal(3);
  });

});

describe('items-list component', () => {

  let el;

  beforeEach( async () => {
    el = await fixture(html`<items-list></items-list>`);
  });

  it('list html element has childrens as datalist propertie length', async () => {
    el.dataList = [1,2,3];
    await el.updateComplete;
    const list = el.shadowRoot.querySelectorAll('.list > *');
    expect(list.length).to.be.equal(el.dataList.length);
  });

});


describe('card-item component', () => {

  let el;

  beforeEach( async () => {
    el = await fixture(html`<card-item></card-item>`);
  });

  it('p with className "name" should be the text:"test"', async () => {
    el.dataItem = {
      name: 'test',
    };

    await el.updateComplete;
    const item = el.shadowRoot.querySelector('.name');
    expect(item.textContent).to.be.equal('test');
  });

  it('html dom get properties and display', async () => {
    el.dataItem = {
      char_id: 0,
      name: 'test',
      nickname: 'test',
      birthday: 'test',
      occupation: 'test',
      status: 'test',
      img: 'test',
    };

    const htmlDom = `<li class="card" id=${el.dataItem.char_id}>
        <div class="image">
            <img src=${el.dataItem.img} alt=${el.dataItem.name}>
            <p>${el.dataItem.nickname}</p>
        </div>
        <div class="body">
            <div class="header">
                <p class="name">${el.dataItem.name}</p>
                <p class="birthday">${el.dataItem.birthday}</p>
                <p class="status">${el.dataItem.status}</p>
            </div>
            <div class="main">
                <p>Profession: ${el.dataItem.occupation}</p>
            </div>
            <button 
            id=${el.dataItem.char_id}>Detail</button>
        </div>
    </li>`;

    await el.updateComplete;
    assert.shadowDom.equal(el, htmlDom);
  });

});

  