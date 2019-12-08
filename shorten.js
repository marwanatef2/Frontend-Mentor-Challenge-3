document.getElementById("btn").addEventListener('click', function(w){
    w.preventDefault();
    
    var request = new XMLHttpRequest();
    request.open("POST", "https://rel.ink/api/links/", true);
    
    request.onload = function(){
        var myresponse = JSON.parse(this.response);
        
        if (request.status >= 200 && request.status <400)
        {
            var shortened = myresponse['hashid'];
            var shortenedlink = "https://rel.ink/"+shortened      

            // console.log(shortenedlink);

            var shortencontainer = document.querySelector('.shortencontainer');

            var box = document.createElement('p');
            box.setAttribute('class', 'shorten');

            var linkToShorten = document.getElementById('inputlink').value;
            // var p1 = document.createElement('p');
            // p1.setAttribute('class', 'toshorten')
            // p1.textContent = linkToShorten;

            // var p2 = document.createElement('p');
            // p2.setAttribute('class', 'shortened')
            // p2.textContent = shortenedlink;

            box.innerHTML = '<span class="toshorten">'+linkToShorten+'</span> <span class="shortened">'+shortenedlink+'</span>';

            shortencontainer.appendChild(box);
            // box.appendChild(p1);
            // box.appendChild(p2);

            document.getElementById('inputlink').value = "";
        }
        else{
            console.log('error man!!');
        }
    }

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var linkToShorten = document.getElementById('inputlink').value;
    
    if(linkToShorten==="")
    {
        console.log('mafyyysh link ya3am');
    }
    else {
        var requestbody = "url="+linkToShorten;

        request.send(requestbody)
    }
});
