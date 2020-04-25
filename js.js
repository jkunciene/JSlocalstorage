if(!localStorage.getItem('like')){
    localStorage.setItem('like', 0);
}


if(!localStorage.getItem('dislike')){
    localStorage.setItem('dislike', 0);
}


document.getElementById('likes').innerHTML = localStorage.getItem('like');
document.getElementById('dislikes').innerHTML = localStorage.getItem('dislike');



function like(){


    var likes = parseInt(localStorage.getItem('like')) + 1;


    document.getElementById('likes').innerHTML = likes.toString();


    console.log(likes);


    localStorage.removeItem('like');


    localStorage.setItem('like', likes);


    console.log("like");


}


function dislike(){


    var dislikes = parseInt(localStorage.getItem('dislike')) + 1;


    document.getElementById('dislikes').innerHTML = dislikes.toString();


    console.log(dislikes);


    localStorage.removeItem('dislike');


    localStorage.setItem('dislike', dislikes);


    console.log("dislike");

}



















