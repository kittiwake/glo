import getData from "./getData";
const sec = () => {
    const cartBtn = document.getElementById('cart');

    getData().then(data => console.log(data));
    
}

export default sec;