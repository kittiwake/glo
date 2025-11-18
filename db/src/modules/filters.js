export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    });
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value;
    });
}

export const priceFilter = (goods, min = 0, max = null) => {
    if (min) {
        goods = goods.filter((goodsItem) => {
            return goodsItem.price >= min;
        });
    }
    if (max) {
        goods = goods.filter((goodsItem) => {
            return goodsItem.price <= max;
        });
    }
    return goods;
}
