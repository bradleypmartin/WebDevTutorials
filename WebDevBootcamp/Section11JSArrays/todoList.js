var selection = "list";
var currentList = [];

while(selection != "quit"){
  selection = prompt("What would you like to do? (new, list, quit)");
  switch (selection) {
    case "quit":
      break;
    case "list":
      console.log("Current Todo list:");
      // note the new forEach syntax here (using anon. function)
      currentList.forEach(function(listItem){
        console.log(listItem);
      })

      break;
    case "new":
      var newItem = prompt("Please type in your new Todo list item.");
      currentList.push(newItem);
      break;
    default:
      alert("Sorry; that command isn't understood. Please choose 'new', 'list', or 'quit'.")
  }
}
