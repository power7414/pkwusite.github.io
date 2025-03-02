// 等待 DOM 完全載入
document.addEventListener('DOMContentLoaded', function() {
    // 處理聯絡表單提交
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 獲取表單數據
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // 在實際情況中，這裡會發送數據到伺服器
            // 但在 GitHub Pages 上，我們只能模擬這個過程
            
            // 顯示提交成功訊息
            alert(`感謝您的留言，${name}！\n\n我們已收到您的訊息，將盡快回覆您。`);
            
            // 重置表單
            contactForm.reset();
        });
    }
    
    // 添加平滑滾動效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 添加頁面載入動畫效果
    document.body.classList.add('loaded');
});
