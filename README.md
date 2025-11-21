# Danh sách sản phẩm – Bài Test Frontend Intern
Ứng dụng hiển thị danh sách sản phẩm từ FakeStoreAPI, hỗ trợ tìm kiếm,
sắp xếp và xem chi tiết sản phẩm bằng modal. Bài làm theo yêu cầu
Frontend Intern Test.
## Cách chạy project
1. Clone hoặc tải project về máy
2. Mở thư mục bằng VSCode
3. Mở file index.html và nhấn Run (hoặc mở trực tiếp bằng trình duyệt)
Không cần cài đặt gì thêm vì dự án dùng HTML/CSS/JS thuần.
## Cấu trúc thư mục
project/
│── index.html
│── style.css
│── script.js
└── README.md
# Những phần đã hoàn thành
1. Hiển thị danh sách sản phẩm:
Gọi API: https://fakestoreapi.com/products
+ Ảnh
+ Tên sản phẩm
 + Giá
+ Nút “Xem chi tiết”
+ Nút "đóng"
- Hiển thị dạng grid 3–4 sản phẩm/hàng
- Responsive tốt trên mobile
2. Tìm kiếm sản phẩm:
- Tìm kiếm theo tên, không phân biệt hoa/thường
- Lọc real-time theo từng ký tự bạn nhập
- Hiện thông báo “Không tìm thấy sản phẩm”
3. Sắp xếp theo giá:
- Sắp xếp tăng dần / giảm dần
- Kết hợp tốt với tìm kiếm
4. Modal xem chi tiết sản phẩm:
- Ảnh lớn bên trái
- Tên, giá, mô tả bên phải
- Giao diện đẹp, dễ nhìn
- Đóng được khi:
+ Nhấn nút X
+ Click ra ngoài
5. Loading state:
Hiển thị thông báo “Đang tải dữ liệu...” khi đang fetch API
6. AI Usage:
- Prompt đã sử dụng
“Hỗ trợ tôi viết chức năng tìm kiếm sản phẩm theo từ khóa (search real-time).”
- Code AI trả về
filtered = products.filter(p =>
    p.title.toLowerCase().includes(key)
);
- Code tôi đã chỉnh sửa lại trong dự án
searchInput.addEventListener("input", () => {
    const key = searchInput.value.toLowerCase();

    filtered = products.filter(p =>
        p.title.toLowerCase().includes(key)
    );

    sortProducts();            //  thêm sắp xếp sau khi tìm kiếm
    renderProducts(filtered);  // cập nhật giao diện real-time
});
* Giải thích chỉnh sửa *
Tôi đã chỉnh sửa đoạn code AI trả về theo 2 điểm:
Thêm hàm sortProducts()
=> Giúp kết quả tìm kiếm vẫn được sắp xếp theo lựa chọn của người dùng (tăng/giảm giá).
Thêm hàm renderProducts(filtered)
=> Mỗi khi nhập ký tự, danh sách sản phẩm cập nhật ngay lập tức (real-time).
Nhờ các chỉnh sửa này, chức năng tìm kiếm hoạt động mượt mà hơn và đồng bộ với chức năng sắp xếp.
# Những phần chưa hoàn thành 
Pagination (tùy chọn)
Deploy Netlify 
