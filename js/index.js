$(document).ready(function(){
    $('.sidenav').sidenav();
});

$(document).ready(function(){
    $('.carousel').carousel();
});

$("#li").click(function() {
    $("#li").addClass("active");
})

$(document).ready(function(){
    $('.carousel').carousel();
});

/*$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});*/

function addNewFriend() {

    let name = document.getElementById('icon_prefix').value;
    let phone = document.getElementById('icon_telephone').value;
    let json = '{\n' +
        '"phone": "' + phone + '",\n' +
        '"name": "'+ name+'"\n' +
        '}';

    //fetch('http://localhost:8080/set',
        fetch(ip+'/set',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: json
        })
        .then((res1) => {
            console.log('res1.token', res1.json()
                .then((res2)=>{
                }));

        });

}

function addFriendToList() {
    let page = document.getElementById("friend-list");

    //fetch('http://localhost:8080/get',
    fetch(ip+'/get',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
        .then((res1) => {
            console.log('res1.token', res1.json()
                .then((res2)=>{
                    console.log('res2',res2);

                    let friendsList = res2;
                    for (let i = 0; i < friendsList.length; i++) {

                        let li = document.createElement('li');
                        let arg1 = '\''+friendsList[i].name+'\''
                        let arg2 ='\''+friendsList[i].phone+'\''
                        let arg3 =i;
                        console.log(arg1);
                        console.log(arg2);
                        console.log(arg3);
                        li.id = 'li'+i;
                        li.className = "collection-item avatar";
                        li.innerHTML = '<img src="css/images/User.png" alt="" class="circle">\n' +
                            '<span class="title">'+friendsList[i].name+'</span>\n' +
                            '<p>'+friendsList[i].phone+'</p>\n' +
                            '<a href="friends.html" class="secondary-content"><i class="material-icons" onclick="deleteFriend('+arg1+','+arg2+','+arg3+')">clear</i></a>';
                        page.appendChild(li);
                    }

                }));

        });
}

function deleteFriend(name, phone,i) {
    var myList = document.getElementById('li'+i);
    myList.innerText= '';
    let json = '{\n' +
        '"phone": "' + phone + '",\n' +
        '"name": "'+ name+'"\n' +
        '}';

    //fetch('http://localhost:8080/delete',
    fetch(ip+'/delete',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: json
        })
        .then((res1) => {
            console.log('res1.token', res1.json()
                .then((res2)=>{
                }));

        });
}


function addToBucket(prod, num) {

    $('#prod'+num)[0].innerText = 'check';

    let json = '{\n' +
        '"name": "' + prod + '",\n' +
        '"position":'+ num+'\n' +
        '}';

    //fetch('http://localhost:8080/setProd',
    fetch(ip+'/setProd',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: json
        })
        .then((res1) => {
            console.log('res1.token', res1.json()
                .then((res2)=>{
                }));

        });
}


function getYourProds() {
    let page = document.getElementById("prod-list");

    //fetch('http://localhost:8080/getProds',
    fetch(ip+'/getProds',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
        .then((res1) => {
            console.log('res1.token', res1.json()
                .then((res2)=>{
                    console.log('res2',res2);

                    let prodsList = res2;
                    for (let i = 0; i < prodsList.length; i++) {

                        let li = document.createElement('li');
                        li.className = "collection-item avatar";
                        li.innerHTML = '<img src="css/images/prod/'+prodsList[i].position+'.jpg" alt="" height="50" width="50" class="prod-img">'+
                            '<span class="title prod-title">' + prodsList[i].name+ '</span>'+
                        '<a href="#!" class="secondary-content"><i class="material-icons"></i></a>';
                        page.appendChild(li);
                    }

                }));

        });
}

function changeColor(num) {
    if($('#li'+num).attr('class').indexOf("active")!=-1){
        $('#li'+num).removeClass('active');
    }
    else {
        $('#li'+num).addClass('active')
    }

}

function makePush() {
    pushGo = true;
    fetch(ip+'/setGoTRUE',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
        .then((res1) => {
            console.log('res1.token', res1.json()
                .then((res2)=>{
                }));

        });

    setTimeout(function () {

        //document.location.replace('file:///C:/Users/%D0%98%D0%B2%D0%B0%D0%BD/Desktop/JS/UrbanTech/push1.html');
        document.location.replace('http://mapchain.000webhostapp.com/push1.html');
    }, 10000)
}