/* If an individual was making a large program, an OOP would be really good
 for optimization as it would help in memory management.
 If the application constantly requires more and more
  paired values to be added say user names and passwords,
   an OOP would work best here as New objects can be easily created
    for the same class and code can be easily maintained and altered. */

// User story
/* Make a contact list app that stores name, address, age and email of your family members .
1) The app should possess a sign up and login in button
2) The app Should contain a dashboard that allows the user to add the contact detail
listed above.
3) A search bar in the dashboard to help locate a contact by either name, address or email.
4) If the user searches a name not on the list, a notofication
saying that name, address or email is not in your contact
5) The user should be able to login and out of the app, edit the
contact details along with the users own detail if need be */

//pseudo code for explaining OOP

//object that stores the contact info entered in the user interface
const userData = [{
    name: "Some name",
    age: 4,
    email: "@mail.com",
    address: 'someplace'
}]

// This inherits the property from the UserData one can now create new contacts using the userData as prototype
// This will be accessed through the user Interface. 
const contact1 = new userData

// This saves the user data to some storage medium 
userData.saveToSomeCloud()

// This will iterate over the user data to find 
function Search (){
    for (let i = 0; i<userData.length; i++){
        if (/*Some logic to check if the keyvalue pair is available*/){
            return // Contact if true 
        } else {
            return "Contact not found"
        }
    }
}

function logOut(){
    if (/*some button is clicked*/){
        return window.location = //Landing page
    }
}