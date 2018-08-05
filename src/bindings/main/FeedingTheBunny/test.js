import React from 'react';
import FeedingTheBunny from '.';
import {mount} from 'enzyme';

describe('FeedingTheBunny', () => {

  it('renders the bunny and carrot controls', () => {
    const wrapper = mount(
      FeedingTheBunny().handler({
        action: {type: 'RENDER'},
        context: {},
        children: {
          TheBunny: () => ({result: {data: <span id="the-bunny" />}, arrows: [], context: {}}),
          CarrotControls: () => ({result: {data: <span id="carrot-controls" />}, arrows: [], context: {}}),
        }
      }).result.data
    );

    expect(wrapper.find('#the-bunny').length).toEqual(1);
    expect(wrapper.find('#carrot-controls').length).toEqual(1);
  });
  
});