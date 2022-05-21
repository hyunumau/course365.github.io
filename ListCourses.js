var gCoursesDB = {
    description: "This DB includes all courses in system",
    courses: [
        {
            id: 0,
            courseCode: "FE_WEB_ANGULAR_101",
            courseName: "How to easily create a website with Angular",
            price: 750,
            discountPrice: 600,
            duration: "3h 56m",
            level: "Beginner",
            coverImage: "images/courses/course-angular.jpg",
            teacherName: "Morris Mccoy",
            teacherPhoto: "images/teacher/morris_mccoy.jpg",
            isPopular: false,
            isTrending: true
        },
        {
            id: 1,
            courseCode: "BE_WEB_PYTHON_301",
            courseName: "The Python Course: build web application",
            price: 1050,
            discountPrice: 900,
            duration: "4h 30m",
            level: "Advanced",
            coverImage: "images/courses/course-python.jpg",
            teacherName: "Claire Robertson",
            teacherPhoto: "images/teacher/claire_robertson.jpg",
            isPopular: false,
            isTrending: true
        },
        {
            id: 2,
            courseCode: "FE_WEB_GRAPHQL_104",
            courseName: "GraphQL: introduction to graphQL for beginners",
            price: 850,
            discountPrice: 650,
            duration: "2h 15m",
            level: "Intermediate",
            coverImage: "images/courses/course-graphql.jpg",
            teacherName: "Ted Hawkins",
            teacherPhoto: "images/teacher/ted_hawkins.jpg",
            isPopular: true,
            isTrending: false
        },
        {
            id: 3,
            courseCode: "FE_WEB_JS_210",
            courseName: "Getting Started with JavaScript",
            price: 550,
            discountPrice: 300,
            duration: "3h 34m",
            level: "Beginner",
            coverImage: "images/courses/course-javascript.jpg",
            teacherName: "Ted Hawkins",
            teacherPhoto: "images/teacher/ted_hawkins.jpg",
            isPopular: true,
            isTrending: true
        },
        {
            id: 4,
            courseCode: "FE_WEB_CSS_111",
            courseName: "CSS: ultimate CSS course from beginner to advanced",
            price: 750,
            discountPrice: 600,
            duration: "3h 56m",
            level: "Beginner",
            coverImage: "images/courses/course-css.jpg",
            teacherName: "Juanita Bell",
            teacherPhoto: "images/teacher/juanita_bell.jpg",
            isPopular: true,
            isTrending: true
        },
        {
            id: 5,
            courseCode: "FE_WEB_WORDPRESS_111",
            courseName: "Complete Wordpress themes & plugins",
            price: 1050,
            discountPrice: 900,
            duration: "4h 30m",
            level: "Advanced",
            coverImage: "images/courses/course-wordpress.jpg",
            teacherName: "Clevaio Simon",
            teacherPhoto: "images/teacher/clevaio_simon.jpg",
            isPopular: true,
            isTrending: false
        }
    ]
}
var gId = -1;
var gIdDelete = -1
$(document).ready(function () {

    //Thêm C
    $("#btn-add-modal").on("click", function () {
        $("#create-modal").modal("show");
    })
    $("#btn-add").on("click", function () {
        onBtnInsertClick();
    });

    //Đọc R
    onPageLoading();

    //Sửa U
    $(document).on("click", ".btn-edit", function () {
        console.log("Nút sửa được bấm ");
        gId = onBtnClick(this);
        showInfoUpdate(gId);
        $("#update-modal").modal("show");
    })
    $("#btn-update").on("click", function () {
        onBtnUpdateClick();
    });

    //Xóa D
    $(document).on("click", ".btn-delete", function () {
        console.log("Nút xóa được bấm ");
        gIdDelete = onBtnDelClick(this);
        $("#delete-confirm-modal").modal("show");
    })
    $("#btn-confirm-delete").on("click", function () {
        onBtnDeleteClick();
    });

    function onBtnInsertClick() {
        var vDataObj = {
            id: 14,
            courseCode: "FE_WEB_WORDPRESS_111",
            courseName: "Complete Wordpress themes & plugins",
            price: 1050,
            discountPrice: 900,
            duration: "4h 30m",
            level: "Advanced",
            coverImage: "images/courses/course-wordpress.jpg",
            teacherName: "Clevaio Simon",
            teacherPhoto: "images/teacher/clevaio_simon.jpg",
            isPopular: true,
            isTrending: false
        }
        console.log(gId);
        getInfo(vDataObj);
        if (validateObj(vDataObj)) {
            $('.card-new').empty();
            gCoursesDB.courses.push(vDataObj);
            loadCourses();
            $("#create-modal").modal("hide");
            resetModal();
        };
    }
    function onBtnUpdateClick() {

        dataUpdate(gCoursesDB.courses[gId])
        if (validateObjUpdate(gCoursesDB.courses[gId])) {
            $('.card-new').empty();
            loadCourses();
            $("#update-modal").modal("hide");
            resetModal();
        };
    }
    function onBtnDeleteClick() {
        removeElement(gCoursesDB.courses, gIdDelete);
        // B4: xử lý front-end
        $('.card-new').empty();
        loadCourses();
        $("#delete-confirm-modal").modal("hide");
    }
    function onPageLoading() {
        loadCourses();
    }
    function loadCourses() {
        for (var bI = 0; bI < gCoursesDB.courses.length; bI++) {
            $('.card-new').append(
                `<div class="col-sm-3 mt-4">
                <div class="card">
                <img id="img-trend-`+ gCoursesDB.courses[bI].id + `" class="card-img-top" src=` + gCoursesDB.courses[bI].coverImage + ` alt="Card image cap">
                <div class="card-body">
                  <a id="a-name-trend-`+ gCoursesDB.courses[bI].id + `" class="font-weight-bold" href="#">` + gCoursesDB.courses[bI].courseName + `</a>
                  <p id="p-time-trend-`+ gCoursesDB.courses[bI].id + `" class="card-text mt-2"><i class="fas fa-clock"></i>&nbsp;` + gCoursesDB.courses[bI].duration + " " + gCoursesDB.courses[bI].level + `</p>
                  <span id="span-trendprice-`+ gCoursesDB.courses[bI].id + `" class="font-weight-bold">$` + gCoursesDB.courses[bI].discountPrice + `&nbsp;</span><span id="span-trendprice-sale-` + gCoursesDB.courses[bI].id + `" class="gachngang">$` + gCoursesDB.courses[bI].price + `</span>
                </div>
                <div class="card-footer text-muted">
                  <div class="row">
                    <div class="col-sm-10">
                      <img id="img-teacher-trend-`+ gCoursesDB.courses[bI].id + `" src=` + gCoursesDB.courses[bI].teacherPhoto + `
                        class="img-avt rounded-circle">&nbsp;&nbsp;&nbsp;<span id="span-trend-`+ bI + `">` + gCoursesDB.courses[bI].teacherName + `</span>
                    </div>
                    <div class="col-sm-1">
                      <i class="far fa-bookmark"></i>
                    </div>
                  </div>
                  <div class="row mt-2 d-flex justify-content-end">
                    <button id="btn-edit`+ gCoursesDB.courses[bI].id + `" class="btn-edit btn btn-primary">Edit</button>
                    <button id="btn-delete`+ gCoursesDB.courses[bI].id + `" class="btn-delete btn btn-danger">Delete</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>`);
        }
    }

    // hàm sinh ra đc id tự tăng tiếp theo, dùng khi Thêm mới phần tử
    function getNextId() {
        var vNextId = 0;
        // Nếu mảng chưa có đối tượng nào thì Id = 1
        if (gCoursesDB.courses.length == 0) {
            vNextId = 1;
        }
        // Id tiếp theo bằng Id của phần tử cuối cùng + thêm 1    
        else {
            vNextId = gCoursesDB.courses[gCoursesDB.courses.length - 1].id + 1;
        }
        return vNextId;
    }
    function getInfo(paramObj) {
        paramObj.id = getNextId();
        paramObj.courseCode = $("#inp-courseCode").val().trim();
        paramObj.courseName = $("#inp-courseName").val().trim();

        paramObj.price = $("#inp-price").val().trim();
        paramObj.discountPrice = $("#inp-discountPrice").val().trim();
        paramObj.duration = $("#inp-duration").val().trim();

        paramObj.level = $("#inp-level").val().trim();
        paramObj.coverImage = $("#inp-coverImage").val().trim();
        paramObj.teacherName = $("#inp-teacherName").val().trim();

        paramObj.teacherPhoto = $("#inp-teacherPhoto").val().trim();
        paramObj.isPopular = $("#select-isPopular").val();
        paramObj.isTrending = $("#select-isTrending").val();
    }
    function validateObj(paramObj) {
        if (paramObj.courseCode == "") {
            console.log("Chưa nhập courseCode");
            return false;
        }
        else if (paramObj.courseName == "") {
            console.log("Chưa nhập courseName");
            return false;
        }
        else if (paramObj.price == "") {
            console.log("Chưa nhập price");
            return false;
        }
        else if (paramObj.discountPrice == "") {
            console.log("Chưa nhập discountPrice");
            return false;
        }
        else if (paramObj.duration == "") {
            console.log("Chưa nhập duration");
            return false;
        }
        else if (paramObj.level == "") {
            console.log("Chưa nhập level");
            return false;
        }
        else if (paramObj.coverImage == "") {
            console.log("Chưa nhập coverImage");
            return false;
        }
        else if (paramObj.teacherName == "") {
            console.log("Chưa nhập teacherName");
            return false;
        }
        else if (paramObj.teacherPhoto == "") {
            console.log("Chưa nhập teacherPhoto");
            return false;
        }
        return true;
    }
    function resetModal() {
        $("#inp-courseCode").val("");
        $("#inp-courseName").val("");

        $("#inp-price").val("");
        $("#inp-discountPrice").val("");
        $("#inp-duration").val("");

        $("#inp-level").val("");
        $("#inp-coverImage").val("");
        $("#inp-teacherName").val("");

        $("#inp-teacherPhoto").val("");
        $("#select-isPopular").val("");
        $("#select-isTrending").val("");
    }

    function onBtnClick(paramElement) {
        "use strict";
        var vClick = $(paramElement).attr('id');
        var vId = vClick.split("btn-edit");
        return vId[1];
    }

    function onBtnDelClick(paramElement) {
        "use strict";
        var vClick = $(paramElement).attr('id');
        var vId = vClick.split("btn-delete");
        return vId[1];
    }
    function showInfoUpdate(paramId) {
        $("#inp-courseCode-update").val(gCoursesDB.courses[paramId].courseCode);
        $("#inp-courseName-update").val(gCoursesDB.courses[paramId].courseName);

        $("#inp-price-update").val(gCoursesDB.courses[paramId].price);
        $("#inp-discountPrice-update").val(gCoursesDB.courses[paramId].discountPrice);
        $("#inp-duration-update").val(gCoursesDB.courses[paramId].duration);

        $("#inp-level-update").val(gCoursesDB.courses[paramId].level);
        $("#inp-coverImage-update").val(gCoursesDB.courses[paramId].coverImage);
        $("#inp-teacherName-update").val(gCoursesDB.courses[paramId].teacherName);

        $("#inp-teacherPhoto-update").val(gCoursesDB.courses[paramId].teacherPhoto);

        if (gCoursesDB.courses[paramId].isPopular) {
            $("#select-isPopular-update").val(1);
        }
        else { $("#select-isPopular-update").val(0); }

        if (gCoursesDB.courses[paramId].isTrending) {
            $("#select-isTrending-update").val(1);
        }
        else { $("#select-isTrending-update").val(0); }

    }
    function validateObjUpdate(paramObj) {
        if (paramObj.courseCode == "") {
            console.log("Chưa nhập courseCode");
            return false;
        }
        else if (paramObj.courseName == "") {
            console.log("Chưa nhập courseName");
            return false;
        }
        else if (paramObj.price == "") {
            console.log("Chưa nhập price");
            return false;
        }
        else if (paramObj.discountPrice == "") {
            console.log("Chưa nhập discountPrice");
            return false;
        }
        else if (paramObj.duration == "") {
            console.log("Chưa nhập duration");
            return false;
        }
        else if (paramObj.level == "") {
            console.log("Chưa nhập level");
            return false;
        }
        else if (paramObj.coverImage == "") {
            console.log("Chưa nhập coverImage");
            return false;
        }
        else if (paramObj.teacherName == "") {
            console.log("Chưa nhập teacherName");
            return false;
        }
        else if (paramObj.teacherPhoto == "") {
            console.log("Chưa nhập teacherPhoto");
            return false;
        }
        return true;
    }
    function dataUpdate(paramObj) {
        paramObj.courseCode = $("#inp-courseCode-update").val().trim();
        paramObj.courseName = $("#inp-courseName-update").val().trim();

        paramObj.price = $("#inp-price-update").val().trim();
        paramObj.discountPrice = $("#inp-discountPrice-update").val().trim();
        paramObj.duration = $("#inp-duration-update").val().trim();

        paramObj.level = $("#inp-level-update").val().trim();
        paramObj.coverImage = $("#inp-coverImage-update").val().trim();
        paramObj.teacherName = $("#inp-teacherName-update").val().trim();

        paramObj.teacherPhoto = $("#inp-teacherPhoto-update").val().trim();
        paramObj.isPopular = $("#select-isPopular-update").val();
        paramObj.isTrending = $("#select-isTrending-update").val();
    }
    function removeElement(paramArr, paramId) {
        var vIndex = 0
        var vResult = -1;
        while (vResult == -1)
            if (paramArr[vIndex].id == paramId) {
                vResult = vIndex;
                paramArr.splice(vResult, 1);
            }
            else {
                vIndex++;
            }
    }

})
