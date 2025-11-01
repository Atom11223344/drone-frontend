// /src/nav.js

// 1. ค้นหา "ปุ่ม" และ "เมนู" ใน HTML
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// 2. ตรวจสอบว่าหาเจอทั้งคู่ (เผื่อไปเปิดหน้าเว็บที่ไม่มีปุ่ม)
if (navToggle && navMenu) {

  // 3. "ดักฟัง" ว่าเมื่อไหร่ปุ่มจะถูก "คลิก"
  navToggle.addEventListener('click', () => {

    // 4. "สลับ" (toggle) คลาส 'is-open'
    // (CSS ใน style.css จะจัดการ animation ให้เอง)
    navMenu.classList.toggle('is-open');

  });
}