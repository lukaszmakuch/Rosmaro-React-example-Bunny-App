import React from 'react';
import FeedingTheBunny from './FeedingTheBunny';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('FeedingTheBunny', () => {

  it('renders the bunny and carrot controls', () => {
    const wrapper = shallow(FeedingTheBunny.afterRender({
      res: {
        TheBunny: <span id="the-bunny" />,
        CarrotControls: <span id="carrot-controls" />,
      }
    }));
    expect(wrapper.find('#the-bunny').length).toEqual(1);
    expect(wrapper.find('#carrot-controls').length).toEqual(1);
  });

});