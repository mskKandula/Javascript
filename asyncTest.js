let myPromise = new Promise(function (resolve) {
  setTimeout(function () { resolve("Testing"); }, 3000);
});

async function test() {
  let start = Date.now()

  for (let i = 0; i < 20; i++) {

    await myPromise

  }

  console.log("Total time taken:", Date.now() - start, "Milliseconds")
}

test()