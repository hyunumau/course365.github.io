var gCoursesDB = {
    description: "This DB includes all courses in system",
    courses: [
        {
            id: 1,
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
            id: 2,
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
            id: 5,
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
            id: 6,
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
            id: 8,
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
    ]
}
function onPageLoading() {
    loadPopular();
    loadTrending();
}

function loadPopular() {
    var vPopular = [];
    for (var bI = 0; bI < gCoursesDB.courses.length; bI++) {
        if (gCoursesDB.courses[bI].isPopular) {
            vPopular.push(gCoursesDB.courses[bI]);
        }
    }
    for (var bIndex = 0; bIndex < vPopular.length; bIndex++) {
        //Ảnh nền môn học
        $("#img-pop-" + (bIndex + 1)).attr("src", vPopular[bIndex].coverImage);

        //Tên môn học
        $("#a-name-pop-" + (bIndex + 1)).html(vPopular[bIndex].courseName);

        //Thời gian
        $("#p-time-pop-" + (bIndex + 1)).html('<i class="fas fa-clock"></i>&nbsp;' + vPopular[bIndex].duration + " " + vPopular[bIndex].level);

        //Học phí
        $("#span-price-" + (bIndex + 1)).html("$" + vPopular[bIndex].discountPrice + "&nbsp;&nbsp;&nbsp;");

        $("#span-price-sale-" + (bIndex + 1)).html("$" + vPopular[bIndex].price);

        //Ảnh giáo viên
        $("#img-teacher-pop-" + (bIndex + 1)).attr("src", vPopular[bIndex].teacherPhoto);

        //Tên giáo viên
        $("#span-pop-" + (bIndex + 1)).html(vPopular[bIndex].teacherName);
    }
}

function loadTrending() {
    var vTrending = [];
    for (var bI = 0; bI < gCoursesDB.courses.length; bI++) {
        if (gCoursesDB.courses[bI].isTrending) {
            vTrending.push(gCoursesDB.courses[bI]);
        }
    }
    for (var bIndex = 0; bIndex < vTrending.length; bIndex++) {
        //Ảnh nền môn học
        $("#img-trend-" + (bIndex + 1)).attr("src", vTrending[bIndex].coverImage);
    
        //Tên môn học
        $("#a-name-trend-" + (bIndex + 1)).html(vTrending[bIndex].courseName);
    
        //Thời gian
        $("#p-time-trend-" + (bIndex + 1)).html('<i class="fas fa-clock"></i>&nbsp;' + vTrending[bIndex].duration + " " + vTrending[bIndex].level);
    
        //Học phí
        $("#span-trendprice-" + (bIndex + 1)).html("$" + vTrending[bIndex].discountPrice + "&nbsp;&nbsp;&nbsp;");
    
        $("#span-trendprice-sale-" + (bIndex + 1)).html("$" + vTrending[bIndex].price);
    
        //Ảnh giáo viên
        $("#img-teacher-trend-" + (bIndex + 1)).attr("src", vTrending[bIndex].teacherPhoto);
    
        //Tên giáo viên
        $("#span-trend-" + (bIndex + 1)).html(vTrending[bIndex].teacherName);
    }
}
