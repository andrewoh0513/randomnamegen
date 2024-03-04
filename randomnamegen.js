var namelist = ["Andrew","Abby","Kyle","Brian","Ava","Clara","Leo","Oliver","Benjamin","Ruth"];
var list;

function generate() {
    document.getElementById("name").innerHTML = namelist[Math.floor(Math.random() * namelist.length)];
}