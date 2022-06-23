// breadcump when click component item
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
let listOfCourses = {
    "courses":
    [
    {"id": "1", "name": "UP TO 50% OFF MSRP!", "price": "$27.99", "desc": "Summer Dress", "featureImage":"https://m.media-amazon.com/images/G/01/6pm/promos/220505/tryptic-dresses.jpg", size: "L"},
    {"id": "2", "name": "UP TO 50% OFF MSRP!", "price": "$80.26", "desc": "Leverage Heeled Sandal", "featureImage":"https://m.media-amazon.com/images/G/01/6pm/promos/220505/tryptic-sandals.jpg" , size: "M"},
    {"id": "3", "name": "UP TO 50% OFF MSRP!", "price": "$24.12", "desc": "Fashionable short-sleeved shirt", "featureImage":"https://m.media-amazon.com/images/G/01/6pm/promos/220505/tryptic-mens.jpg", size: "XL"},
    ]
}

let parent = document.querySelector('#parent');

for(let i=0; i<listOfCourses.courses.length; i++){
    let course = document.createElement('div');
    course.setAttribute('class', 'col-3');
    course.classList.add('text-center');
    course.classList.add('card');
    course.setAttribute('id', 'course-'+(i+1)+'');
    course.innerHTML = `<img src="`+listOfCourses.courses[i].featureImage+`" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">`+listOfCourses.courses[i].name+`</p>
                            <a href="#" class="btn border border-black btn-Detail" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</a>
                        </div>`
    parent.appendChild(course);
}

let btnDetail = document.querySelectorAll('.btn-Detail');


for(let i=0; i<btnDetail.length; i++){
    btnDetail[i].addEventListener('click', () => {
        let detailOfCourse = document.createElement('div');
        detailOfCourse.setAttribute('class', 'modal');
        detailOfCourse.classList.add('fade');
        detailOfCourse.setAttribute('id', 'staticBackdrop')
        detailOfCourse.setAttribute('tabindex', '-1');
        detailOfCourse.setAttribute('data-bs-backdrop', 'static');
        detailOfCourse.setAttribute('data-bs-keyboard', 'false');
        detailOfCourse.setAttribute('aria-labelledby', 'staticBackdropLabel');
        detailOfCourse.setAttribute('aria-hidden', 'true')
        detailOfCourse.innerHTML = `<div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <p class="modal-title" id="staticBackdropLabel">`+listOfCourses.courses[i].name+`</p>
                                            </div>
                                        <div class="modal-body">
                                        <img src="`+listOfCourses.courses[i].featureImage+`" class="card-img-top" alt="...">
                                            <p>`+listOfCourses.courses[i].desc+`</p>
                                            <p>Giá: `+listOfCourses.courses[i].price+`</p>
                                            <p>Size: `+listOfCourses.courses[i].size+`</p>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary btn-CloseDetail" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-danger btn-AddToBag" data-bs-dismiss="modal">Add To Bag</button>
                                        </div>
                                       
                                        </div>
                                    </div>`;
        parent.appendChild(detailOfCourse);
        
        let btnCloseDetail = document.querySelectorAll('.btn-CloseDetail');
        for(let i=0; i<btnCloseDetail.length; i++){
            btnCloseDetail[i].addEventListener('click', function(){
                parent.removeChild(detailOfCourse);
            });
        };
        let bagparent = document.querySelector('#bag-parent');

        let btnAddToBag = document.querySelectorAll('.btn-AddToBag');
        for(let i=0; i<btnAddToBag.length; i++){
            btnAddToBag[i].addEventListener('click', function(){
                bagparent.appendChild(detailOfCourse);

            });
        };
    });
};
