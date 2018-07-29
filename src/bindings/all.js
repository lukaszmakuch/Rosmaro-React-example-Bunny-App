import IsABunnyOwner from './IsABunnyOwner';
import TheBunny from './TheBunny';
import AnEatingBunny from './AnEatingBunny';
import EnteringTheName from './EnteringTheName';
import FeedingTheBunny from './FeedingTheBunny';
import AFullBunny from './AFullBunny';
import GivingTheCarrot from './GivingTheCarrot';
import AHungryBunny from './AHungryBunny';
import LookingForACarrot from './LookingForACarrot';
import main from './main';
import Thanks from './Thanks';
import {defaultHandler} from './utils';

export default (opts) => ({

  "main": main(opts),
  "main:EnteringTheName #1": EnteringTheName(opts),
  "main:EnteringTheName #2": EnteringTheName(opts),
  "main:FeedingTheBunny": FeedingTheBunny(opts),
  "main:FeedingTheBunny:CarrotControls": {handler: defaultHandler},
  "main:FeedingTheBunny:CarrotControls:GivingTheCarrot": GivingTheCarrot(opts),
  "main:FeedingTheBunny:CarrotControls:LookingForACarrot": LookingForACarrot(opts),
  "main:FeedingTheBunny:TheBunny": TheBunny(opts),
  "main:FeedingTheBunny:TheBunny:AFullBunny": AFullBunny(opts),
  "main:FeedingTheBunny:TheBunny:AHungryBunny": AHungryBunny(opts),
  "main:FeedingTheBunny:TheBunny:AnEatingBunny": AnEatingBunny(opts),
  "main:IsABunnyOwner": IsABunnyOwner(opts),
  "main:Thanks": Thanks(opts),

});