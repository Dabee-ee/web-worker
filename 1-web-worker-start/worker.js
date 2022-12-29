self.onmessage = (e) => {
  const { data } = e;
  console.log("I received message from browser");
  console.log(data);
  self.postMessage(data + " world");
};
