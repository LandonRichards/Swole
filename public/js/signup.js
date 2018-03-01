$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var firstName = $("#firstName");
  var lastName = $("#lastName");
  var emailAddress = $("#exampleInputEmail1");
  var userName = $("#userName");
  var password = $("#password");
  var authorList = $("tbody");
  var authorContainer = $(".author-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#swoleform", handleSwoleFormSubmit);
  $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the intiial list of Authors
  getAuthors();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleSwoleFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!firstName.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    addSwoleBuddy({
      firstName: firstName
      lastName: lastName
      emailAddress: emailAddress
      userName: userName
      password: password
        .val()
        .trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  // function addSwoleBuddy(swoleData) {
  //   $.post("/api/authors", swoleData)
  //     .then(swoleData);
  // }

  // Function for creating a new list row for authors
  function createAuthorRow(swoleData) {
    var newTr = $("<tr>");
    newTr.data("author", swoleData);
    newTr.append("<td>" + swoleData.name + "</td>");
    return newTr;
  }

//   // Function for retrieving authors and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/authors", function(data) {
      renderAuthorList(data.map(x => createAuthorRow(x))) //this .map takes the value x and then runs renderauthorlist
      nameInput.val(""); // empties the search bar our
    });
  }

//   // A function for rendering the list of authors to the page
  function renderAuthorList(rows) {
    authorList.children().not(":last").remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    authorContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    })
    .then(getAuthors);
  }
});