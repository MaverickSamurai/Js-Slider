let information = document.querySelectorAll("#last-news .my-container");
let nextBtn = document.querySelectorAll("#last-news .next-btn");
let backBtn = document.querySelectorAll("#last-news .pre-btn");

information.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  backBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});



