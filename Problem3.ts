const jajanBoba = (uang: number, callback: any) => {
  let Boba: number = 5000;
  const promiseBoba = new Promise((resolve, reject) => {
    if (uang > Boba) {
      setTimeout(() => {
        uang = uang - Boba;
        resolve(`Kamu Jajan Boba harga : ${Boba} \nSisa uang kamu adalah : ${uang} \n`);
        callback(uang);
      }, 5000);
    } else {
      reject(`Maaf kamu belum bisa membeli Boba \nSisa uang kamu adalah : ${uang} \n`);
    }
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const jajanSeblak = (uang: number) => {
  let Seblak: number = 8000;
  const promiseSeblak = new Promise((resolve, reject) => {
    if (uang > Seblak) {
      setTimeout(() => {
        resolve(`Kamu Jajan Seblak harga: ${Seblak} \nSisa uang kamu adalah : ${uang - Seblak} \n`);
      }, 9000);
    } else {
      reject(`Maaf kamu belum bisa membeli Seblak \nSisa uang kamu adalah : ${uang}`);
    }
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// jajanBoba(10000, jajanSeblak);
jajanBoba(20000, jajanSeblak);
