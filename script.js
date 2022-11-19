 // Задача 1. Вывести в консоли:

let laptops = [
    {
        mark : "Acer",
        price : 25000
    },
    {
        mark : "Apple",
        price : 37000
    },
    {
        mark : "Asus",
        price : 125500,
    },
    {
        mark : "HP",
        price : 42000
    },
    {
        mark : "Samsung",
        price : 52000
    }
]
for(let i = 0;i < laptops.length; i++)
if(laptops[i].price > 40000)
console.log(laptops[i]);

let sum = 0
for(let i = 0;i < laptops.length; i++){
    sum += Number(laptops[i].price);
}
console.log(sum);

// // Задача.2

let laptopsSecond = [
    {
        mark : "Acer",
        category : ["laptop", "tech"],
        price : 25000
    },
    {
        mark : "Apple",
        category : ["notebook", "tech"],
        price : 37000
    },
    {
        mark : "Asus",
        category : ["computer", "premium"],
        price : 125500,
    },
    {
        mark : "HP",
        category : ["computer", "tech"],
        price : 42000
    },
    {
        mark : "Samsung",
        category : ["notebook", "premium"],
        price : 52000
    }
]
for(i = 0;i < laptopsSecond.length; i++) {
    if(laptopsSecond[i].category[0] == "laptop")
        console.log(laptopsSecond[i]);
    }
for(i = 0;i < laptopsSecond.length; i++) {
    if(laptopsSecond[i].category[1] == "premium")
        console.log(laptopsSecond[i]);
    }
for(i = 0;i < laptopsSecond.length; i++) {
    if(laptopsSecond[i].category[1] == "tech")
        console.log(laptopsSecond[i]);
    }
        
//  // Задача 3.

let marka = prompt("ведите марку ноутбука")
let price = +prompt("ведите цену ноутбука")
laptopss.push({marka, price})
let marka2 = prompt("ведите марку ноутбука")
let price2 = +prompt("ведите цену ноутбука")
laptopss.push({marka2, price2})
let marka3 = prompt("ведите марку ноутбука")
let price3 = +prompt("ведите цену ноутбука")
laptopss.push({marka3, price3})

console.log(laptopss);

// Задача 4.

let laptopsSecond1 = [
    {
        mark : "Acer",
        category : ["laptop", "tech"],
        price : 25000
    },
    {
        mark : "Apple",
        category : ["notebook", "tech"],
        price : 37000
    },
    {
        mark : "Asus",
        category : ["computer", "premium"],
        price : 125500,
    },
    {
        mark : "HP",
        category : ["computer", "tech"],
        price : 42000
    },
    {
        mark : "Samsung",
        category : ["notebook", "premium"],
        price : 52000
    }
]
let nout = prompt("ведите марку ноутбука")
for(let i = 0;i < laptopsSecond1.length; i++) {
    if(nout == laptopsSecond1[i].mark) {
        console.log(laptopsSecond1[i].category);
}
}
let price1 = +prompt("ведите приемлимую вами цену")
for(let i = 0;i < laptopsSecond1.length; i++){
    if(price1 > laptopsSecond1[i].price) {
        console.log(laptopsSecond1[i]);
    }
    }
        
    
    
