let data = JSON.parse(window.localStorage.getItem("data"));

let renderProducts = function () {
  let container = document.querySelector(".products-container");
  container.innerHTML = "";
  data.products.forEach((product) => {
    let item = document.createElement("div");
    container.appendChild(item);
    item.outerHTML = `<div class="col-6 col-lg-4 col-xxl-3">
                          <div class="card">
                              <img class="card-img-top" src="${product.image}" alt="Card image cap">
                              <div class="card-body bg-light">
                                <h5 class="card-title">${product.brand}</h5>
                                <p class="card-text">${product.name}</p>
                                <p class="card-text">${product.price}đ</p>
                              </div>
                            </div>
                      </div>`;
  });
};
renderProducts();