window.onload = function() {
    var search = document.getElementById("search");
    var httpRequest = new XMLHttpRequest(); 
    var url = "https://info2180-lab6-djdkwel97.c9users.io/request.php?q="
    function doSomething() { 
        if(httpRequest.readyState === XMLHttpRequest.DONE) { 
            if(httpRequest.status === 200) { 
                var response = httpRequest.responseText; 
                alert(response); 
                } 
                else{ 
                    alert('There was a problem with the request.'); 
  } 
} 
}
    search.onclick = function() {
            var word = document.getElementById("word").value
            url = url + word;
            httpRequest.onreadystatechange = doSomething;
            httpRequest.open('GET', url);
            httpRequest.send();
        
        console.log(url);
    };
    
    
}// end of window.onload