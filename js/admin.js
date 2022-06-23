let initData = {
  products: [
    {
      id: 1,
      name: "Laguna",
      price: 2500000,
      image:
        "https://m.media-amazon.com/images/I/51ljW7Dyx4L._AC_SR1840,1472_.jpg",
      amount: 10,
      brand: "Tommy Hilfiger",
    },
    {
      id: 2,
      name: "Bailian",
      price: 2500000,
      image:
        "https://m.media-amazon.com/images/I/617eOIj3qRL._AC_SR1840,1472_.jpg",
      amount: 10,
      brand: "GUESS",
    },
    {
      id: 3,
      name: "Clairen",
      price: 2500000,
      image:
        "https://m.media-amazon.com/images/I/71kkDfCNcML._AC_SR1840,1472_.jpg",
      amount: 10,
      brand: "Calvin Klein",
    },
    {
      id: 4,
      name: "Manys",
      price: 2500000,
      image:
        "https://m.media-amazon.com/images/I/71es6bNjIbL._AC_SR1840,1472_.jpg",
      amount: 10,
      brand: "GUESS",
    },
  ],
  admin: [
    {
      userName: "admin",
      passWord: "1234",
    },
  ],
};
// Khởi tạo local storage
if (!window.localStorage.getItem("data")) {
  window.localStorage.setItem("data", JSON.stringify(initData));
}

//  Hàm cập nhật dữ liệu vào local storage
let updateLocalStorage = function () {
  window.localStorage.setItem("data", JSON.stringify(data));
};

// Lấy dữ liệu từ local storage
let data = JSON.parse(window.localStorage.getItem("data"));

// Hàm hiển thị thông tin sản phẩm khi bấm vào sửa sản phẩm
let showCurrentProduct = function(id){
  data.currentProduct = id;
  updateLocalStorage();
  let product = data.products.find(e => e.id == id);
  let name = document.querySelector("#inputNameEdit");
  let brand = document.querySelector("#inputBrandEdit");
  let price = document.querySelector("#inputPriceEdit");
  let image = document.querySelector("#inputImageEdit");
  let amount = document.querySelector("#inputAmountEdit");
  name.value = product.name;
  brand.value = product.brand;
  price.value = product.price;
  image.value = product.image;
  amount.value = product.amount;
}

// Hàm lưu sản phẩm hiện thời vào local storage khi bấm nút xóa
let setCurrentProduct = function(id){
  data.currentProduct = id;
  updateLocalStorage();
}

// Hàm hiển thị thông tin tất cả sản phẩm lên trang admin
let renderProducts = function () {
  let container = document.querySelector(".products-container");
  container.innerHTML = `<tr>
                          <th width="10">STT</th>
                          <th width="100">Tên sản phẩm</th>
                          <th width="100" class="text-left">Ảnh</th>
                          <th width="50">Hãng</th>
                          <th width="100">Giá tiền</th>
                          <th width="30">Số lượng</th>
                          <th width="30">Sửa</th>
                          <th width="30">Xoá</th>
                        </tr>`;
  data.products.forEach((product, index) => {
    let item = document.createElement("tr");
    container.appendChild(item);
    item.outerHTML = `<tr>
                          <td width="10">${index + 1}</td>
                          <td width="100">${product.name}</td>
                          <td width="100" class="text-left"><img src="${
                            product.image
                          }" style="width: 100px; border-radius: 5px;"></td>
                          <td width="50">${product.brand}</td>
                          <td width="100">${product.price}đ</td>
                          <td width="30">${product.amount}</td>
                          <td width="30"><button type="button" id="btnEdit${product.id}" onclick="showCurrentProduct(${product.id})" class="btn btn-primary" data-toggle="modal" data-target="#edit"><i class="fas fa-wrench" ></i></button></td>
                          <td width="30"><button type="button" class="btn btn-primary" onclick="setCurrentProduct(${product.id})" data-toggle="modal" data-target="#delete"><i class="fas fa-trash-alt"></i></button></td>
                      </tr>`;
  });
};
renderProducts();

// Hàm hiển thị thông báo
let messageBox = function (message) {
  document.querySelector(".notification-desc").innerHTML = message;
  var myModal = new bootstrap.Modal(
    document.getElementById("notification"),
    {}
  );
  myModal.show();
};

// Sự kiện khi bấm thêm sản phẩm
let btnAdd = document.querySelector(".btn-add");
btnAdd.addEventListener("click", (e) => {
  let name = document.querySelector("#inputNameAdd").value;
  let brand = document.querySelector("#inputBrandAdd").value;
  let price = document.querySelector("#inputPriceAdd").value;
  let image = document.querySelector("#inputImageAdd").value;
  let amount = document.querySelector("#inputAmountAdd").value;
  // Kiểm tra nếu thông tin nhập vào rỗng
  if (name && brand && price && image && amount) {
    data.products.push({
      id: data.products[data.products.length-1].id + 1,
      name: name,
      price: price,
      image: image,
      amount: amount,
      brand: brand,
    })
    updateLocalStorage();
    messageBox("Thêm thành công.");
    renderProducts();
  } else {
    messageBox("Thêm không thành công.");
  }
});

// Sự kiện khi bấm sửa sản phẩm
let btnEdit = document.querySelector(".btn-edit");
btnEdit.addEventListener("click", (e) => {
  let name = document.querySelector("#inputNameEdit").value;
  let brand = document.querySelector("#inputBrandEdit").value;
  let price = document.querySelector("#inputPriceEdit").value;
  let image = document.querySelector("#inputImageEdit").value;
  let amount = document.querySelector("#inputAmountEdit").value;
  // Kiểm tra thông tin nhập vào
  if (name && brand && price && image && amount) {
    let indexOfCurrentProduct = data.products.indexOf(data.products.find(e => e.id == data.currentProduct));
    data.products[indexOfCurrentProduct] = {
      id: data.products[indexOfCurrentProduct].id,
      name: name,
      price: price,
      image: image,
      amount: amount,
      brand: brand,
    }
    updateLocalStorage();
    messageBox("Sửa thành công.");
    renderProducts();
  } else {
    messageBox("Sửa không thành công.");
  }
});

// Sự kiện xóa sản phẩm
let btnDelete = document.querySelector(".btn-delete");
btnDelete.addEventListener("click", e => {
  let indexOfCurrentProduct = data.products.indexOf(data.products.find(e => e.id == data.currentProduct));
  data.products.splice(indexOfCurrentProduct, 1);
  updateLocalStorage();
  renderProducts();
})