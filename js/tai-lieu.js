// Dữ liệu cho mục tài liệu
const taiLieuData = {
    featuredDocuments: [
        {
            iconClass: "fas fa-shield-alt",
            title: "Bảo Mật Mạng Không Dây",
            description: "Tài liệu hướng dẫn chi tiết về các phương pháp bảo mật mạng không dây hiệu quả.",
            fileInfo: "PDF • 5.2 MB",
            downloads: "2.5K",
            downloadLink: "#"
        },
        {
            iconClass: "fas fa-code",
            title: "Lập Trình JavaScript Nâng Cao",
            description: "Tài liệu tổng hợp về JavaScript ES6+, async/await, promises và các mẫu thiết kế hiện đại.",
            fileInfo: "PDF • 8.7 MB",
            downloads: "3.8K",
            downloadLink: "#"
        },
        {
            iconClass: "fas fa-brain",
            title: "Nhập Môn Deep Learning",
            description: "Tài liệu cơ bản về Deep Learning, các mô hình CNN, RNN và ứng dụng trong thực tiễn.",
            fileInfo: "PDF • 12.3 MB",
            downloads: "4.2K",
            downloadLink: "#"
        },
        {
            iconClass: "fas fa-laptop-code",
            title: "Thiết Kế Web Responsive",
            description: "Hướng dẫn toàn diện về thiết kế web đáp ứng với Bootstrap 5, CSS Grid và Flexbox.",
            fileInfo: "PDF • 6.8 MB",
            downloads: "3.1K",
            downloadLink: "#"
        }
    ],
    categories: [
        {
            title: "An Toàn Thông Tin",
            lead: "Tài liệu về bảo mật, an toàn thông tin, và các giải pháp bảo vệ dữ liệu.",
            docLink: "#",
            docs: [
                {
                    iconClass: "fas fa-fingerprint",
                    title: "Bảo Mật Ứng Dụng Web",
                    description: "Hướng dẫn toàn diện về bảo mật ứng dụng web, phòng chống các lỗ hổng OWASP Top 10.",
                    fileInfo: "PDF • 7.5 MB",
                    downloads: "1.8K",
                    downloadLink: "#"
                },
                {
                    iconClass: "fas fa-lock",
                    title: "Mã Hóa Và Bảo Mật Dữ Liệu",
                    description: "Giới thiệu về các thuật toán mã hóa, quản lý khóa và áp dụng trong bảo vệ dữ liệu.",
                    fileInfo: "PDF • 6.2 MB",
                    downloads: "1.5K",
                    downloadLink: "#"
                },
                {
                    iconClass: "fas fa-user-shield",
                    title: "Phân Tích Mã Độc",
                    description: "Phương pháp và công cụ phân tích mã độc, kỹ thuật dò tìm và phòng chống tấn công.",
                    fileInfo: "PDF • 8.9 MB",
                    downloads: "2.1K",
                    downloadLink: "#"
                }
            ]
        },
        {
            title: "Lập Trình",
            lead: "Tài liệu về các ngôn ngữ lập trình, framework, và phát triển phần mềm.",
            docLink: "#",
            docs: [
                {
                    iconClass: "fab fa-python",
                    title: "Python Cho Data Science",
                    description: "Hướng dẫn sử dụng Python cho phân tích dữ liệu với NumPy, Pandas và Matplotlib.",
                    fileInfo: "PDF • 10.5 MB",
                    downloads: "3.4K",
                    downloadLink: "#"
                },
                {
                    iconClass: "fab fa-react",
                    title: "React.js Toàn Tập",
                    description: "Từ cơ bản đến nâng cao với React Hooks, Context API, Redux và các best practices.",
                    fileInfo: "PDF • 9.2 MB",
                    downloads: "2.9K",
                    downloadLink: "#"
                },
                {
                    iconClass: "fas fa-database",
                    title: "SQL & NoSQL Cơ Bản",
                    description: "So sánh và hướng dẫn sử dụng các hệ quản trị cơ sở dữ liệu SQL và NoSQL.",
                    fileInfo: "PDF • 7.8 MB",
                    downloads: "2.6K",
                    downloadLink: "#"
                }
            ]
        },
        {
            title: "AI & Máy Học",
            lead: "Tài liệu về trí tuệ nhân tạo, máy học, và các ứng dụng AI trong công nghiệp.",
            docLink: "#",
            docs: [
                {
                    iconClass: "fas fa-robot",
                    title: "Machine Learning Cơ Bản",
                    description: "Giới thiệu về các thuật toán học máy cơ bản và ứng dụng trong thực tiễn.",
                    fileInfo: "PDF • 11.2 MB",
                    downloads: "3.7K",
                    downloadLink: "#"
                },
                {
                    iconClass: "fas fa-language",
                    title: "Xử Lý Ngôn Ngữ Tự Nhiên",
                    description: "Phương pháp và công cụ xử lý ngôn ngữ tự nhiên với Python và các thư viện phổ biến.",
                    fileInfo: "PDF • 9.8 MB",
                    downloads: "2.3K",
                    downloadLink: "#"
                },
                {
                    iconClass: "fas fa-chart-line",
                    title: "AI Trong Phân Tích Dự Đoán",
                    description: "Ứng dụng AI trong phân tích dữ liệu và dự đoán xu hướng kinh doanh.",
                    fileInfo: "PDF • 8.4 MB",
                    downloads: "1.9K",
                    downloadLink: "#"
                }
            ]
        },
        {
            title: "Thiết Kế Web",
            lead: "Tài liệu về thiết kế web, UI/UX, và các kỹ thuật phát triển front-end hiện đại.",
            docLink: "#",
            docs: [
                {
                    iconClass: "fas fa-paint-brush",
                    title: "Nguyên Lý Thiết Kế UI/UX",
                    description: "Các nguyên tắc cơ bản trong thiết kế giao diện người dùng và trải nghiệm người dùng.",
                    fileInfo: "PDF • 6.7 MB",
                    downloads: "2.4K",
                    downloadLink: "#"
                },
                {
                    iconClass: "fab fa-css3-alt",
                    title: "CSS Modern và SASS",
                    description: "Hướng dẫn sử dụng CSS hiện đại với Grid, Flexbox và tiền xử lý SASS/SCSS.",
                    fileInfo: "PDF • 7.3 MB",
                    downloads: "2.2K",
                    downloadLink: "#"
                },
                {
                    iconClass: "fas fa-mobile-alt",
                    title: "Thiết Kế Web Cho Thiết Bị Di Động",
                    description: "Các kỹ thuật và best practices trong thiết kế web đáp ứng cho thiết bị di động.",
                    fileInfo: "PDF • 5.9 MB",
                    downloads: "1.8K",
                    downloadLink: "#"
                }
            ]
        }
    ]
};

