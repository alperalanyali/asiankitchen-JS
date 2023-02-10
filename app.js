const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
      "https://omnivorescookbook.com/wp-content/uploads/2017/04/2002_Dan-Dan-Noodles_550.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];


let btnContainer = document.querySelector(".btn-container");


let categories = menu.map(category => category.category )

let categoryList = [...new Set(categories)]



categoryList.unshift("All")
categoryList.forEach(category => {
    
    let btn = document.createElement("button");
    btn.innerText = category;
    btn.classList.add("btn","btn-outline-dark","btn-item")
    btn.addEventListener("click",btnClick)
    btnContainer.append(btn);
});



let sectionCenter = document.querySelector(".section-center");
getList(menu);
function getList(menuList){
    menuList.forEach(item => {

        let divMenuItem = document.createElement("div");
        divMenuItem.classList.add("menu-items","col-lg-6","col-sm-12");
        
        let img = document.createElement("img");
        img.classList.add("photo");
        img.src = item.img
        divMenuItem.appendChild(img);
        
        let divInfo = document.createElement("div");
        divInfo.classList.add("menu-info");
        let divMenuTitle = document.createElement("div");
        divMenuTitle.classList.add("menu-title");
        let h4Title = document.createElement("h4");
        h4Title.innerText = item.title;
        h4Title.classList.add("price")
        let h4Price = document.createElement("h4");
        h4Price.innerText = item.price
        
        let divText = document.createElement("div");
        divText.classList.add("menu-text");
        divText.innerText = item.desc;
        
        
         
        divMenuTitle.appendChild(h4Title);
        divMenuTitle.appendChild(h4Price); 
        divInfo.appendChild(divMenuTitle);
        divInfo.appendChild(divText);
        
        divMenuItem.appendChild(divInfo);
        
        sectionCenter.appendChild(divMenuItem);
    
    });
}




function btnClick(e){
    const category = e.target.textContent
    console.log(category);
    const menuCategory = menu.filter(menuItem =>{
        if(menuItem.category == category){
            return menuItem;
        }
    })
    debugger;
    if(category =="All"){
        sectionCenter.innerHTML = "";
        getList(menu);
    }else {
        sectionCenter.innerHTML = "";
        getList(menuCategory);
    }
}


