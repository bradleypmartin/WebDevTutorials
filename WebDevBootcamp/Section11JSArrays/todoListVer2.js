var selection = "list";
var currentList = [];

while(selection != "quit"){
  selection = prompt("What would you like to do? (new, list, delete, quit)");
  switch (selection) {

    case "quit":
      break;

    case "list":
      console.log("**********")
      console.log("Current Todo list:");
      //note the new forEach syntax here (using anon. function)
      currentList.forEach(function(listItem, index){
        console.log(index + ": " + listItem);
      });
      console.log("**********");
      break;

    case "delete":
      var delIndex = prompt("What list item # would you like to delete?");
      if(delIndex >= 0 && delIndex < currentList.length){
        currentList.splice(delIndex,1);
        console.log("List item " + delIndex + " removed.");
      }
      break;

    case "new":
      var newItem = prompt("Please type in your new Todo list item.");
      currentList.push(newItem);
      break;

    default:
      alert("Sorry; that command isn't understood. Please choose 'new', 'list', 'delete', or 'quit'.")
  }
}
