const URL_API = 'https://thatcopy.pw/catapi/rest/';
const catButton = document.getElementById('change-cat');

const getCats = async () => {
    try{
        const data = await fetch(URL_API);
        const json = await data.json();
        return json.webpurl;
    } catch (error){
        console.log(error.name, error.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat-img');
    catImg.src = await getCats();
};

catButton.addEventListener('click', loadImg);

loadImg();