const lottery = (num: number): Promise<string> => {
  const random = Math.floor(Math.random() * 1000) + 1;
  console.log("Undian Lotre dimulai......... 🤑");
  console.log(`Sedang Mengundi nomor anda....... 🎲 \n`);

  return new Promise((resolve, reject) => {
    if (random === num) {
      setTimeout(() => {
        resolve("Selamat anda mendapatkan hadiah utama berupa mobil 🚓 😍");
      }, 10000);
    } else {
      setTimeout(() => {
        reject("Maaf anda Kurang Beruntung 😤");
      }, 10000);
    }
  });
};

lottery(5)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Undian lotre telah berakhir... 🤗");
  });
