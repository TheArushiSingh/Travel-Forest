function enterSite() {
  // The #landing section is pushed out of the screen:
  $("#landing").css("transform", "translate(-200vw)");
  // The #dimmed-background is set to visible and come in the screen:
  $("#dimmed-background").css("visibility", "visible");
  $("#dimmed-background").css("transform", "translate(0)");
  // The #full-site is displayed:
  $("#full-site").css("visibility", "visible");
  $("#full-site").css("overflow", "visible");
  $("#full-site").css("max-height", "auto");
  $("#above-fold").css("opacity", "1");
  $("#register-side-bar").css("transform", "translate(0)");
}

$("#visible-side").mouseenter(function() { openForm(); });
$("#empty-side").mouseenter(function() { closeForm(); });
$("#form").mouseleave(function() { closeForm(); });

function openForm() {
  $("#register-side-bar").css("transform", "translate(-650px)");
  $("#register-side-bar").css("transition-delay", "0s");
  $("#register-side-bar").css("z-index", "100");
  $("#call-number").css("opacity", "0")
  $("#register").css("opacity", "0")
}

function closeForm() {
  $("#register-side-bar").css("transform", "translate(0)");
  $("#register-side-bar").css("z-index", "0");
  $("#call-number").css("opacity", "1")
  $("#register").css("opacity", "1")
}

// Self-executing function to update the number of users:
(function manageTotalUsers() {
  // A random number of users is generated, then split by a coma.
  let totalUsers = String(getRandom(100000, 200000));
  totalUsers = addComma(totalUsers);

  addToTotalUsers(totalUsers);

  function addToTotalUsers(totalUsers) {
    let numberOfUsers = Number(totalUsers.replace(",", ""))
    numberOfUsers ++;
    numberOfUsers = String(numberOfUsers);
    numberOfUsers = addComma(numberOfUsers);
    $("#total-users").html(numberOfUsers);
    setTimeout(function() {
      addToTotalUsers(numberOfUsers);
    }, getRandom(500, 5000)); // Every 0.5 to 5 seconds, the number of users is incremented by 1.
  }
  
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function addComma(number) {
    return number.slice(0, 3) + "," + number.slice(3, 6);
  }
  
})();