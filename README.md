# GitHub Actions and GitHub Pages Lab

เว็บไซต์ Static สำหรับแลป GitHub Actions และ GitHub Pages

## ก่อนนำขึ้น GitHub

แก้ไขข้อมูลต่อไปนี้ใน `index.html` ให้เป็นของตนเอง:

- `YOUR NAME`
- `YOUR ID`
- `your.email@example.com`
- `YOUR_USERNAME`

## สร้าง Repository และ Push

สร้าง Public repository ชื่อ `webdev-actions-lab` บน GitHub จากนั้นเปิด Terminal ในโฟลเดอร์นี้และรัน:

```bash
git init
git branch -M main
git add .
git commit -m "Create GitHub Pages lab website"
git remote add origin https://github.com/YOUR_USERNAME/webdev-actions-lab.git
git push -u origin main
```

จากนั้นเปิด `Settings` > `Pages` และเลือก Source เป็น `GitHub Actions`.

## คำตอบคำถามท้ายแลป

1. GitHub Actions คือบริการสำหรับรันงานอัตโนมัติ เช่น ตรวจสอบและ deploy โค้ด ส่วน GitHub Pages คือบริการเผยแพร่เว็บไซต์ Static ที่ผู้ใช้เข้าผ่าน URL ได้
2. เลือก trigger เป็น `push` ที่ branch `main` เพื่อให้ทุกการเปลี่ยนแปลงที่รวมเข้าสู่ branch หลักถูก deploy โดยอัตโนมัติ
3. เว็บไซต์จะไม่เปลี่ยน เพราะ GitHub Actions รับเหตุการณ์จาก commit ที่ถูก push ไปยัง GitHub เท่านั้น โค้ดที่แก้ไขค้างไว้ในเครื่องยังไม่ถูกส่งขึ้น remote repository
4. GitHub Pages ให้บริการได้เฉพาะไฟล์ Static จึงไม่มี PHP runtime หรือ MySQL server สำหรับประมวลผลโค้ดและเก็บข้อมูลฝั่ง server
5. เปิดแท็บ `Actions` เลือก workflow ที่ล้มเหลว ดู log ของ step ที่มีเครื่องหมายผิดพลาด อ่านข้อความ error แก้ไขไฟล์ที่เกี่ยวข้อง แล้ว commit และ push เพื่อให้ workflow ทำงานใหม่
