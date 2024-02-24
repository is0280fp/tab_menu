const tabs = document.querySelector(".tabs")
const tabList = Array.from(tabs.children)
const contents = document.querySelector(".contents")
const contentsList = Array.from(contents.children)
let targetIndex = 0

tabs.addEventListener("click", (e) => {
    tabList[targetIndex].classList.remove("tabIsActive")
    contentsList[targetIndex].classList.remove("contentIsActive")
    targetIndex = tabList.indexOf(e.target)
    tabList[targetIndex].classList.add("tabIsActive")
    contentsList[targetIndex].classList.add("contentIsActive")
})