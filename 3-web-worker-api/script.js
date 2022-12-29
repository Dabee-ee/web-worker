const getListWorker = new Worker("worker.js");

getListWorker.postMessage("getList");

getListWorker.onmessage = function (e) {
  console.log("I received message from worker");
  console.log(e.data);
  getListWorker.terminate();
};
