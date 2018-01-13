import React from 'react';

export default {

  hasABunny: () => ({arrow: 'has a bunny'}),

  hasNoBunny: () => ({arrow: 'has no bunny'}),

  render: ({thisModel}) => <div>
    <p>Do you have a bunny?</p>
    <input
      type="button"
      value="Yes, I have a bunny!"
      onClick={() => thisModel.hasABunny()}
      />
    <input
      type="button"
      value="No, I don't have a bunny."
      onClick={() => thisModel.hasNoBunny()}
      />
  </div>

};