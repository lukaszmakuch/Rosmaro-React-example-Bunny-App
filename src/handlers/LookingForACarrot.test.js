import React from 'react';
import LookingForACarrot from './LookingForACarrot';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('LookingForACarrot', () => {
  let wrapper, thisModel;
  beforeEach(() => {
    thisModel = {
      lookForACarrot: sinon.spy(),
    };
    wrapper = shallow(LookingForACarrot.render({thisModel}));
  })

  it('calls .lookForACarrot when "Look for a carrot" is clicked', () => {
    wrapper
      .find('input[value="Look for a carrot"]')
      .simulate('click');
    expect(thisModel.lookForACarrot.called).toBeTruthy();
  });

  it('simply follows an arrow when .lookForACarrot is called', () => {
    expect(LookingForACarrot.lookForACarrot()).toEqual({arrow: 'found a carrot'});
  });

});
