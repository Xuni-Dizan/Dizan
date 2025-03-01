document.addEventListener('DOMContentLoaded', () => {
    // Lấy course_id từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course_id');
    
    // Biến theo dõi bài học hiện tại
    let currentLessonIndex = 0;
    let currentCourse = null;
    
    // Kiểm tra xem có course_id không
    if (!courseId || !coursesData[courseId]) {
      displayError("Không tìm thấy khóa học. Vui lòng quay lại trang khóa học.");
      return;
    }
    
    // Lấy dữ liệu khóa học
    currentCourse = coursesData[courseId];
    
    // Hiển thị thông tin khóa học
    displayCourseInfo(currentCourse);
    
    // Hiển thị danh sách bài học
    displayLessonsList(currentCourse.lessons);
    
    // Hiển thị bài học đầu tiên
    displayLesson(currentCourse.lessons[currentLessonIndex]);
    
    // Cập nhật thanh tiến trình
    updateProgressBar(currentLessonIndex, currentCourse.lessons.length);
    
    // Xử lý sự kiện khi chọn bài học
    document.getElementById('lessons-list').addEventListener('click', (e) => {
      if (e.target.tagName === 'LI' || e.target.parentElement.tagName === 'LI') {
        const lessonItem = e.target.tagName === 'LI' ? e.target : e.target.parentElement;
        const lessonIndex = parseInt(lessonItem.dataset.index);
        
        if (!isNaN(lessonIndex)) {
          currentLessonIndex = lessonIndex;
          displayLesson(currentCourse.lessons[currentLessonIndex]);
          updateActiveLessonInList(currentLessonIndex);
          updateProgressBar(currentLessonIndex, currentCourse.lessons.length);
          updateNavigationButtons();
        }
      }
    });
    
    // Xử lý nút bài học trước
    document.getElementById('prev-lesson').addEventListener('click', (e) => {
      e.preventDefault();
      if (currentLessonIndex > 0) {
        currentLessonIndex--;
        displayLesson(currentCourse.lessons[currentLessonIndex]);
        updateActiveLessonInList(currentLessonIndex);
        updateProgressBar(currentLessonIndex, currentCourse.lessons.length);
        updateNavigationButtons();
      }
    });
    
    // Xử lý nút bài học tiếp theo
    document.getElementById('next-lesson').addEventListener('click', (e) => {
      e.preventDefault();
      if (currentLessonIndex < currentCourse.lessons.length - 1) {
        currentLessonIndex++;
        displayLesson(currentCourse.lessons[currentLessonIndex]);
        updateActiveLessonInList(currentLessonIndex);
        updateProgressBar(currentLessonIndex, currentCourse.lessons.length);
        updateNavigationButtons();
      }
    });
    
    // Cập nhật trạng thái nút bài trước/bài tiếp theo
    updateNavigationButtons();
  });
  
  // Hiển thị thông tin khóa học
  function displayCourseInfo(course) {
    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-description').textContent = course.description;
    document.getElementById('course-instructor').textContent = course.instructor;
    document.getElementById('course-duration').textContent = course.duration;
    document.getElementById('course-level').textContent = course.level;
    
    // Cập nhật tiêu đề trang
    document.title = `${course.title} - Dizan`;
  }
  
  // Hiển thị danh sách bài học
  function displayLessonsList(lessons) {
    const lessonsList = document.getElementById('lessons-list');
    lessonsList.innerHTML = '';
    
    lessons.forEach((lesson, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.dataset.index = index;
      listItem.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <span>${lesson.title}</span>
          <span class="badge bg-primary rounded-pill">${index + 1}/${lessons.length}</span>
        </div>
      `;
      
      // Đánh dấu bài học đầu tiên là active
      if (index === 0) {
        listItem.classList.add('active');
      }
      
      lessonsList.appendChild(listItem);
    });
  }
  
  // Hiển thị nội dung bài học
  function displayLesson(lesson) {
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-body').innerHTML = lesson.content;
    document.getElementById('video-frame').src = lesson.video;
  }
  
  // Cập nhật thanh tiến trình
  function updateProgressBar(currentIndex, totalLessons) {
    const progressPercentage = Math.round(((currentIndex + 1) / totalLessons) * 100);
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${progressPercentage}%`;
    progressBar.setAttribute('aria-valuenow', progressPercentage);
  }
  
  // Cập nhật bài học active trong danh sách
  function updateActiveLessonInList(activeIndex) {
    const lessonItems = document.querySelectorAll('#lessons-list li');
    lessonItems.forEach((item, index) => {
      if (index === activeIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  // Cập nhật trạng thái nút bài trước/bài tiếp theo
  function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-lesson');
    const nextButton = document.getElementById('next-lesson');
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course_id');
    const course = coursesData[courseId];
    const currentIndex = parseInt(document.querySelector('#lessons-list li.active')?.dataset.index || 0);
    
    // Vô hiệu hóa nút "Bài trước" nếu đang ở bài đầu tiên
    if (currentIndex === 0) {
      prevButton.classList.add('disabled');
    } else {
      prevButton.classList.remove('disabled');
    }
    
    // Vô hiệu hóa nút "Bài tiếp theo" nếu đang ở bài cuối cùng
    if (currentIndex === course.lessons.length - 1) {
      nextButton.classList.add('disabled');
    } else {
      nextButton.classList.remove('disabled');
    }
  }
  
  // Hiển thị thông báo lỗi
  function displayError(message) {
    document.getElementById('course-title').textContent = 'Lỗi';
    document.getElementById('course-description').textContent = message;
    document.getElementById('lesson-content').style.display = 'none';
    document.getElementById('lessons-list').innerHTML = '<li class="list-group-item">Không có bài học nào</li>';
  }