const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById("changePic");


const getCats = async () => { // this is an arrow function 
    //try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        console.log(json);
        return json.weburl;
    //} catch (e) {
     //   console.log(e.message);

    //}
}
const loadImg = async () =>{
    const catImg = document.getElementById("catImg");
    catImg.src = await getCats();
    console.log(catImg.src);
}


catBtn.addEventListener('click', loadImg);