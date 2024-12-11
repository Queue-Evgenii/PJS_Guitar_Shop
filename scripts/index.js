import { toggleHeaderClasslistOnScroll, burgerClickEvent } from "./general/headerEvents.js";
import { scrollUpButtonEvent } from "./general/footerEvents.js";
import { setupButtonAnimation, setupHyperlinkAnimation, setupShakeAnimation } from "./general/animations.js";

toggleHeaderClasslistOnScroll();
burgerClickEvent();
scrollUpButtonEvent();

setupHyperlinkAnimation("._animation-1");
setupButtonAnimation("._animation-2");
setupShakeAnimation("#scroll-up");