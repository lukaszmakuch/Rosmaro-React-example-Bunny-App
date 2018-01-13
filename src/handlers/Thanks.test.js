import React from 'react';
import Thanks from './Thanks';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Thanks', () => {
  const ctx = {name: 'John'};
  let wrapper, thisModel;
  beforeEach(() => {
    thisModel = {
      repeat: sinon.spy(),
    };
    wrapper = shallow(Thanks.render({thisModel, ctx}));
  })

  it('renders Thanks, name', () => {
    expect(wrapper.text()).toContain('Thanks, John');
  });

  it('calls .repeat when "One more time!" is clicked', () => {
    wrapper
      .find('input[value="One more time!"]')
      .simulate('click');
    expect(thisModel.repeat.called).toBeTruthy();
  });

  it('simply follows an arrow when .repeat is called', () => {
    expect(Thanks.repeat()).toEqual({arrow: 'repeated'});
  });

});
