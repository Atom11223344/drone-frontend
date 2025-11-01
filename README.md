# Assignment #2: Drone Web Frontend

## Project Description
โปรเจกต์นี้คือ Web Frontend ที่สร้างขึ้นด้วย Vite, HTML, CSS และ JavaScript ทำหน้าที่เป็น Dashboard สำหรับแสดงผลและบันทึกข้อมูลของ Drone โดยการเรียกใช้ API Server ที่สร้างขึ้นใน Assignment #1

เว็บไซต์นี้แบ่งออกเป็น 4 หน้าหลัก:
1.  **Home Page:** หน้าต้อนรับ พร้อมโมเดล 3D และเมนูนำทาง
2.  **Config Page:** แสดงข้อมูล Config ของ Drone ที่กำหนดไว้
3.  **Temp Form Page:** ฟอร์มสำหรับ "สร้าง" (POST) Log อุณหภูมิใหม่
4.  **View Logs Page:** แสดงผล Logs ล่าสุดในรูปแบบตาราง

## How to Run (วิธีการ Run)

1.  Clone repository นี้
2.  ติดตั้ง dependencies ที่จำเป็น:
    ```bash
    npm install
    ```
3.  สร้างไฟล์ `.env` ที่ root ของโปรเจกต์ และกำหนดค่าตัวแปรด้านล่างนี้
4.  รันเซิร์ฟเวอร์สำหรับ Development (ทดสอบในเครื่อง):
    ```bash
    npm run dev
    ```

### Environment Variables
โปรเจกต์นี้ต้องการตัวแปร Environment Variables ฝั่ง Client (ต้องขึ้นต้นด้วย `VITE_`) ดังนี้:

* **`VITE_MY_DRONE_ID`**: รหัส Drone ID ที่ต้องการให้เว็บนี้แสดงผล
* **`VITE_API_BASE_URL`**: URL ของ API Server (จาก Assignment #1) ที่ Deploy แล้ว
