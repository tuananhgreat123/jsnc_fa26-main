function loadProducts() {
  const productsTableBody = document.getElementById("productsTableBody");
  if (!productsTableBody) return;

  axios
    .get("http://localhost:3000/products")
    .then((response) => {
      const products = response.data;
      productsTableBody.innerHTML = products
        .map(
          (product, index) => `
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${index + 1}</td>
              <td class="px-4 py-2 border border-gray-300">${product.id}</td>
              <td class="px-4 py-2 border border-gray-300">${product.name}</td>
              <td class="px-4 py-2 border border-gray-300">${Number(product.price).toLocaleString("vi-VN")} đ</td>
              <td class="px-4 py-2 border border-gray-300">${product.category}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a href="edit.html?id=${product.id}" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</a>
                  <button type="button" onclick="deleteProduct(${product.id})" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </div>
              </td>
            </tr>
          `
        )
        .join("");
    })
    .catch((error) => {
      console.error("Không tải được danh sách sản phẩm:", error);
      alert("Không tải được danh sách sản phẩm");
    });
}

function deleteProduct(id) {
  const confirmed = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
  if (!confirmed) return;

  axios
    .delete(`http://localhost:3000/products/${id}`)
    .then(() => {
      alert("Xóa thành công");
      loadProducts();
    })
    .catch(() => {
      alert("Xóa thất bại");
    });
}

function setupEditForm() {
  const editForm = document.getElementById("product-form");
  if (!editForm) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (!productId) {
    alert("Không tìm thấy sản phẩm cần sửa");
    window.location.href = "index.html";
    return;
  }

  axios
    .get(`http://localhost:3000/products/${productId}`)
    .then((response) => {
      const product = response.data;
      document.getElementById("product-id").value = product.id;
      document.getElementById("name").value = product.name;
      document.getElementById("price").value = product.price;
      document.getElementById("category").value = product.category;
    })
    .catch(() => {
      alert("Không tìm thấy sản phẩm");
      window.location.href = "index.html";
    });

  editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const price = Number(document.getElementById("price").value);
    const category = document.getElementById("category").value.trim();

    if (!name || !category || Number.isNaN(price) || price <= 0) {
      alert("Vui lòng nhập đầy đủ thông tin hợp lệ");
      return;
    }

    const updatedProduct = {
      name,
      price,
      category,
    };

    axios
      .put(`http://localhost:3000/products/${productId}`, updatedProduct)
      .then(() => {
        alert("Cập nhật thành công");
        window.location.href = "index.html";
      })
      .catch(() => {
        alert("Cập nhật thất bại");
      });
  });
}

loadProducts();
setupEditForm();
