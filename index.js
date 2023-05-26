function showMoreInfo() {
    var info = document.getElementById("more-info");
    var button = document.getElementById("show-more-button");

    if (info.style.display === "none") {
      info.style.display = "block";
      button.innerHTML = "Hide Info";
    } else {
      info.style.display = "none";
      button.innerHTML = "Show Info";
    }
  }