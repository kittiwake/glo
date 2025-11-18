import { categoryFilter, priceFilter, searchFilter } from "./filters";
import getData from "./getData";
import renderGoods from "./renderGoods";

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button');
    const catalogModal = document.querySelector('.catalog');
    const catalogModalItems = catalogModal.querySelectorAll('li');
    const priceMinInput = document.getElementById('min');
    const priceMaxInput = document.getElementById('max');


    let isOpen = false;

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen;
        catalogModal.style.display = isOpen ? 'block' : '';
    })

    catalogModalItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent;

            getData().then(data => {
                renderGoods(categoryFilter(data, text));
                isOpen = false;
                catalogModal.style.display = '';
            });
        })
    });

    priceMinInput.addEventListener('change', () => {
        const min = priceMinInput.value;
        const max = priceMaxInput.value;
        console.log(min, max);
        
        getData().then(data => {
            renderGoods(priceFilter(data, min, max));
        });
    });

    priceMaxInput.addEventListener('change', () => {
        const min = priceMinInput.value;
        const max = priceMaxInput.value;
        getData().then(data => {
            renderGoods(priceFilter(data, min, max));
        });
    });
};

export default catalog;
