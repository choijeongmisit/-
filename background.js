const imgs = [
  "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg",
];

const ranImage = imgs[Math.floor(Math.random() *imgs.length)]

const bgimg = dc.createElement("img");

// cl.log(bgimg)

bgimg.src = `img/${ranImage}`;

// cl.log(bgimg); //

dc.body.appendChild(bgimg)

bgimg.classList.add('background_img')