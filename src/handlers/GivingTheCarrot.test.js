import React from 'react';
import GivingTheCarrot from './GivingTheCarrot';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('GivingTheCarrot', () => {
  let wrapper, thisModel;
  beforeEach(() => {
    thisModel = {
      giveTheCarrot: sinon.spy(),
    };
    wrapper = shallow(GivingTheCarrot.render({thisModel}));
  })

  it('calls .giveTheCarrot when "Give the carrot" is clicked', () => {
    wrapper
      .find('input[value="Give the carrot"]')
      .simulate('click');
    expect(thisModel.giveTheCarrot.called).toBeTruthy();
  });

  it('simply follows an arrow when .giveTheCarrot is called', () => {
    expect(GivingTheCarrot.giveTheCarrot()).toEqual({arrow: 'gave the carrot'});
  });

});
