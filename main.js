// main.js (for Page 1)

// 1. อ่าน .env variables ที่เราตั้งค่าไว้
const API_URL = import.meta.env.VITE_API_BASE_URL;
const DRONE_ID = import.meta.env.VITE_MY_DRONE_ID;

// 2. ฟังก์ชันสำหรับดึงข้อมูล Config
async function fetchConfig() {
  try {
    // 3. ยิง API ไปที่ Assignment 1 ของเรา
    const response = await fetch(`${API_URL}/configs/${DRONE_ID}`);

    if (!response.ok) {
      throw new Error('Failed to fetch config');
    }

    const config = await response.json();

    // 4. แสดงผลในหน้า HTML [cite: 100-104]
    document.getElementById('config-id').innerText = config.drone_id;
    document.getElementById('config-name').innerText = config.drone_name;
    document.getElementById('config-light').innerText = config.light;
    document.getElementById('config-country').innerText = config.country;

    // 5. [สำคัญมาก] บันทึกข้อมูล Config ลงใน localStorage
    // เพื่อให้ Page 2 และ Page 3 เอาไปใช้ต่อได้ 
    localStorage.setItem('droneConfig', JSON.stringify(config));
    console.log('Config saved to localStorage:', config);

  } catch (error) {
    console.error('Error fetching config:', error);
    document.getElementById('app').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

// 6. สั่งให้ฟังก์ชันทำงานทันทีที่หน้าเว็บโหลด
fetchConfig();