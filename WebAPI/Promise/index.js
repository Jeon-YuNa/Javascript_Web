const a = new Promise((success, fail) => {
  setTimeout(() => {
    success(() => alert("현서 화이팅"));
  }, 3000);
});
a.then((v) => v());
