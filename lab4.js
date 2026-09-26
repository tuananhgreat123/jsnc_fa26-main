const API_URL = "http://localhost:3000/products";
const tableBody = document.getElementById("productsTableBody");

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

function renderProducts(products) {
  if (!tableBody) return;

  tableBody.innerHTML = products
    .map(
      (product, index) => `
        <tr class="hover:bg-gray-50">
          <td class="px-4 py-2 border border-gray-300 text-center">${index + 1}</td>
          <td class="px-4 py-2 border border-gray-300 text-center">${product.id}</td>
          <td class="px-4 py-2 border border-gray-300">${product.name}</td>
          <td class="px-4 py-2 border border-gray-300 text-right">${formatPrice(product.price)}</td>
          <td class="px-4 py-2 border border-gray-300 text-center">${product.category}</td>
          <td class="px-4 py-2 border border-gray-300">
            <div class="flex items-center justify-center gap-2">
              <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Sửa</button>
              <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Xóa</button>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");
}

function getProducts() {
  axios
    .get(API_URL)
    .then((res) => {
      renderProducts(res.data);
    })
    .catch((err) => {
      console.error("Lỗi khi gọi API products:", err);
      alert("Không thể tải danh sách sản phẩm!");
    });
}

getProducts();
