// Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Scroll vào Header thêm lớp 'scrolled'
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Xử lý Dark Mode
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    // Nếu trang có hero-section thì lưu vào biến, nếu không thì sẽ trả về null
    const heroSection = document.querySelector('.hero-section');
    // Phát hiện sở thích hệ thống
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
    if (currentTheme) {
      document.body.classList.add(currentTheme);
  
      if (currentTheme === 'dark-mode') {
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        // Nếu trang có hero-section thì cập nhật hình nền
        if (heroSection) {
          heroSection.style.backgroundImage = "url('img/hero.jpg')";
        }
      }
    } else if (prefersDarkScheme.matches) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
  
      const icon = themeToggle.querySelector('i');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      if (heroSection) {
        heroSection.style.backgroundImage = "url('img/hero.jpg')";
      }
    }
  
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      let theme = 'light-mode';
      if (document.body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        if (heroSection) {
          heroSection.style.backgroundImage = "url('img/hero.jpg')";
        }
      } else {
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        if (heroSection) {
          heroSection.style.backgroundImage = "url('img/hero.jpg')";
        }
      }
      // Lưu trạng thái theme để áp dụng cho các trang khác
      localStorage.setItem('theme', theme);
    });
  
    // Khởi tạo AOS
    AOS.init({
      duration: 1200,  // Thời gian hoạt động hiệu ứng
      easing: 'ease-in-out',
      once: true, // hiệu ứng chỉ chạy một lần khi cuộn vào
    });
  });
  