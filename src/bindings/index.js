import handler0 from './main/EnteringTheName #1/Accepting/index.js';
import handler1 from './main/EnteringTheName #1/index.js';
import handler2 from './main/EnteringTheName #1/Writing/index.js';
import handler3 from './main/EnteringTheName #2/Accepting/index.js';
import handler4 from './main/EnteringTheName #2/index.js';
import handler5 from './main/EnteringTheName #2/Writing/index.js';
import handler6 from './main/EnteringTheName/Accepting/index.js';
import handler7 from './main/EnteringTheName/index.js';
import handler8 from './main/EnteringTheName/Writing/index.js';
import handler9 from './main/FeedingTheBunny/CarrotControls/GivingTheCarrot/index.js';
import handler10 from './main/FeedingTheBunny/CarrotControls/index.js';
import handler11 from './main/FeedingTheBunny/CarrotControls/LookingForACarrot/index.js';
import handler12 from './main/FeedingTheBunny/index.js';
import handler13 from './main/FeedingTheBunny/TheBunny/AFullBunny/index.js';
import handler14 from './main/FeedingTheBunny/TheBunny/AHungryBunny/index.js';
import handler15 from './main/FeedingTheBunny/TheBunny/AnEatingBunny/index.js';
import handler16 from './main/FeedingTheBunny/TheBunny/index.js';
import handler17 from './main/index.js';
import handler18 from './main/IsABunnyOwner/index.js';
import handler19 from './main/Thanks/index.js';
export default opts => ({
    'main:EnteringTheName #1:Accepting': handler0(opts),
    'main:EnteringTheName #1': handler1(opts),
    'main:EnteringTheName #1:Writing': handler2(opts),
    'main:EnteringTheName #2:Accepting': handler3(opts),
    'main:EnteringTheName #2': handler4(opts),
    'main:EnteringTheName #2:Writing': handler5(opts),
    'main:EnteringTheName:Accepting': handler6(opts),
    'main:EnteringTheName': handler7(opts),
    'main:EnteringTheName:Writing': handler8(opts),
    'main:FeedingTheBunny:CarrotControls:GivingTheCarrot': handler9(opts),
    'main:FeedingTheBunny:CarrotControls': handler10(opts),
    'main:FeedingTheBunny:CarrotControls:LookingForACarrot': handler11(opts),
    'main:FeedingTheBunny': handler12(opts),
    'main:FeedingTheBunny:TheBunny:AFullBunny': handler13(opts),
    'main:FeedingTheBunny:TheBunny:AHungryBunny': handler14(opts),
    'main:FeedingTheBunny:TheBunny:AnEatingBunny': handler15(opts),
    'main:FeedingTheBunny:TheBunny': handler16(opts),
    'main': handler17(opts),
    'main:IsABunnyOwner': handler18(opts),
    'main:Thanks': handler19(opts)
});