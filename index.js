const shareIcon = document.getElementById("share-icon");
const userShare = document.getElementById("user-share");

shareIcon.addEventListener("click", () => {
  userShare.classList.toggle("article-card__user--share");
});
