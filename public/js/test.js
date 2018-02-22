//To whom it may concern: I coded along side an example from our class. I
// rewrote the code below to understand what each function did. 

$(document).ready(function() {
    var userInput = $("#user-input") // use dis in css, also gets the value from HTML
    var userList = $("#user-List")
    var userContainer = $(".user-container")

    // we need to create some click events for users to input data
    $(document).on("submit", "user-form", userFormSubmit);
    $(document).on("click", ".delete-user", userDeleteButton);

    getUsers();
    //gets the list of swolemates 
    function userFormSubmit(event) {
        //this function is going to run when we click da button
        event.preventDefault();

        if (!nameInput.val().trim().trim()) {
            //why are there two trims in here?
            return;
            //userinputvaldiation yay
        }
        // after we check to make sure we are inputing actual data...
        //nani is an upsert
        upsertUser({
            name: userInput
                .val()
                .trim()

        })

    } // end of userformsubmit
    // This is adding a new swolemate to the swoleDB
    function upsertUser(userData) {
        $.post("/api/users", userData)
            .then(getUsers);
    } // end of author data!
    // this function is actually baller. It dynamically creates a new list!
    function createUserRow(userData) {
        var newTr = $("<tr>");
        newTr.data("lifter", userData);
        newTr.append("<td>" + userData.name + "</td>");
        newTr.append("<td> " + userData.Posts.length + "</td>");
        newTr.append("<td><a href='/blog?user_id=" + userData.id + "'>Go to Posts</a></td>");
        newTr.append("<td><a href='/cms?user_id=" + userData.id + "'>Create a Post</a></td>");
        newTr.append("<td><a style='cursor:pointer;color:red' class='delete-user'>Delete User</a></td>");
        return newTr;
    }//end of create user row function

    //really need to ask about this function 1. children? 2. :last?
    function renderUserList(rows) {
    	userList.children().not(":last").remove();
    	userContainer.children(".alert").remove();
    	if (rows.length) {
    		console.log(rows)
    		userList.prepend(rows);
    	}
    	else {
    		renderEmpty();
    	}
    }// end of render user list function
      function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Lifter before you can create a Post.");
    userContainer.append(alertDiv);
  } // end of renderEmpty function
    function userDeleteButton() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/users/" + id
    })
    .then(getAuthors); //this one is a weird one. After it checks for delete, checks entire funciton.
  }// end of delete buttion
});
 // end of entire function