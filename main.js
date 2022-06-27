const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let th;
let t;
let currentIndex = 1;

function next() {
    clearInterval(t);
    document.getElementById("hinhslide").src = "./assets/hinh/banner/" + currentIndex + ".jpg";
    currentIndex++;
    if (currentIndex == 5) {
        currentIndex = 1;
    }
    t = setInterval("next()", 3000);
}
function back() {
    clearInterval(t);
    if (currentIndex > 1) {
        currentIndex--;
        document.getElementById("hinhslide").src = "./assets/hinh/banner/" + currentIndex + ".jpg";
    }
    else {
        currentIndex = 4;
        document.getElementById("hinhslide").src = "./assets/hinh/banner/" + currentIndex + ".jpg";
    }
    t = setInterval("next()", 3000);
}
t = setInterval("next()", 3000);




const tabs = $$(".tab-item");
const lists = $$(".tab-list");

const tabActive = $(".tab-item.active");
tabs.forEach((tab, index) => {
    const list = lists[index];

    tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-list.active").classList.remove("active");

        this.classList.add("active");
        list.classList.add("active");
    };
});
