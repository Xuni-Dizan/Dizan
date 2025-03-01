// courses.js
document.addEventListener('DOMContentLoaded', () => {
    // Các biến lọc và trạng thái
    const state = {
      filters: {
        search: '',
        category: '',
        level: '',
        instructor: '',
        duration: ''
      },
      sortBy: 'default',
      allCourses: getAllCourses(),
      filteredCourses: [],
      pagination: {
        coursesPerPage: 3,
        currentPage: 1
      }
    };
  
    // Các phần tử DOM
    const elements = {
      coursesContainer: document.getElementById('courses-container'),
      searchInput: document.getElementById('search-input'),
      searchButton: document.getElementById('search-button'),
      filterToggle: document.getElementById('filter-toggle'),
      filterPanel: document.getElementById('filter-panel'),
      categoryFilter: document.getElementById('category-filter'),
      levelFilter: document.getElementById('level-filter'),
      instructorFilter: document.getElementById('instructor-filter'),
      durationFilter: document.getElementById('duration-filter'),
      applyFilters: document.getElementById('apply-filters'),
      resetFilters: document.getElementById('reset-filters'),
      sortSelect: document.getElementById('sort-select'),
      filterResults: document.getElementById('filter-results'),
      resultCount: document.getElementById('result-count'),
      clearFilters: document.getElementById('clear-filters'),
      // Phân trang
      prevPage: document.getElementById('prev-page'),
      nextPage: document.getElementById('next-page'),
      currentPageEl: document.getElementById('current-page'),
      totalPagesEl: document.getElementById('total-pages')
    };
  
    // Khởi tạo trang
    initializeFilters();
    state.filteredCourses = [...state.allCourses];
    renderCourses();
  
    // Xử lý sự kiện
    elements.searchButton.addEventListener('click', handleSearch);
    elements.searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') handleSearch();
    });
    
    elements.filterToggle.addEventListener('click', () => {
      elements.filterPanel.style.display = elements.filterPanel.style.display === 'none' ? 'block' : 'none';
    });
    
    elements.applyFilters.addEventListener('click', applyFilters);
    elements.resetFilters.addEventListener('click', resetFilters);
    elements.clearFilters.addEventListener('click', resetFilters);
    elements.sortSelect.addEventListener('change', handleSort);
    
    // Sự kiện phân trang
    elements.prevPage.addEventListener('click', (e) => {
      e.preventDefault();
      if (state.pagination.currentPage > 1) {
        state.pagination.currentPage--;
        renderCourses();
      }
    });
    
    elements.nextPage.addEventListener('click', (e) => {
      e.preventDefault();
      const totalPages = getTotalPages();
      if (state.pagination.currentPage < totalPages) {
        state.pagination.currentPage++;
        renderCourses();
      }
    });
  
    // Hàm khởi tạo các bộ lọc
    function initializeFilters() {
      // Khởi tạo bộ lọc giảng viên
      const instructors = getUniqueFilterValues('instructor');
      instructors.forEach(instructor => {
        const option = document.createElement('option');
        option.value = instructor;
        option.textContent = instructor;
        elements.instructorFilter.appendChild(option);
      });
  
      // Khởi tạo bộ lọc thời lượng
      const durations = getUniqueFilterValues('duration');
      durations.forEach(duration => {
        const option = document.createElement('option');
        option.value = duration;
        option.textContent = duration;
        elements.durationFilter.appendChild(option);
      });
    }
  
    // Hàm xử lý tìm kiếm
    function handleSearch() {
      state.filters.search = elements.searchInput.value.trim().toLowerCase();
      state.pagination.currentPage = 1; // Reset về trang đầu tiên khi tìm kiếm
      filterCourses();
      renderCourses();
    }
  
    // Hàm áp dụng bộ lọc
    function applyFilters() {
      state.filters.category = elements.categoryFilter.value;
      state.filters.level = elements.levelFilter.value;
      state.filters.instructor = elements.instructorFilter.value;
      state.filters.duration = elements.durationFilter.value;
      
      state.pagination.currentPage = 1; // Reset về trang đầu tiên khi lọc
      filterCourses();
      renderCourses();
      
      // Ẩn panel bộ lọc sau khi áp dụng
      elements.filterPanel.style.display = 'none';
    }
  
    // Hàm đặt lại bộ lọc
    function resetFilters() {
      elements.searchInput.value = '';
      elements.categoryFilter.value = '';
      elements.levelFilter.value = '';
      elements.instructorFilter.value = '';
      elements.durationFilter.value = '';
      elements.sortSelect.value = 'default';
      
      state.filters = {
        search: '',
        category: '',
        level: '',
        instructor: '',
        duration: ''
      };
      state.sortBy = 'default';
      state.pagination.currentPage = 1; // Reset về trang đầu tiên
      
      filterCourses();
      renderCourses();
      
      // Ẩn panel bộ lọc sau khi đặt lại
      elements.filterPanel.style.display = 'none';
    }
  
    // Hàm xử lý sắp xếp
    function handleSort() {
      state.sortBy = elements.sortSelect.value;
      sortCourses();
      renderCourses();
    }
  
    // Hàm lọc khóa học
    function filterCourses() {
      const { search, category, level, instructor, duration } = state.filters;
      
      state.filteredCourses = state.allCourses.filter(course => {
        // Lọc theo từ khóa tìm kiếm
        if (search && !course.title.toLowerCase().includes(search) && 
            !course.description.toLowerCase().includes(search)) {
          return false;
        }
        
        // Lọc theo danh mục
        if (category && course.category !== category) {
          return false;
        }
        
        // Lọc theo cấp độ
        if (level && course.level !== level) {
          return false;
        }
        
        // Lọc theo giảng viên
        if (instructor && course.instructor !== instructor) {
          return false;
        }
        
        // Lọc theo thời lượng
        if (duration && course.duration !== duration) {
          return false;
        }
        
        return true;
      });
      
      // Hiển thị thông báo kết quả
      if (isAnyFilterActive()) {
        elements.filterResults.classList.remove('d-none');
        elements.resultCount.textContent = state.filteredCourses.length;
      } else {
        elements.filterResults.classList.add('d-none');
      }
    }
  
    // Hàm kiểm tra xem có bộ lọc nào đang hoạt động
    function isAnyFilterActive() {
      const { search, category, level, instructor, duration } = state.filters;
      return search || category || level || instructor || duration;
    }
  
    // Hàm sắp xếp khóa học
    function sortCourses() {
      switch (state.sortBy) {
        case 'price-asc':
          state.filteredCourses.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          state.filteredCourses.sort((a, b) => b.price - a.price);
          break;
        case 'rating-desc':
          state.filteredCourses.sort((a, b) => b.rating - a.rating);
          break;
        case 'students-desc':
          state.filteredCourses.sort((a, b) => b.students - a.students);
          break;
        default:
          // Mặc định sắp xếp theo ID
          state.filteredCourses.sort((a, b) => a.id - b.id);
      }
    }
  
    // Hàm tính tổng số trang
    function getTotalPages() {
      return Math.ceil(state.filteredCourses.length / state.pagination.coursesPerPage);
    }
  
    // Hàm lấy khóa học cho trang hiện tại
    function getCurrentPageCourses() {
      const { currentPage, coursesPerPage } = state.pagination;
      const startIndex = (currentPage - 1) * coursesPerPage;
      const endIndex = startIndex + coursesPerPage;
      return state.filteredCourses.slice(startIndex, endIndex);
    }
  
    // Hàm cập nhật UI phân trang
    function updatePagination() {
      const totalPages = getTotalPages();
      elements.currentPageEl.textContent = state.pagination.currentPage;
      elements.totalPagesEl.textContent = totalPages;
      
      // Cập nhật trạng thái nút Previous
      if (state.pagination.currentPage <= 1) {
        elements.prevPage.classList.add('disabled');
      } else {
        elements.prevPage.classList.remove('disabled');
      }
      
      // Cập nhật trạng thái nút Next
      if (state.pagination.currentPage >= totalPages || totalPages === 0) {
        elements.nextPage.classList.add('disabled');
      } else {
        elements.nextPage.classList.remove('disabled');
      }
    }
  
    // Hàm hiển thị khóa học
    function renderCourses() {
      // Xóa các khóa học hiện tại
      elements.coursesContainer.innerHTML = '';
      
      // Hiển thị thông báo nếu không có khóa học nào
      if (state.filteredCourses.length === 0) {
        elements.coursesContainer.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="alert alert-warning">
              <i class="fas fa-exclamation-triangle me-2"></i>
              Không tìm thấy khóa học nào phù hợp với bộ lọc. Vui lòng thử lại với tiêu chí khác.
            </div>
          </div>
        `;
        
        // Ẩn phân trang khi không có khóa học nào
        elements.prevPage.parentElement.parentElement.classList.add('d-none');
        return;
      }
      
      // Hiển thị phân trang
      elements.prevPage.parentElement.parentElement.classList.remove('d-none');
      
      // Cập nhật thông tin phân trang
      updatePagination();
      
      // Lấy khóa học cho trang hiện tại
      const currentPageCourses = getCurrentPageCourses();
      
      // Thêm các khóa học của trang hiện tại
      currentPageCourses.forEach(course => {
        const courseElement = createCourseElement(course);
        elements.coursesContainer.appendChild(courseElement);
      });
    }
  
    // Hàm tạo phần tử HTML cho khóa học
    function createCourseElement(course) {
      const colElement = document.createElement('div');
      colElement.className = 'col-lg-4 col-md-6 mb-4';
      
      // Format giá tiền
      const formattedPrice = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(course.price);
      
      colElement.innerHTML = `
        <div class="card h-100">
          <img src="${course.image}" class="card-img-top" alt="${course.title}">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-primary">${course.level}</span>
              <span class="text-warning">
                <i class="fas fa-star"></i> ${course.rating.toFixed(1)}
              </span>
            </div>
            <h5 class="card-title">${course.title}</h5>
            <p class="card-text">${course.description}</p>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span><i class="fas fa-user me-2"></i>${course.instructor}</span>
              <span><i class="fas fa-clock me-2"></i>${course.duration}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span class="h5 mb-0 text-primary">${formattedPrice}</span>
              <span class="text-muted"><i class="fas fa-users me-2"></i>${course.students} học viên</span>
            </div>
          </div>
          <div class="card-footer">
            <a href="course-detail.html?course_id=${course.id}" class="btn btn-primary w-100">Xem chi tiết</a>
          </div>
        </div>
      `;
      
      return colElement;
    }
  });
  