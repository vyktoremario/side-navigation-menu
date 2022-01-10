const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sideBar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list_item.active");

dark.addEventListener("click", () => {
  sideBar.className = "sidebar";
  activeListItem.className = "list_item active";
});

light.addEventListener("click", () => {
  sideBar.className = "sidebar light";
  activeListItem.className = "list_item active list";
});

night.addEventListener("click", () => {
  sideBar.className = "sidebar night";
  activeListItem.className = "list_item active night";
});
