// let img = ["https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500", "https://source.unsplash.com/500x500",];

// document.getElementById('btn').onclick = function () {
//     document.getElementById('image').style.height = "50vh";
//     document.getElementById('image').src = (img[Math.trunc(Math.random() * img.length)]);
// };

// let home = document.getElementById('home');
// let about = document.getElementById('about');
// let contact = document.getElementById('contact');

// home.addEventListener('click', function () {
//     console.log("clicked on home");
// });
// about.addEventListener('click', function () {
//     console.log("clicked on about");
// });
// contact.addEventListener('click', function () {
//     window.location = "https://www.github.com/jacktheboss220";
// });

// setTimeout(() => {
//     document.getElementById('image').src = "./back.jpg";
//     document.getElementById('image').style.height = "20vh";
// }, 5000);
clr = setInterval(() => {
    console.log("hello");
}, 1000 * 1);
setTimeout(() => {
    clearInterval(clr);
    console.log("cleared");
}, 1000 * 10);