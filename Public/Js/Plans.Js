const YearsBtn = document.getElementById("YearsBtn");
const MonthBtn = document.getElementById("MonthBtn");

const Titanium = document.getElementById("Titanium");
const platinum = document.getElementById("platinum");
const Diamond = document.getElementById("Diamond");

const TitaniumCurrency = document.getElementById("TitaniumCurrency");
const platinumCurrency = document.getElementById("platinumCurrency");
const DiamondCurrency = document.getElementById("DiamondCurrency");

let DiscountBadge = document.getElementsByClassName("DiscountBadge");


    MonthBtn.addEventListener("click",function() {
        Titanium.innerText = "200",
        TitaniumCurrency.innerText = "هزار",
        
        platinum.innerText = "500",
        platinumCurrency.innerText = "هزار"

        Diamond.innerText = "700",
        DiamondCurrency.innerText = "هزار"

        for (let i = 0; i < DiscountBadge.length; i++) {
            DiscountBadge[i].classList.add('hidden');
            DiscountBadge[i].classList.remove('flex');
        }

        MonthBtn.classList.add('bg-red-500','text-white')
        YearsBtn.classList.remove('bg-red-500','text-white')
        YearsBtn.classList.add('bg-gray-100')
    })


    YearsBtn.addEventListener("click",function() {
        Titanium.innerText = "2",
        TitaniumCurrency.innerText = "میلیون",
        
        platinum.innerText = "5",
        platinumCurrency.innerText = "میلیون"

        Diamond.innerText = "7",
        DiamondCurrency.innerText = "میلیون"


        for (let i = 0; i < DiscountBadge.length; i++) {
            DiscountBadge[i].classList.add('flex');
            DiscountBadge[i].classList.remove('hidden');
        }
        YearsBtn.classList.add('bg-red-500','text-white')
        MonthBtn.classList.remove('bg-red-500','text-white')
        MonthBtn.classList.add('bg-gray-100')

    })