const messagesDiv = document.getElementById('messages');
document.getElementById('send-btn').onclick = sendMsg;
document.getElementById('user-input').onkeydown = e => { if (e.key==='Enter') sendMsg(); };

// ข้อมูลสัตว์ 24 ชนิด
const animalData = {'ปูเสฉวน': '🦀 สัตว์ไม่มีกระดูกสันหลัง ใช้เปลือกหอยเป็นบ้าน อยู่ในไฟลัม Arthropoda', 'แมงกะพรุน': '🌊 ลำตัววุ้นใส ไม่มีสมอง มีเข็มพิษนิด ๆ อยู่ในไฟลัม Cnidaria', 'แมงดาทะเล': '🛡️ หน้าเหมือนหมวกนักรบดึกดำบรรพ์ อยู่ในไฟลัม Arthropoda', 'ปลาดาว': '⭐ แขนแฉก ๆ งอกใหม่ได้ สัตว์ทะเลไม่มีกระดูกสันหลัง อยู่ในไฟลัม Echinodermata', 'เพนกวิน': '🐧 นกที่บินไม่ได้ แต่ว่ายน้ำโหด อยู่แถบหนาว อยู่ในไฟลัม Chordata', 'โลมา': '🐬 ฉลาด ขี้เล่น หายใจด้วยปอด อยู่ในไฟลัม Chordata', 'ฉลาม': '🦈 กระดูกเป็นกระดูกอ่อน ล่าเก่ง ตัวใหญ่ อยู่ในไฟลัม Chordata', 'เต่าทะเล': '🐢 กระดองแข็ง ว่ายน้ำเก่ง นาน ๆ ขึ้นมาหายใจที อยู่ในไฟลัม Chordata', 'ม้าน้ำ': '🐉 ตัวตรง ๆ หางม้วนได้ ตัวผู้เลี้ยงลูก อยู่ในไฟลัม Chordata', 'หมึกกระดอง': '🦑 เปลี่ยนสีได้ มีหมึกในตัว ฉลาดเวอร์ อยู่ในไฟลัม Mollusca', 'กุ้งมังกร': '🦞 เปลือกแข็ง ๆ หนวดยาว ๆ ก้ามใหญ่ อยู่ในไฟลัม Arthropoda', 'หอยนางรม': '🦪 เปลือกหิน ๆ กรองน้ำหากิน ไม่ขยับตัว อยู่ในไฟลัม Mollusca', 'ปลิงทะเล': '🥒 ตัวนิ่ม ๆ ยาว ๆ ดีดพลังพิเศษได้ อยู่ในไฟลัม Echinodermata', 'หมึกยักษ์': '🐙 แขน 8 เส้น ฉลาดระดับเทพ มีหัวใจ 3 ดวง อยู่ในไฟลัม Mollusca', 'ปะการัง': '🪸 เหมือนหิน แต่จริง ๆ เป็นสัตว์! สร้างแนวปะการัง อยู่ในไฟลัม Cnidaria', 'ฟองน้ำทะเล': '🧽 ดูเหมือนพืชแต่เป็นสัตว์! ไม่มีสมอง อยู่ในไฟลัม Porifera', 'หอยมือเสือ': '🟣 หอยยักษ์ ปากเป็นฟัน ๆ สีจี๊ดจ๊าด อยู่ในไฟลัม Mollusca', 'ปูม้า': '🦀 วิ่งไว สีฟ้าสดใส ก้ามแหลม อยู่ในไฟลัม Arthropoda', 'ปลาการ์ตูน': '🐠 อยู่ในดอกไม้ทะเล ขี้อายแต่เก่ง อยู่ในไฟลัม Chordata', 'กั้งกระดาน': '🛷 หน้าคล้ายไม้กระดาน วิ่งไว ตัวเล็กแต่นักล่า! อยู่ในไฟลัม Arthropoda', 'แมงกะพรุนกล่อง': '📦 พิษแรงมาก ล่องลอยเบา ๆ อยู่ในไฟลัม Cnidaria', 'เต่าหญ้า': '🐢 เต่าทะเลที่ชอบกินหญ้าทะเล อยู่ในไฟลัม Chordata', 'ปลาสิงโต': '🦁 มีหนามแหลม พิษแรง ลายเท่ อยู่ในไฟลัม Chordata', 'หมึกกล้วย': '🦑 ตัวเพรียวกว่าเพื่อน ยิงหมึกใส่ศัตรู อยู่ในไฟลัม Mollusca'};

function sendMsg(){
  const txt = document.getElementById('user-input').value.trim();
  if(!txt) return;
  append('user', txt);
  document.getElementById('user-input').value = '';

  setTimeout(() => {
    const resp = getBotReply(txt);
    append('bot', resp);
  }, 500);
}

function append(who, txt){
  const div = document.createElement('div');
  div.className = 'message ' + who;
  div.textContent = who==='user' ? `คุณ: ${txt}` : `BioBuddy: ${txt}`;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getBotReply(input){
  input = input.toLowerCase();
  if(input.includes('กติกา')) return '📜 กติกาเกม: แบ่งสองทีม ทอยลูกเต๋า ถามคำถามใช่/ไม่ใช่ แล้วเดาสัตว์!';
  if(input.includes('ทอยลูกเต๋า')) {
    const red = Math.floor(Math.random() * 6) + 1;
    const blue = Math.floor(Math.random() * 6) + 1;
    let msg = `🔴 ทีมแดงได้ ${red} 🎲\n🔵 ทีมน้ำเงินได้ ${blue} 🎲\n`;
    if (red > blue) msg += "ทีมแดงเริ่มก่อน!";
    else if (blue > red) msg += "ทีมน้ำเงินเริ่มก่อน!";
    else msg += "เสมอ! ต้องทอยใหม่จ้า 🎲";
    return msg;
  }
  if(input.startsWith('ข้อมูล')) {
    const name = input.split(' ').slice(1).join(' ').trim();
    return animalData[name] || `ขอโทษน้า ไม่พบข้อมูลของ "${name}" ในระบบจ้า 😅`;
  }
  if(input.includes('ช่วยคิดคำถาม')) return '🤔 ลองถามว่า: “สัตว์ตัวนี้มีกระดูกสันหลังไหม?” หรือ “อยู่ในน้ำใช่ไหม?”';
  if(input.includes('ทายว่า')) return '🧐 ยังไม่บอกว่าใช่หรือไม่ ลองตัดตัวเลือกก่อนน้า!';
  return '😋 ผมยังไม่เข้าใจคำสั่งนี้ ลอง “กติกา”, “ข้อมูล ปูเสฉวน”, หรือ “ช่วยคิดคำถาม” ดูนะ!';
}
