let timer = null;
self.onmessage = function (e) {
  if (e.data === "start") {
    const now = new Date();
    postMessage(now.toString());
    if (!timer) {
      timer = setInterval(() => {
        const now = new Date();
        postMessage(now.toString());
      }, 1000);
    }
  } else if (e.data === "stop") {
    clearInterval(timer);
    timer = null;
  }
};
