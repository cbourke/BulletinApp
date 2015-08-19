
function displayErrorMessage() {
  var errorDiv = '<div class="alert alert-danger alert-dismissible" role="alert">' +
                 '<button type="button" class="close" data-dismiss="alert">' +
                 '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                 '<strong>ERROR!</strong> Unable to fetch course details</div>';
  $('#courseInfo').empty();
  $('#courseInfo').append(errorDiv);
  $('#courseInfo').hide().fadeIn("slow");
}

function displayCourseInfo(course) {
  //first strip out the html div tags
  var desc = course.description;
  var prereq = course.prerequisiteText ? course.prerequisiteText : "None";

  var infoDiv = '<div class="alert alert-info info-dismissible" role="alert">' +
                 '<button type="button" class="close" data-dismiss="alert">' +
                 '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                 '<strong>'+course.subject+' '+course.number+' - '+course.title+'</strong> '+desc+
                 '  Prerequisites: ' + prereq+'</div>';
  $('#courseInfo').empty();
  $('#courseInfo').append(infoDiv);
  $('#courseInfo').hide().fadeIn("slow");

}

function searchCourse() {
  $("#courseInfo").html("<img src='../common/images/loading.gif'/>");
  var courseSubject = $("#inputSubject").val();
  var courseNumber  = $("#inputNumber").val();
  $.ajax({
    url: "https://bulletin.unl.edu/undergraduate/courses/" + courseSubject + "/" + courseNumber,
		dataType: "json",
    data: {
      format: "json"
    },
    success: function(json) {
      console.log(json);
      //create a course object
      var course = {
        subject : json.courseCodes[0].courseNumber,
				number  : json.courseCodes[0].subject,
        title   : json.title,
        prerequisiteText : json.prerequisite,
				description: json.description,
		  };
      displayCourseInfo(course);
    },
		error: function() {
      displayErrorMessage();
    }
  });
  return;
}