// Hàm render cho Featured Documents
function renderFeaturedDocuments() {
    // Lấy container chứa các card tài liệu nổi bật
    const featuredSection = document.querySelector("#featured-documents .documents-container");
    if (!featuredSection) return;

    let html = "";
    taiLieuData.featuredDocuments.forEach(doc => {
        html += `
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="resource-card h-100">
                <div class="text-center mb-3">
                    <i class="${doc.iconClass} fa-3x text-primary"></i>
                </div>
                <h5>${doc.title}</h5>
                <p>${doc.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="badge bg-primary rounded-pill">${doc.fileInfo}</span>
                    <span><i class="fas fa-download"></i> ${doc.downloads}</span>
                </div>
                <div class="mt-3">
                    <a href="${doc.downloadLink}" class="btn btn-primary w-100">
                        Tải về <i class="fas fa-download ms-1"></i>
                    </a>
                </div>
            </div>
        </div>
        `;
    });
    featuredSection.innerHTML = html;
}

// Hàm render cho Document Categories
function renderDocumentCategories() {
    // Lấy container chứa toàn bộ các danh mục tài liệu
    const categoriesContainer = document.getElementById("document-categories-container");
    if (!categoriesContainer) return;

    let html = "";
    taiLieuData.categories.forEach(category => {
        let docsHTML = "";
        category.docs.forEach(doc => {
            docsHTML += `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="resource-card h-100">
                    <div class="text-center mb-3">
                        <i class="${doc.iconClass} fa-3x text-primary"></i>
                    </div>
                    <h5>${doc.title}</h5>
                    <p>${doc.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-primary rounded-pill">${doc.fileInfo}</span>
                        <span><i class="fas fa-download"></i> ${doc.downloads}</span>
                    </div>
                    <div class="mt-3">
                        <a href="${doc.downloadLink}" class="btn btn-primary w-100">
                            Tải về <i class="fas fa-download ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
            `;
        });

        html += `
        <div class="category-section mb-5">
            <div class="row mb-4">
                <div class="col-md-12">
                    <h2 class="text-gradient">${category.title}</h2>
                    <p class="lead">${category.lead}</p>
                </div>
            </div>
            <div class="row">
                ${docsHTML}
            </div>
            <div class="text-center mt-3">
                <a href="${category.docLink}" class="btn btn-outline-primary">
                    Xem tất cả tài liệu ${category.title} <i class="fas fa-arrow-right ms-1"></i>
                </a>
            </div>
        </div>
        `;
    });
    categoriesContainer.innerHTML = html;
}

// Khi DOM tải xong, gọi các hàm render
document.addEventListener("DOMContentLoaded", function() {
    renderFeaturedDocuments();
    renderDocumentCategories();
});