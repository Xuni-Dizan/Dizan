// courses-data.js
const coursesData = {
    1: {
      id: 1,
      title: "Khóa học An Toàn Thông Tin",
      description: "Khóa học chuyên sâu về bảo mật và an toàn thông tin cho doanh nghiệp và cá nhân.",
      instructor: "Nguyễn Văn A",
      duration: "8 tuần",
      level: "Trung cấp",
      category: "an-toan-thong-tin",
      price: 1200000,
      rating: 4.8,
      students: 350,
      image: "img/courses/security.jpg",
      lessons: [
        {
          id: 1,
          title: "Giới thiệu về An Toàn Thông Tin",
          content: "<p>Nội dung chi tiết về bài học 1, giới thiệu các khái niệm cơ bản về an toàn thông tin.</p>",
          video: "https://www.youtube.com/embed/example1"
        },
        {
          id: 2,
          title: "Các Loại Tấn Công Mạng",
          content: "<p>Nội dung chi tiết về các loại tấn công mạng phổ biến và cách nhận diện.</p>",
          video: "https://www.youtube.com/embed/example2"
        },
        {
          id: 3,
          title: "Phương Pháp Phòng Chống",
          content: "<p>Các biện pháp phòng chống tấn công mạng hiệu quả cho doanh nghiệp.</p>",
          video: "https://www.youtube.com/embed/example3"
        }
      ]
    },
    2: {
      id: 2,
      title: "Khóa học Lập Trình Phần Mềm",
      description: "Khóa học toàn diện về phát triển phần mềm từ cơ bản đến nâng cao.",
      instructor: "Trần Thị B",
      duration: "10 tuần",
      level: "Cơ bản",
      category: "lap-trinh",
      price: 1500000,
      rating: 4.5,
      students: 520,
      image: "img/courses/programming.jpg",
      lessons: [
        {
          id: 1,
          title: "Nền tảng lập trình",
          content: "<p>Giới thiệu về các nguyên tắc cơ bản trong lập trình phần mềm.</p>",
          video: "https://www.youtube.com/embed/example4"
        },
        {
          id: 2,
          title: "Cấu trúc dữ liệu và thuật toán",
          content: "<p>Học về các cấu trúc dữ liệu phổ biến và thuật toán cơ bản.</p>",
          video: "https://www.youtube.com/embed/example5"
        },
        {
          id: 3,
          title: "Xây dựng ứng dụng đầu tiên",
          content: "<p>Hướng dẫn xây dựng một ứng dụng hoàn chỉnh từ A-Z.</p>",
          video: "https://www.youtube.com/embed/example6"
        }
      ]
    },
    3: {
      id: 3,
      title: "Khóa học AI & Máy học",
      description: "Tìm hiểu về trí tuệ nhân tạo và ứng dụng máy học trong thực tế.",
      instructor: "Lê Văn C",
      duration: "12 tuần",
      level: "Nâng cao",
      category: "ai",
      price: 2200000,
      rating: 4.9,
      students: 280,
      image: "img/courses/ai.jpg",
      lessons: [
        {
          id: 1,
          title: "Giới thiệu về AI và Máy học",
          content: "<p>Các khái niệm cơ bản về AI và máy học, lịch sử phát triển.</p>",
          video: "https://www.youtube.com/embed/example7"
        },
        {
          id: 2,
          title: "Xử lý dữ liệu và mô hình học máy",
          content: "<p>Phương pháp xử lý dữ liệu và xây dựng các mô hình học máy.</p>",
          video: "https://www.youtube.com/embed/example8"
        },
        {
          id: 3,
          title: "Ứng dụng AI trong doanh nghiệp",
          content: "<p>Các trường hợp ứng dụng AI thực tế trong doanh nghiệp.</p>",
          video: "https://www.youtube.com/embed/example9"
        }
      ]
    },
    4: {
        id: 4,
        title: "Khóa học Phát triển Web",
        description: "Học cách xây dựng website hiện đại với HTML, CSS và JavaScript.",
        instructor: "Phạm Thị D",
        duration: "8 tuần",
        level: "Cơ bản",
        category: "lap-trinh",
        price: 1100000,
        rating: 4.6,
        students: 420,
        image: "img/courses/web.jpg",
        lessons: [
          {
            id: 1,
            title: "Giới thiệu về phát triển web",
            content: "<p>Tổng quan về phát triển web và các công nghệ cơ bản.</p>",
            video: "https://www.youtube.com/embed/example10"
          },
          {
            id: 2,
            title: "HTML và CSS cơ bản",
            content: "<p>Học cách tạo cấu trúc và định dạng website với HTML và CSS.</p>",
            video: "https://www.youtube.com/embed/example11"
          },
          {
            id: 3,
            title: "JavaScript cho người mới bắt đầu",
            content: "<p>Tìm hiểu về JavaScript và cách tạo tương tác cho website.</p>",
            video: "https://www.youtube.com/embed/example12"
          }
        ]
      },
      
      5: {
        id: 5,
        title: "Khóa học Mạng máy tính",
        description: "Tìm hiểu về cơ sở hạ tầng mạng, giao thức và triển khai hệ thống mạng.",
        instructor: "Nguyễn Văn A",
        duration: "10 tuần",
        level: "Trung cấp",
        category: "an-toan-thong-tin",
        price: 1400000,
        rating: 4.7,
        students: 310,
        image: "img/courses/network.jpg",
        lessons: [
          {
            id: 1,
            title: "Cơ bản về mạng máy tính",
            content: "<p>Giới thiệu về kiến trúc mạng và các khái niệm cơ bản.</p>",
            video: "https://www.youtube.com/embed/example13"
          },
          {
            id: 2,
            title: "Giao thức TCP/IP",
            content: "<p>Tìm hiểu về bộ giao thức TCP/IP và các ứng dụng của nó.</p>",
            video: "https://www.youtube.com/embed/example14"
          },
          {
            id: 3,
            title: "Thiết kế và triển khai mạng",
            content: "<p>Hướng dẫn thiết kế và triển khai hệ thống mạng cho doanh nghiệp.</p>",
            video: "https://www.youtube.com/embed/example15"
          }
        ]
      },
      
      6: {
        id: 6,
        title: "Khóa học Phân tích dữ liệu",
        description: "Học cách phân tích và trực quan hóa dữ liệu với Python và các thư viện phổ biến.",
        instructor: "Trần Thị B",
        duration: "12 tuần",
        level: "Nâng cao",
        category: "ai",
        price: 1800000,
        rating: 4.9,
        students: 240,
        image: "img/courses/data.jpg",
        lessons: [
          {
            id: 1,
            title: "Giới thiệu về khoa học dữ liệu",
            content: "<p>Tổng quan về khoa học dữ liệu và các công cụ phân tích.</p>",
            video: "https://www.youtube.com/embed/example16"
          },
          {
            id: 2,
            title: "Python cho phân tích dữ liệu",
            content: "<p>Sử dụng Python và các thư viện như Pandas, NumPy để xử lý dữ liệu.</p>",
            video: "https://www.youtube.com/embed/example17"
          },
          {
            id: 3,
            title: "Trực quan hóa dữ liệu",
            content: "<p>Tạo các biểu đồ và dashboard trực quan với Matplotlib và Seaborn.</p>",
            video: "https://www.youtube.com/embed/example18"
          }
        ]
      }
  };
  
  // Hàm tiện ích để lấy danh sách tất cả khóa học
  function getAllCourses() {
    return Object.values(coursesData);
  }
  
  // Hàm lấy danh sách các giá trị duy nhất cho bộ lọc
  function getUniqueFilterValues(field) {
    const values = new Set();
    getAllCourses().forEach(course => {
      values.add(course[field]);
    });
    return Array.from(values).sort();
  }
  