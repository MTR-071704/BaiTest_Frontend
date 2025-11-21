let products = [];
let filtered = [];


const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const loading = document.getElementById("loading");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const mImg = document.getElementById("mImg");
const mTitle = document.getElementById("mTitle");
const mPrice = document.getElementById("mPrice");
const mDesc = document.getElementById("mDesc");
// Hàm hiển thị thông báo “Không tìm thấy sản phẩm”
function showCenterAlert(msg) {
    const alertBox = document.getElementById("centerAlert");
    alertBox.textContent = msg;

    alertBox.classList.remove("hidden");

    setTimeout(() => alertBox.classList.add("show"), 10);
    setTimeout(() => {
        alertBox.classList.remove("show");
        setTimeout(() => alertBox.classList.add("hidden"), 350);
    }, 2000); // 
}


// 1. GỌI API + LOADING UI
async function loadProducts() {
    loading.classList.remove("hidden");  

    try {
        const res = await fetch("https://fakestoreapi.com/products");
        products = await res.json();
        filtered = [...products];
        renderProducts(filtered);
    } 
    catch (err) {
        productList.innerHTML = "<p class='error'>Không thể tải dữ liệu!</p>";
    } 
    finally {
        loading.classList.add("hidden"); 
    }
}

loadProducts();
// 2. SẮP XẾP SẢN PHẨM
function sortProducts() {
    const type = sortSelect.value;

    if (type === "asc") {
        filtered.sort((a, b) => a.price - b.price); // giá tăng dần
    } 
    else if (type === "desc") {
        filtered.sort((a, b) => b.price - a.price); // giá giảm dần
    }
}

// 3. RENDER SẢN PHẨM
function renderProducts(list) {
    productList.innerHTML = "";

    if (list.length === 0) {
        showCenterAlert("Không tìm thấy sản phẩm!");
        return;
    }

    list.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${p.image}" alt="">
            <h3 class="title">${p.title}</h3>
            <p class="price">$${p.price}</p>
            <button class="card-btn" onclick="showDetail(${p.id})">Xem chi tiết</button>
        `;

        productList.appendChild(card);
    });
}


// 4. Tìm kiếm
searchInput.addEventListener("input", () => {
    const key = searchInput.value.toLowerCase(); // Lấy từ khóa, chuyển về chữ thường để tìm kiếm không phân biệt hoa/thường

    filtered = products.filter(p =>
        p.title.toLowerCase().includes(key) // Giữ lại sản phẩm có chữ mà người dùng đang nhập vào ô tìm kiếm
    );

    sortProducts();
    renderProducts(filtered);
});
// 5. sắp xếp theo giá
sortSelect.addEventListener("change", () => {
    sortProducts();
    renderProducts(filtered);
});
// 6. MODAL XEM CHI TIẾT
function showDetail(id) {
    const p = products.find(item => item.id === id);

    mImg.src = p.image;
    mTitle.textContent = p.title;
    mPrice.textContent = "$" + p.price;
    mDesc.textContent = p.description;

    modal.classList.remove("hidden");
}

closeModal.onclick = () => modal.classList.add("hidden");
modal.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
};
