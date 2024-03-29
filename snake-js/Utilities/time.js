import { config } from "../Core/config.js";
import { timerInstance } from "../Core/globalVariables.js";

export function time() {
  function timerLimit(time) {
    setTimeout(() => {
      alert("Time is up!");
      timerInstance.pause();
      timerInstance.reset();
    }, time);
  }

  timerLimit(config.timeLimitValue); // 1 hour time limit
}
