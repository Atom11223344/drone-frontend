// page3.js (for Page 3)

// 1. อ่าน .env variables
const API_URL = import.meta.env.VITE_API_BASE_URL;
const DRONE_ID = import.meta.env.VITE_MY_DRONE_ID;

// 2. ดึง element ของตาราง
const tableBody = document.getElementById('logs-table-body');

// 3. ฟังก์ชันสำหรับดึงข้อมูล Logs
async function fetchLogs() {
  try {
    tableBody.innerHTML = '<tr><td colspan="5">Loading...</td></tr>';

    // 4. ยิง API (GET /logs/{droneId}) ไปที่ Assignment 1 
    const response = await fetch(`${API_URL}/logs/${DRONE_ID}`);

    if (!response.ok) {
      throw new Error('Failed to fetch logs');
    }

    const logs = await response.json(); // นี่คือ Array of logs (จำกัด 12 รายการจาก A1)

    // 5. เคลียร์ตาราง
    tableBody.innerHTML = '';

    // 6. วนลูปสร้างแถวในตาราง [cite: 121]
  logs.forEach(log => {
          const row = document.createElement('tr');
          
          // 1. รับค่าเวลา (String) จาก Server
          const utcDateString = log.created; 
          
          // 2. แปลง String ให้เป็น "วัตถุวันที่" (Date Object)
          const date = new Date(utcDateString);
          
          // 3. "ทีเด็ด" อยู่ตรงนี้ครับ
          // .toLocaleString() จะ "แปลง" UTC เป็น "เวลาท้องถิ่น" (เช่น +7)
          // และ "จัดรูปแบบ" (เช่น 1/11/2025, 3:25:25 PM) ให้เราอัตโนมัติ
          const localTimeString = date.toLocaleString('en-US'); // ระบุ 'en-US' เพื่อ "บังคับ" ให้เป็น AM/PM

          row.innerHTML = `
            <td>${localTimeString}</td> 
            <td>${log.country}</td>
            <td>${log.drone_id}</td>
            <td>${log.drone_name}</td>
            <td>${log.celsius}</td>
          `;
          tableBody.appendChild(row);
        });

  } catch (error) {
    console.error('Error fetching logs:', error);
    tableBody.innerHTML = `<tr><td colspan="5" style="color: red;">Error: ${error.message}</td></tr>`;
  }
}

// 7. สั่งให้ฟังก์ชันทำงานทันทีที่หน้าเว็บโหลด
fetchLogs();