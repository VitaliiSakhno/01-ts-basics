async function getMessage(): Promise<string> {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello from TS");
      }, 1000);
    });
  }
  
  getMessage().then(result => console.log(result));
  