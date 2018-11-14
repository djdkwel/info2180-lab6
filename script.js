window.onload = function() {
    var search = document.getElementById("search");
    var searchAll = document.getElementById("searchAll")
    var result = document.getElementById("result");
    var httpRequest = new XMLHttpRequest(); 
    var url = "https://info2180-lab6-djdkwel97.c9users.io/request.php?q="
    function doSomething() { 
        if(httpRequest.readyState === XMLHttpRequest.DONE) { 
            if(httpRequest.status === 200) { 
                var response = httpRequest.responseText; 
                    result.append(response); 
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
    
    searchAll.onclick = function(){
    {
     var defs = xmlObj.getElementsByTagName(&#39;definition&#39;);
     var list = document.createElement(&#39;ol&#39;);
     for (let i = 0; i &lt; defs.length; i++) {

    const listItem = document.createElement(&#39;li&#39;);

    const title = defs[i].getAttribute(&#39;name&#39;);

    const author = defs[i].getAttribute(&#39;author&#39;);

    const definition = defs[i].innerHTML;

    listItem.innerHTML=`&lt;h3&gt;${title}&lt;/h3&gt;&lt;p&gt;${definition}&lt;/p&gt;&lt;p&gt;-${author}&lt;/p&gt;`;

    list.appendChild(listItem);

    }

result.appendChild(list);

}
    }
    
    
}// end of window.onload