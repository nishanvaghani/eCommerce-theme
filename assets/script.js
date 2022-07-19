let http = new XMLHttpRequest();
http.open('get', 'product.json',true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = json.parse(this.responseText);
         
        let output = "";

        for(let item of products){
            output+=`
                 <section class="popular_product_section pb-5">
            <div class="container-fluid">
                <div class="row py-2">
                    <div class="col-lg-10 offset-lg-1">
                        <h1>Popular Products</h1>
                    </div>
                    <div class="col-lg-10 offset-lg-1">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-xl-3 col-sm-6 col-12">
                                <div class="card my-2 " >
                                    <div class="top_discount">
                                        <p class="m-1 text-center">-20%</p>
                                    </div>
                                    <div data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                        <img src="${item.Image}" class="card-img-top w-100" alt="..."  />
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title">
                                        ${item.Name}
                                        </h6>
                                        <p class="card-text">
                                            <i class="fa-solid fa-star checked"></i><i
                                                class="fa-solid fa-star checked"></i><i
                                                class="fa-solid fa-star checked"></i><i
                                                class="fa-solid fa-star checked"></i><i class="fa-solid fa-star"></i>(4)
                                        </p>
                                        <p class="card-text">
                                            <small class="text-muted">Sold by
                                                <span><a href="#" class="text-decoration-none">Young
                                                        Shop</a></span></small>
                                        </p>
                                        <div class="d-flex">
                                            <p>
                                                <span class="fs-5 price">$254.40</span><small class="text-muted"><span
                                                        class="px-4"><strike>$310.00</strike></span></small>
                                            </p>
                                            <div class="btncart">
                                                <a href="#" class="btn btn_cart"><i
                                                        class="fa-solid fa-cart-shopping pe-2"></i>Add</a>
                                            </div>
                                        </div>
                                    </div>





                                    <div class="action_icon bg-light">
                                        <div class="p-2 icon_grp">
                                            <button type="button" class="btn p-0 m-0" data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop">
                                                <i class="fa-solid fa-eye"></i>
                                            </button>

                                        </div>


                                        <div class="p-2 icon_grp">
                                            <a href="" class="text-decoration-none" data-bs-toggle="tooltip"
                                                data-bs-placement="top" data-bs-custom-class="custom-tooltip"
                                                title="Add To Wishlist">
                                                <i class="fa-regular fa-heart"></i></a>
                                        </div>
                                        <div class="p-2 icon_grp">
                                            <a href="" class="text-decoration-none" data-bs-toggle="tooltip"
                                                data-bs-placement="top" data-bs-custom-class="custom-tooltip"
                                                title="Add To Compare">
                                                <i class="fa-solid fa-shuffle"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                          
                            
                         
                   
                        </div>
                    </div>
                </div>
            </div>
        </section>
            `;
        }
document.querySelector(".products").innerHTML = output;
    }
}