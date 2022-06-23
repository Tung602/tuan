var objPeople = [
    {
        name : "Đinh Văn Linh",
        username: "linh@gmail.com",
        password: "linh1234"
    },
    {
        name : "Đoàn Long Nhật",
        username: "nhat@gmail.com",
        password: "nhat1234"
    },
    {
        name : "Nguyễn Phương Trinh",
        username: "trinh@gmail.com",
        password: "trinh1234"
    }
]

function Login() {
    // var name = document.getElementById("name")
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var listUser = JSON.parse(localStorage.getItem("list-user"));
    var checkValidUser = listUser.filter(item => item.username === username && item.password === password);
    if (checkValidUser.length > 0) {
        alert("Đăng nhập thành công")
        localStorage.setItem('user-info', JSON.stringify({
            username,
            password,
            name:checkValidUser[0].name
        }))
        location.href = "http://127.0.0.1:5500/index.html"
    }
    else {
        alert("Sai tên đăng nhập hoặc mật khẩu");
    }
}



function Register() {
    // var username = document.getElementById("username").value\
    var newName = document.getElementById("newName").value
    var newUser = document.getElementById("newUser").value
    var newPassword = document.getElementById("newPassword").value
    var newRePass = document.getElementById("newRePassword").value

    for (var i = 0; i < objPeople.length; i++) {
        if (newUser == objPeople[i].username) {
            alert("Gmail đã được đăng kí. Vui lòng đăng kí gmail khác");
            return
        }
    }

    if (newPassword.length <= 6) {
        alert("Mật khẩu phải dài hơn 6 kí tự");
        return
    }
    else if (newPassword != newRePass) {
        alert("mật khẩu không khớp nhau");
        return
    }
    else if (newPassword.length > 6 && newPassword == newRePass) {
    
        var newPeople = {
            name : newName,
            username: newUser,
            password: newPassword
        }
        objPeople.push(newPeople)
        localStorage.setItem("list-user", JSON.stringify(objPeople));
        alert("Đăng ký thành công");
        location.href="http://127.0.0.1:5500/components/formDangNhap.html";

    }
}