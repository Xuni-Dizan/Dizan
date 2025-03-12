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
  
//     // Xử lý Dark Mode
//     const themeToggle = document.getElementById('theme-toggle');
//     const currentTheme = localStorage.getItem('theme');
//     // Nếu trang có hero-section thì lưu vào biến, nếu không thì sẽ trả về null
//     const heroSection = document.querySelector('.hero-section');
//     // Phát hiện sở thích hệ thống
//     const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
//     if (currentTheme) {
//       document.body.classList.add(currentTheme);
  
//       if (currentTheme === 'dark-mode') {
//         const icon = themeToggle.querySelector('i');
//         icon.classList.remove('fa-moon');
//         icon.classList.add('fa-sun');
//         // Nếu trang có hero-section thì cập nhật hình nền
//         if (heroSection) {
//           heroSection.style.backgroundImage = "url('img/hero.jpg')";
//         }
//       }
//     } else if (prefersDarkScheme.matches) {
//       document.body.classList.add('dark-mode');
//       localStorage.setItem('theme', 'dark-mode');
  
//       const icon = themeToggle.querySelector('i');
//       icon.classList.remove('fa-moon');
//       icon.classList.add('fa-sun');
//       if (heroSection) {
//         heroSection.style.backgroundImage = "url('img/hero.jpg')";
//       }
//     }
  
//     themeToggle.addEventListener('click', () => {
//       document.body.classList.toggle('dark-mode');
//       let theme = 'light-mode';
//       if (document.body.classList.contains('dark-mode')) {
//         theme = 'dark-mode';
//         const icon = themeToggle.querySelector('i');
//         icon.classList.remove('fa-moon');
//         icon.classList.add('fa-sun');
//         if (heroSection) {
//           heroSection.style.backgroundImage = "url('img/hero.jpg')";
//         }
//       } else {
//         const icon = themeToggle.querySelector('i');
//         icon.classList.remove('fa-sun');
//         icon.classList.add('fa-moon');
//         if (heroSection) {
//           heroSection.style.backgroundImage = "url('img/hero.jpg')";
//         }
//       }
//       // Lưu trạng thái theme để áp dụng cho các trang khác
//       localStorage.setItem('theme', theme);
//     });
  
    // Khởi tạo AOS
    AOS.init({
      duration: 1200,  // Thời gian hoạt động hiệu ứng
      easing: 'ease-in-out',
      once: true, // hiệu ứng chỉ chạy một lần khi cuộn vào
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Kiểm tra cài đặt từ localStorage hoặc tùy chọn hệ thống
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && prefersDarkScheme.matches)) {
      document.body.classList.add('dark-mode');
      updateThemeIcon(true);
    }
    
    // Xử lý sự kiện chuyển đổi chế độ
    themeToggle.addEventListener('click', function() {
      const isDarkMode = document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      updateThemeIcon(isDarkMode);
    });
    
    // Cập nhật biểu tượng chế độ
    function updateThemeIcon(isDarkMode) {
      const iconElement = themeToggle.querySelector('i') || themeToggle;
      if (isDarkMode) {
        iconElement.classList.remove('fa-moon');
        iconElement.classList.add('fa-sun');
      } else {
        iconElement.classList.remove('fa-sun');
        iconElement.classList.add('fa-moon');
      }
    }
    
    // Lắng nghe thay đổi tùy chọn hệ thống
    prefersDarkScheme.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          document.body.classList.add('dark-mode');
          updateThemeIcon(true);
        } else {
          document.body.classList.remove('dark-mode');
          updateThemeIcon(false);
        }
      }
    });
    
    // Xử lý nội dung được tạo động
    const observer = new MutationObserver(function(mutations) {
      if (document.body.classList.contains('dark-mode')) {
        // Cập nhật các phần tử mới nếu cần
        applyDarkModeToNewElements();
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    function applyDarkModeToNewElements() {
      // Áp dụng kiểu dáng cho các phần tử được tạo động
      // Ví dụ: áp dụng cho các card mã nguồn mới được tạo
      document.querySelectorAll('.card').forEach(card => {
        card.style.backgroundColor = 'var(--bg-card)';
        card.style.color = 'var(--text-primary)';
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('submitSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Kiểm tra validation
            const isValid = validateForm();
            
            if (isValid) {
                // Hiệu ứng loading
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
                submitBtn.disabled = true;
                
                // Giả lập gửi form (thay thế bằng API call thực tế)
                setTimeout(() => {
                    // Hiển thị thông báo thành công
                    successMessage.classList.remove('d-none');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Khôi phục nút gửi
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    // Ẩn thông báo sau 5 giây
                    setTimeout(() => {
                        successMessage.classList.add('d-none');
                    }, 5000);
                }, 1500);
            }
        });
    }
    
    function validateForm() {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let isValid = true;
        
        // Reset trạng thái validation
        [name, email, message].forEach(field => {
            field.classList.remove('is-invalid');
        });
        
        // Kiểm tra tên
        if (!name.value.trim()) {
            name.classList.add('is-invalid');
            isValid = false;
        }
        
        // Kiểm tra email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        }
        
        // Kiểm tra tin nhắn
        if (!message.value.trim()) {
            message.classList.add('is-invalid');
            isValid = false;
        }
        
        return isValid;
    }
});
