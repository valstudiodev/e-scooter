"use strict"

import { initInputMode } from './initMode'
import { initEffects } from './initEffects'
import { initUtils } from './initUtils'
import { initAnim } from './initAnim'



// ===========================================================================================
// -----------------------------
// ГОЛОВНИЙ ЗАПУСК
// -----------------------------
function initApp() {
   initInputMode()
   initAnim()
   // initDropdowns()
   initEffects()
   // movingElements()
   // formUtils()
   initUtils()
}

if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', initApp);
} else {
   initApp();
}






