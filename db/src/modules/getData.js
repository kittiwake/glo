const getData = () => {
 return fetch('https://ozon-glo-kw-default-rtdb.asia-southeast1.firebasedatabase.app/goods.json') 

      .then((response) => response.json())
    
};

export default getData;
