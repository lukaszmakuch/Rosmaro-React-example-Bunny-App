import React from 'react';
import IsABunnyOwner from './IsABunnyOwner';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('IsABunnyOwner', () => {
  let wrapper, thisModel;
  beforeEach(() => {
    thisModel = {
      hasABunny: sinon.spy(),
      hasNoBunny: sinon.spy()
    };
    wrapper = shallow(IsABunnyOwner.render({thisModel}));
  })

  it('renders two buttons', () => {
    expect(wrapper.find('input[type="button"]').length).toEqual(2);
  });

  it('calls .hasABunny when "Yes, I have a bunny!" is clicked', () => {
    wrapper.find('input[value="Yes, I have a bunny!"]').simulate('click');
    expect(thisModel.hasABunny.called).toBeTruthy();
  });

  it('calls .hasNoBunny when "No, I don\'t have a bunny." is clicked', () => {
    wrapper.find('input[value="No, I don\'t have a bunny."]').simulate('click');
    expect(thisModel.hasNoBunny.called).toBeTruthy();
  });

  it('simply follows an arrow when .hasNoBunny is called', () => {
    expect(IsABunnyOwner.hasNoBunny()).toEqual({arrow: 'has no bunny'});
  });

  it('simply follows an arrow when .hasABunny is called', () => {
    expect(IsABunnyOwner.hasABunny()).toEqual({arrow: 'has a bunny'});
  });

});
