const { Category } = require("@mui/icons-material");

const products = [
    {
      id: 1,
      name: 'Black',
      stock: 5,
      cost: 10,
      description: "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
      capacity: 50,
      image: ["https://media.istockphoto.com/photos/cup-of-coffee-with-heart-shape-smoke-and-coffee-beans-on-burlap-sack-picture-id1199467344?b=1&k=20&m=1199467344&s=170667a&w=0&h=4HfWi2vsFxw_9F5vuaAlQPNDJSt-h8fLleLLID2UEiI="],
      categoryId: 1,
      ingredients: [
        "Coffee"
      ],      
    },
    {
        id: 2,
        name: 'Latte',
        stock: 5,
        cost: 15,
        description: "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
        capacity: 75,
        image: ["https://media.istockphoto.com/photos/food-and-drink-picture-id1319627099?b=1&k=20&m=1319627099&s=170667a&w=0&h=orZ9zIgVWarvEs1hcVjrQL8iwfj4qrF9nnDkiRfzuL8="],
        categoryId: 2,
        ingredients: [
            "Espresso",
            "Steamed Milk"
        ],      
      },
      {
        id: 3,
        name: 'Cappuccino',
        stock: 5,
        cost: 20,
        description: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
        capacity: 100,
        image: ["https://images.unsplash.com/photo-1602671784371-042db95df1c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwdWNoaW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"],
        categoryId: 2,
        ingredients: [
            "Espresso",
            "Steamed Milk",
            "Foam"
        ],      
      },   
    {
        id: 4,
        name: 'Americano',
        stock: 5,
        cost: 12,
        description: "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.",
        capacity: 75,
        image: ["https://media.istockphoto.com/photos/close-up-of-roasted-coffee-beans-on-a-black-smokey-background-picture-id1290860484?b=1&k=20&m=1290860484&s=170667a&w=0&h=t2CYErLbBch877vaOIGQHiz-0Hy33n0hWSEKsmeN-Cw="],
        categoryId: 1,
        ingredients: [
            "Espresso",
            "Hot Water"
        ],      
      },
    {
        id: 5,
        name: 'Espresso',
        stock: 5,
        cost: 5,
        description: "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
        capacity: 10,
        image: ["https://media.istockphoto.com/photos/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans-picture-id157528129?b=1&k=20&m=157528129&s=170667a&w=0&h=8DLweTb1F3_rJFKpHn9ha8aIiQQDAJKdX5y2pR63VsA="],
        categoryId: 1,
        ingredients: [
            "1oz Espresso"
        ],      
      },
    {
        id: 6,
        name: 'Doppio',
        stock: 5,
        cost: 10,
        description: "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
        capacity: 20,
        image: ["https://media.istockphoto.com/photos/coffee-maker-2-picture-id1325775093?b=1&k=20&m=1325775093&s=170667a&w=0&h=63sIflMNHIRvNB5HW-w-ornURr7zf07R3T7Fmn7vcSo="],
        categoryId: 1,
        ingredients: [
            "2oz Espresso"
        ],      
      },
    {
        id: 7,
        name: 'Cortado',
        stock: 5,
        cost: 12,
        description: "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espressos acidity.",
        capacity: 20,
        image: ["https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        categoryId: 2,
        ingredients: [
            "1oz Espresso",
            "1oz Steamed Milk"
        ],      
      },
    {
        id: 8,
        name: "Red Eye",
        stock: 5,
        cost: 18,
        description: "Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.",
        capacity: 100,
        image: ["https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        categoryId: 1,
        ingredients: [
            "Coffee",
            "Espresso"
        ],      
      },
    {
        id: 9,
        name: 'Galão',
        stock: 5,
        cost: 20,
        description: "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
        capacity: 75,
        image: ["https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        categoryId: 2,
        ingredients: [
            "Espresso",
            "Foamed milk"
        ],      
      },    
    {
        id: 10,
        name: 'Lungo',
        stock: 5,
        cost: 25,
        description: "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
        capacity: 75,
        image: ["https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        categoryId: 1,
        ingredients: [
            "Long pulled espresso"
        ],      
      },    
];

  module.exports = {products,}