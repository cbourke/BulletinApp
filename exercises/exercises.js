//add your ajax code here:






function sayHello() {
  //TODO: change this to make an ajax call
  alert("hello");
}

function update(option) {
  $("#mainContent").text("Option " + option + " selected.");
}

function delay() {
  var n = 1150000000;
  var x = 0;
  for(var i=0; i<n; i++) {
    x++;
  }
  console.log(x);
}
