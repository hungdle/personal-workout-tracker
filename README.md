# MOMENTUM — Personal Workout Tracker

Website theo dõi gym, chạy bộ, học bơi sải và hồi phục. React + Vite, giao diện tiếng Việt, tối ưu điện thoại.

## Chức năng

- **Hôm nay:** bài tập theo ngày, ghi số hiệp/reps/tạ, km chạy, phút bơi, đánh dấu hoàn thành.
- **Lịch tuần:** chọn ngày và mở nhật ký.
- **Nhật ký:** xem, sửa các buổi đã ghi.
- **Tiến độ:** cân nặng, vòng eo, mỡ ước tính, biểu đồ và thành tích sức mạnh.
- **Hồi phục:** ghi đau gối, khó chịu vai, năng lượng, ghi chú.
- **Cài đặt:** sửa danh sách bài tập, xuất/nhập sao lưu JSON.

## Chạy thử trên máy

Cài Node.js 20.19+ hoặc 22.12+ rồi chạy:

```bash
npm install
npm run dev
```

Mở URL hiện trong terminal (thường là http://localhost:5173).

## Đưa lên GitHub Pages

1. Tạo repo GitHub (ví dụ `personal-workout-tracker`).
2. Upload **toàn bộ nội dung** thư mục này vào gốc repo, **bao gồm** `.github/workflows/deploy.yml`, `src/`, `index.html`, `package.json`, `vite.config.js`.
3. Commit lên nhánh `main`.
4. Vào **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. Vào tab **Actions** chờ workflow **Deploy GitHub Pages** hoàn thành.
6. Mở `https://TEN-TAI-KHOAN.github.io/TEN-REPO/` (địa chỉ chính xác hiển thị trong Settings → Pages).

> Vite dùng `base: './'`, vì vậy hoạt động trên cả project Pages (`/ten-repo/`) và đường dẫn root.

## Lưu trữ dữ liệu

Dữ liệu được lưu trong `localStorage` của **trình duyệt và thiết bị đang dùng**. Không tự đồng bộ iPhone với máy tính, không có tài khoản hoặc máy chủ. Nếu xóa dữ liệu trình duyệt, nhật ký có thể mất. Dùng **Cài đặt → Xuất dữ liệu JSON** định kỳ và **Nhập bản sao lưu** để khôi phục. Không upload file backup chứa dữ liệu cá nhân lên repository public.

## Tùy chỉnh

- Kế hoạch mặc định: `src/data.js`.
- Màu sắc và bố cục: `src/style.css`.
- Logic ứng dụng: `src/main.jsx`.
- Có thể chỉnh danh sách bài tập trực tiếp trong giao diện Cài đặt; thay đổi chỉ áp dụng cho nhật ký được tạo mới, không viết lại nhật ký cũ.

## Lưu ý

Ứng dụng hỗ trợ theo dõi, không phải chỉ dẫn y khoa. Với tiền sử đau mặt trước gối, giảm tải khi đau tăng hoặc sưng và tham khảo chuyên gia khi cần.


## v1.1 — Hình minh họa bài tập
- Thêm hình SVG riêng cho từng bài tập, lưu tại `public/exercises/`, không phụ thuộc website ảnh bên ngoài.
- Hình mang tính **minh họa nhận diện bài tập**, không phải hướng dẫn kỹ thuật chuẩn hoặc ảnh chụp người tập.
- Hình xuất hiện trong **Hôm nay** và **Lịch tuần**.
- Giữ nguyên localStorage key `momentum-workout-v1`, không xóa nhật ký cũ.
- Upload **toàn bộ nội dung** ZIP vào thư mục gốc repository (bao gồm `public/`).


## v1.2 — Ảnh bài tập PNG
- Thay SVG bằng PNG minh họa người tập cơ bắp; ảnh được lưu trong `public/exercises`.
- Sửa đường dẫn ảnh theo `import.meta.env.BASE_URL` để hoạt động trên GitHub Pages dưới `/personal-workout-tracker/`.
- Một số bài phụ dùng ảnh đại diện nhóm vận động, **không phải ảnh hướng dẫn kỹ thuật chính xác**.
- Khi cập nhật lên GitHub, tải toàn bộ nội dung ZIP (bao gồm `.github`) lên gốc repository.
