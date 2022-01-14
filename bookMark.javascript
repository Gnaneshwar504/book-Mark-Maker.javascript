let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");


let bookmarks = [{
    bookmarkId: 0,
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];

let bookmarksCount = bookmarks.length;

function onGettingNameInputError(event) {
    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Reuired*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
}


function onGettingUrlInputError() {
    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
}

function createAndAppendBookmarkSite(newBookmarks) {
    let bookmarksId = "bookmark" + newBookmarks.bookmarkId;

    let bookmarksiteEl = document.createElement("li");
    bookmarksiteEl.classList.add("bookmarks-items-container", "d-flex", "flex-row");
    bookmarksiteEl.id = bookmarksId;
    bookmarksListEl.appendChild(bookmarksiteEl);

    let bookmarksiteContainer = document.createElement("div");
    bookmarksiteContainer.classList.add("book-mark-site-container", "d-flex", "flex-row");
    bookmarksiteEl.appendChild(bookmarksiteContainer);

    let bookmarksSiteHeading = document.createElement("h1");
    bookmarksSiteHeading.classList.add("book-mark-site-head", "mr-auto");
    bookmarksSiteHeading.textContent = newBookmarks.name;
    bookmarksiteContainer.appendChild(bookmarksSiteHeading);

    let anchorEl = document.createElement("a");
    anchorEl.classList.add("btn", "btn-primary", "button");
    anchorEl.href = newBookmarks.url;
    anchorEl.textContent = "Visit";
    anchorEl.target = "_blank";
    bookmarksiteContainer.appendChild(anchorEl);



}
siteNameInputEl.addEventListener("change", function(event) {

});

function onAddBookmarkSite() {
    let siteNameInput = siteNameInputEl.value;
    let siteUrlInput = siteUrlInputEl.value;

    bookmarksCount += 1;
    let newBookmarks = {
        name: siteNameInput,
        url: siteUrlInput,
        bookmarkId: bookmarksCount
    };
    bookmarks.push(newBookmarks);
    createAndAppendBookmarkSite(newBookmarks);
    siteNameInputEl.value = "";
    siteUrlInputEl.value = "";

}

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    onGettingNameInputError();
    onGettingUrlInputError();
    onAddBookmarkSite();
});
