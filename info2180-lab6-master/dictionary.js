window.onload = function(){
    var button = document.getElementById(button);
    var httpRequest = new XMLHttpRequest(); 
    var url = "https://info2180-lab6-djdkwel97.c9users.io/request.php?q=definition"; 
    var word = "";
    
    function doSomething() { 
        if(httpRequest.readyState === XMLHttpRequest.DONE) { 
        if(httpRequest.status === 200) { 
            var response = httpRequest.responseText; 
            alert(response); } 
        else
    { 
     alert('There was a problem with the request.'); 
}// end of else statement 
}// end of first if statement  
}// end of doSomething Function

    button.onclick = function (){
        var url2 = "https://info2180-lab6-djdkwel97.c9users.io/request.php?q=";
        var word = button;
        httpRequest.onreadystatechange = doSomething; 
        httpRequest.open('GET', url); 
        httpRequest.send();
    }
}// end of windows.onload function