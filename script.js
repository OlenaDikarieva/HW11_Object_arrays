const shoppingCart = {
    items: [], // массив товаров  item => name, price, quantity
    totalCost: 0, // итогова стоимость всех продуктов
    addItem(item) {
        const existingItem = this.items.find((e) => e.name === item.name);
        if (existingItem) {
            existingItem.quantity += item.quantity;
            existingItem.price =
                existingItem.price < item.price
                    ? item.price
                    : existingItem.price;
        } else {
            this.items.push(item);
        }
        this.updateTotalCost();
    },
    removeItem(itemName) {
        const index = this.items.findIndex((elem) => elem.name === itemName);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.updateTotalCost();
        }
    },
    updateTotalCost() {
        this.totalCost = this.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    },
};

// const add = document.getElementById('add');
// '     555     '.trim() => '555'

add.onclick = addHandler;
stats.onclick = statsHandler;

function statsHandler() {
    // Кол-во позиций;
    // Итоговая стоимость всех продуктов;
    // Итоговое кол-во всех продуктов;
    // Максимальная цена
    // Минимальная цена
    // Средняя цена
    statsOur.innerHTML = "";
    const li1 = document.createElement("li1");
    li1.textContent = "Total:";
    statsOur.appendChild(li1);

    const count = shoppingCart.items.length;
    const total = shoppingCart.items.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    shoppingCart.items.sort((a,b)=>b.price-a.price);
    
    const max = count>0?shoppingCart.items[0].price:0;
    const min = count>0?shoppingCart.items[count-1].price:0;

    staticdraw(`Count product: ${count}`);
    staticdraw(`Product price: ${shoppingCart.totalCost}`);
    staticdraw(`Maximum price:${max}`);
    staticdraw(`Minimum price:${min}`);
    staticdraw(`Average price:${total/count}`);

    function staticdraw(param) {
        const li = document.createElement("li");
        li.textContent = param;
        statsOur.appendChild(li);
    }
}

function addHandler() {
    shoppingCart.addItem({
        name: productName.value.trim(),
        price: +price.value.trim(),
        quantity: +quantity.value.trim(),
    });

    productList.innerHTML = "";

    shoppingCart.items.forEach((e) => {
        const li = document.createElement("li");
        li.textContent = `
            Product name: ${e.name},
            Product price: ${e.price},
            Quantity of product: ${e.quantity},
        `;
        productList.appendChild(li);
    });
}

const item = {
    name: "Alice",
};

// item.name === 'Хлеб'
