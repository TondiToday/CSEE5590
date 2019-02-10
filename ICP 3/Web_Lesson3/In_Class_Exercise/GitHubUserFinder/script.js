function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            //var a = JSON.parse(xhttp.responseText);
            //document.getElementById("profile").value = a.name;

        }

    }
    xhttp.open("GET", "https://api.github.com/users/" + user, false);
    xhttp.send();
    return xhttp

}

function showUser(user) {
    $('#profile').children('h2').text(user.login)
    //document.getElementById("profile").value = user.name
    $('.avatar').html('<img src="' + user.avatar_url +'"/>')
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    $('.information').html( '<a class=profile href =' + user.html_url + ' >' + user.html_url + '</a>')
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    console.log('hello')
    $('.information').text('user not avaliable')


}


$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                console.log(response)
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
