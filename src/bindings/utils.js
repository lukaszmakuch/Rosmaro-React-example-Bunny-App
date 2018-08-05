import {
  callChildren,
  initialValueLens as initialContextLens,
  typeHandler,
  defaultHandler,
  partialReturns,
  sliceLens
} from 'rosmaro-binding-utils';

export {sliceLens, callChildren, defaultHandler};

export {initialContextLens};

export const makeHandler = handlerPlan => partialReturns(typeHandler({defaultHandler})(handlerPlan))