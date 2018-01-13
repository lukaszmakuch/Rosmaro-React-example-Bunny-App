import React from 'react';
import EnteringTheName from './EnteringTheName';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('EnteringTheName', () => {
  const initCtx = {name: 'Joh', another: 123};
  let wrapper, thisModel;
  beforeEach(() => {
    thisModel = {
      typeName: sinon.spy(),
      finishEnteringTheName: sinon.spy(),
    };
    wrapper = shallow(EnteringTheName.render({thisModel, ctx: initCtx}));
  })

  it('renders a text field and a button', () => {
    const field = wrapper.find('input[type="text"]');
    expect(field.length).toEqual(1);
    expect(field.props().value).toEqual('Joh');
    expect(wrapper.find('input[type="button"][value="Done"]').length).toEqual(1);
  });

  it('calls .typeName when the name is typed', () => {
    wrapper
      .find('input[type="text"]')
      .simulate('change', {target: {value: 'John'}});
    expect(thisModel.typeName.calledWith({name: 'John'})).toBeTruthy();
  });

  it('calls .finishEnteringTheName when "Done" is clicked', () => {
    wrapper
      .find('input[value="Done"]')
      .simulate('click');
    expect(thisModel.finishEnteringTheName.called).toBeTruthy();
  });

  it('simply follows an arrow when .finishEnteringTheName is called', () => {
    expect(EnteringTheName.finishEnteringTheName()).toEqual({arrow: 'done'});
  });

  it('updates the name when .typeName is called', () => {
    expect(EnteringTheName.typeName({ctx: initCtx, name: 'John'})).toEqual({
      arrow: 'typed',
      ctx: {name: 'John', another: 123}
    });
  });

});
