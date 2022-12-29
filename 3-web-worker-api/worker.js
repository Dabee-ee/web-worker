onmessage = async function (e) {
  console.log("I received message from browser");
  console.log(e.data);
  const result = await fetch("http://localhost:3000/").then((r) => r.text());
  postMessage(result);
};
