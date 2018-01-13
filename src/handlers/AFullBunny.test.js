import React from 'react';
import AFullBunny from './AFullBunny';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('AFullBunny', () => {
  let wrapper, thisModel;
  beforeEach(() => {
    thisModel = {
      go: sinon.spy(),
    };
    wrapper = shallow(AFullBunny.render({thisModel}));
  })

  it('renders a "Go!" button', () => {
    expect(wrapper.find('input[type="button"][value="Go!"]').length).toEqual(1);
  });

  it('calls .go when "Go!" is clicked', () => {
    wrapper.find('input[value="Go!"]').simulate('click');
    expect(thisModel.go.called).toBeTruthy();
  });

  it('simply follows an arrow when .go is called', () => {
    expect(AFullBunny.go()).toEqual({arrow: 'fed the bunny'});
  });

});
