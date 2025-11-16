// инкапсулирование кода.
// теперь переменные cartBtn, cartModal - это переменные, которые не доступны
// в глобальной области, и могут быть другие ф-ии с такими названиями переменных
// и они не будут конфликтовать
const Cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const closeModalBtn = cartModal.querySelector('.cart-close');
    
    console.log(cartBtn);
    const openCart = () => {
        cartModal.style.display = 'flex';
    };

    const closeCart = () => {
        cartModal.style.display = '';
    };

    cartBtn.addEventListener('click', openCart);
    closeModalBtn.addEventListener('click', closeCart);
}

export default Cart;
