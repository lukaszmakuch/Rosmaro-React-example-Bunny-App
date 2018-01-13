import React from 'react';

export default {

  go: () => ({arrow: 'fed the bunny'}),

  render: ({thisModel}) => <div>
    <p>
      <span role="img" aria-label="A full bunny">🐰</span> 
      <span role="img" aria-label="Fireworks">🎆</span>
      The bunny is full. You can go.
    </p>
    <input
      type="button"
      value="Go!"
      onClick={() => thisModel.go()}
      />
  </div>

};