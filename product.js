let container2 = document.getElementById(`container2`);
let p1 = document.getElementById(`P_1`);
let p2 = document.getElementById(`P_2`);
let p3 = document.getElementById(`P_3`);

p1.addEventListener(`click`,()=>{
    console.log(`clicked p1`);
    container2.innerHTML =
    `<h1>All products</h1>
    <div class="latest_Products">
    <div class="products">
    <a href="details.html"><img class="products-img" src="product-1.jpg" alt="product-1"></a>
    <h3>Red Printed T-shirt</h3>
    <img class="rating" src="star4.5.jpg" alt="star4.5">
    <h3>$50.00</h3>
    </div>
    <div class="products">
    <img class="products-img" src="product-14.jpg" alt="product-14">
    <h3>Red Sports Shoes</h3>
    <img class="rating" src="star4.5.jpg" alt="star4.5">
    <h3>$75.00</h3>
    </div>
    <div class="products">
    <img class="products-img" src="product-3.jpg" alt="product-3">
    <h3>HRX Gray Trackpants</h3>
    <img class="rating" src="star4.5.jpg" alt="star4.5">
    <h3>$45.00</h3>
    </div>
    <div class="products">
    <img class="products-img" src="product-26.jpg" alt="product-26">
    <h3>Rolex Watch</h3>
    <img class="rating" src="star4.5.jpg" alt="star4.5">
    <h3>$220.00</h3>
    </div>
    </div>
    <div class="latest_Products">
    <div class="products">
    <img class="products-img" src="product-6.jpg" alt="product-6">
    <h3>Black Printed T-shirt</h3>
    <img class="rating" src="star4.5.jpg" alt="star4.5">
    <h3>$50.00</h3>
    </div>
    <div class="products">
    <img class="products-img" src="product-7.jpg" alt="product-7">
    <h3>HRX set of 3 Socks</h3>
    <img class="rating" src="star4.5.jpg" alt="star4.5">
    <h3>$60.00</h3>
    </div>
    <div class="products">
    <img class="products-img" src="product-12.jpg" alt="product-12">
    <h3>HRX Black Trackpants</h3>
    <img class="rating" src="star4.5.jpg" alt="star4.5">
    <h3>$45.00</h3>
    </div>
    <div class="products">
    <img class="products-img" src="product-19.jpg" alt="product-19">
    <h3>Full size T-shirt</h3>
    <img class="rating" src="star4.5.jpg" alt="star4.5">
    <h3>$70.00</h3>
    </div>
    </div>
    <div class="latest_Products">
    <div class="products">
    <img class="products-img" src="product-8.jpg" alt="product-8">
    <h3>Fossil branded Watch</h3>
    <img class="rating" src="star4.5.jpg" alt="star4.5">
    <h3>$200.00</h3>
    </div>
    <div class="products">
    <img class="products-img" src="product-10.jpg" alt="product-10">
    <h3>Puma Sports Shoes</h3>
    <img class="rating" src="star4.5.jpg" alt="star4.5">
    <h3>$75.00</h3>
    </div>
    <div class="products">
    <img class="products-img" src="product-24.jpg" alt="product-24">
    <h3>MSD Forever T-shirts</h3>
    <img class="rating" src="star4.5.jpg" alt="star4.5">
    <h3>$50.00</h3>
    </div>
    <div class="products">
    <img class="products-img" src="product-15.jpg" alt="product-15">
            <h3>Bruton Shoes</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$65.00</h3>
            </div>
            </div>
            </div>`
        })
        p2.addEventListener(`click`,()=>{
            console.log(`clicked p1`);
            container2.innerHTML =
            `<h1>All products</h1>
            <div class="latest_Products">
            <div class="products">
            <img class="products-img" src="product-2.jpg" alt="product-2">
            <h3>HRX branded shoes</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$90.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="product-4.jpg" alt="product-4">
            <h3>Blue Puma T-Shirt</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$75.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="product-5.jpg" alt="product-5">
            <h3>Gray Long Shoes</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$65.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="product-9.jpg" alt="product-9">
            <h3>Roadester Branded Watch</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$180.00</h3>
            </div>
            </div>
            <div class="latest_Products">
            <div class="products">
            <img class="products-img" src="product-11.jpg" alt="product-11">
            <h3>Gray Sports Shoes</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$60.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="product-13.jpg" alt="product-13">
            <h3>Blue Sports Shoes</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$60.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="category-6.jpg" alt="product-16">
            <h3>HRX Branded Watch</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$225.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="category-2.jpg" alt="product-17">
            <h3>White branded shoes</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$45.00</h3>
            </div>
            </div>
            <div class="latest_Products">
            <div class="products">
            <img class="products-img" src="product-18.jpg" alt="product-18">
            <h3>Rolex Watch</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$200.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="product-20.jpg" alt="product-20">
            <h3>Red plain T-shirts</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$50.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="product-21.jpg" alt="product-21">
            <h3>Red plain T-shirts</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$50.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="product-22.jpg" alt="product-22">
            <h3>Blue Printed T-shirts</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$50.00</h3>
            </div>
            </div>
            </div>`
        })
        p3.addEventListener(`click`,()=>{
            console.log(`clicked p1`);
            container2.innerHTML =
            `<h1>All products</h1>
            <div class="latest_Products">
            <div class="products">
            <img class="products-img" src="product-23.jpg" alt="product-23">
            <h3>Black Printed T-shirt</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$50.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="product-25.jpg" alt="product-25">
            <h3>Branded Printed T-shirt</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$75.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="product-27.jpg" alt="product-27">
            <h3>Rolex Watach</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$225.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="buy-2.jpg" alt="buy-2">
            <h3>HRX black shoes</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$70.00</h3>
            </div>
            </div>
            <div class="latest_Products">
            <div class="products">
            <img class="products-img" src="buy-3.jpg" alt="buy-3">
            <h3>Gray Lower sports</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$100.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="category-1.jpg" alt="category-1">
            <h3>Red Shoes</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$60.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="category-3.jpg" alt="category-3">
            <h3>Adidas Huddy</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$145.00</h3>
            </div>
            <div class="products">
            <img class="products-img" src="gallery-5.jpg" alt="gallery-5.">
            <h3>Gray T-shirt</h3>
            <img class="rating" src="star4.5.jpg" alt="star4.5">
            <h3>$50.00</h3>
            </div>
            </div>
            </div>`
        })
 