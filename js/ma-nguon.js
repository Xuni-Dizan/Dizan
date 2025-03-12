document.addEventListener("DOMContentLoaded", function () {
    // Mảng chứa danh sách mã nguồn
    const sources = [
      {
        title: "Mã nguồn 1",
        description: "Mô tả ngắn về mã nguồn 1.",
        image: "img/sample1.jpg",
        github: "https://github.com/user/repo1",
      },
      {
        title: "Mã nguồn 2",
        description: "Mô tả ngắn về mã nguồn 2.",
        image: "img/sample2.jpg",
        github: "https://github.com/user/repo2",
      },
      {
        title: "Mã nguồn 3",
        description: "Mô tả ngắn về mã nguồn 3.",
        image: "img/sample3.jpg",
        github: "https://github.com/user/repo3",
      },
      {
        title: "Mã nguồn 4",
        description: "Mô tả ngắn về mã nguồn 4.",
        image: "img/sample4.jpg",
        github: "https://github.com/user/repo4",
      },
      {
        title: "Mã nguồn 5",
        description: "Mô tả ngắn về mã nguồn 5.",
        image: "img/sample5.jpg",
        github: "https://github.com/user/repo5",
      },
      {
        title: "Mã nguồn 6",
        description: "Mô tả ngắn về mã nguồn 6.",
        image: "img/sample6.jpg",
        github: "https://github.com/user/repo6",
      }
      // Nếu có thêm mã nguồn, bạn có thể bổ sung ở đây...
    ];
  
    let currentPage = 1;
    const itemsPerPage = 6;
  
    // Hàm render card của trang hiện tại
    function renderCards() {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentSources = sources.slice(startIndex, endIndex);
      const cardContainer = document.getElementById("card-container");
  
      // Xoá nội dung cũ
      cardContainer.innerHTML = "";
  
      // Tạo card cho từng mã nguồn
      currentSources.forEach((source) => {
        const col = document.createElement("div");
        col.className = "col";
        col.innerHTML = `
          <div class="card h-100" data-github="${source.github}">
            <img src="${source.image}" class="card-img-top" alt="${source.title}">
            <div class="card-body">
              <h5 class="card-title">${source.title}</h5>
              <p class="card-text">${source.description}</p>
              <button class="btn btn-primary view-details">Xem chi tiết</button>
            </div>
          </div>
        `;
        cardContainer.appendChild(col);
      });
  
      // Thêm sự kiện click cho các card vừa render
      const cards = document.querySelectorAll("#card-container .card");
      cards.forEach((card) => {
        card.addEventListener("click", function () {
          const githubLink = this.getAttribute("data-github");
          // Cập nhật nội dung modal: iframe, nút download và nút chuyển hướng
          document.getElementById("githubIframe").src = githubLink;
          document.getElementById("goToGithub").href = githubLink;
          // Giả sử link download zip theo cấu trúc của GitHub (branch chính là main)
          document.getElementById("downloadZip").href =
            githubLink + "/archive/refs/heads/main.zip";
  
          // Hiển thị modal (sử dụng Bootstrap Modal)
          const detailsModal = new bootstrap.Modal(
            document.getElementById("detailsModal")
          );
          detailsModal.show();
        });
      });
  
      // Cập nhật trạng thái của nút phân trang
      const totalPages = Math.ceil(sources.length / itemsPerPage);
      const prevPageBtn = document.getElementById("prev-page");
      const nextPageBtn = document.getElementById("next-page");
  
      if (currentPage <= 1) {
        prevPageBtn.classList.add("disabled");
      } else {
        prevPageBtn.classList.remove("disabled");
      }
  
      if (currentPage >= totalPages) {
        nextPageBtn.classList.add("disabled");
      } else {
        nextPageBtn.classList.remove("disabled");
      }
  
      // Cập nhật số trang hiển thị (nếu cần)
      // Ví dụ: cập nhật nội dung của phần tử active trong phân trang
      const activePageItem = document.querySelector(
        ".pagination .page-item.active .page-link"
      );
      if (activePageItem) {
        activePageItem.textContent = currentPage;
      }
    }
  
    // Sự kiện click cho nút "Trước" của phân trang
    document.getElementById("prev-page").addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        renderCards();
      }
    });
  
    // Sự kiện click cho nút "Sau" của phân trang
    document.getElementById("next-page").addEventListener("click", function (e) {
      e.preventDefault();
      const totalPages = Math.ceil(sources.length / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        renderCards();
      }
    });
  
    // Render lần đầu
    renderCards();
  });
  // Khi modal được ẩn, reset src của iframe để dừng tải nội dung
// document.getElementById('detailsModal').addEventListener('hidden.bs.modal', function () {
//     document.getElementById('githubIframe').src = "";
//   });
// Xử lý đặc biệt cho iframe GitHub trong modal
document.getElementById('detailsModal').addEventListener('show.bs.modal', function() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const iframe = document.getElementById('githubIframe');
    
    // Thêm tham số dark mode vào URL GitHub nếu có thể
    if (isDarkMode && iframe.src.includes('github.com')) {
      const currentSrc = new URL(iframe.src);
      if (!currentSrc.searchParams.has('theme')) {
        currentSrc.searchParams.set('theme', 'dark');
        iframe.src = currentSrc.toString();
      }
    }
  });
  
  
