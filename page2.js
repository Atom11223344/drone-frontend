// page2.js (for Page 2)

// 1. อ่าน .env variables
const API_URL = import.meta.env.VITE_API_BASE_URL;

// 2. ดึง element ของ Form
const logForm = document.getElementById('log-form');
const tempInput = document.getElementById('temp-input');
const submitButton = document.getElementById('submit-button');
const formStatus = document.getElementById('form-status');

// 3. ดักจับเหตุการณ์ "Submit"
logForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // ป้องกันไม่ให้หน้าเว็บ refresh

  // 4. [สำคัญ] ดึงข้อมูล Config ที่เรา "บันทึก" ไว้จาก Page 1
  const storedConfig = localStorage.getItem('droneConfig');
  if (!storedConfig) {
    formStatus.innerText = 'Error: Config not found. Please visit Page 1 first.';
    return;
  }

  const config = JSON.parse(storedConfig);

  // 5. เตรียมข้อมูลที่จะ "ส่ง" (POST)
  const dataToSend = {
    drone_id: config.drone_id,     // [cite: 117]
    drone_name: config.drone_name, // [cite: 117]
    country: config.country,     // [cite: 117]
    celsius: parseFloat(tempInput.value) // [cite: 118]
  };

  // 6. ยิง API (POST /logs) ไปที่ Assignment 1 
  try {
    submitButton.disabled = true;
    formStatus.innerText = 'Submitting...';

    const response = await fetch(`${API_URL}/logs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error('Failed to submit log');
    }

    const newLog = await response.json();
    formStatus.innerText = `Success! Log created at ${newLog.created}`;
    tempInput.value = ''; // เคลียร์ช่อง input

  } catch (error) {
    console.error('Error submitting log:', error);
    formStatus.innerText = `Error: ${error.message}`;
  } finally {
    submitButton.disabled = false;
  }
});