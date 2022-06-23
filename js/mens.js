function showSubList(e) {
    let breadcumpItem = document.querySelectorAll('.breadcump-component-item');
    breadcumpItem.forEach(elem => {
        if (!elem.isEqualNode(e)) {
            elem.setAttribute("checked", "false");
            elem.childNodes[1].style = 'transform: rotate(0); transition: all ease .3s';
            elem.childNodes[3].style = 'display: none';
            elem.style = 'border-bottom: none';
        }
    });
    if (e.getAttribute("checked") == "false") {
        e.setAttribute("checked", "true");
        e.childNodes[1].style = 'transform: rotate(180deg); transition: all ease .3s';
        e.childNodes[3].style = 'display: block';
        e.style = 'border-bottom: #000 2px solid';
    }
    else {
        e.setAttribute("checked", "false");
        e.childNodes[1].style = 'transform: rotate(0); transition: all ease .3s';
        e.childNodes[3].style = 'display: none';
        e.style = 'border-bottom: none';
    }
}