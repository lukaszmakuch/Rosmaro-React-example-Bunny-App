export default ({utils: {defaultHandler,  initialContextLens}}) => ({

  handler: defaultHandler,

  lens: () => initialContextLens({
    name: 'Unknown person'
  }),
  
});