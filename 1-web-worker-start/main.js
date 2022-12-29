// 참고 : https://tech.kakao.com/2021/09/02/web-worker/

const worker = new Worker("worker.js");

worker.postMessage("hello");

worker.onmessage = (e) => {
  const { data } = e;
  console.log("I received message from worker");
  console.log(data);
  worker.terminate();
};
