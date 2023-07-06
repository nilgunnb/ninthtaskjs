function API(){
    fetch("https://randomuser.me/api/?results=100")
    .then(res => res.json())
    .then(data  => {
        let img = document.querySelector(".slider img")
        let next = document.querySelector(".next")
        let prev = document.querySelector(".prev")
        let index = 0
        let pics = []
        for( user of data.results){
            pics.push(user.picture.medium)
        }
        img.src = pics[index]
        next.onclick = function(){
            index++
            if(index>pics.length-1){
                index = 0
            }
            img.src = pics[index]
        }
        prev.onclick = function(){
            index --
            if(index===-1){
                index = pics.length -1
            }
            img.src = pics[index]
        }
        setInterval(() => {
            index++
            if(index>pics.length-1){
                index = 0
            }
            img.src = pics[index]
        }, 2000);
    })
    .catch(err => console.log(err))
}

API()


