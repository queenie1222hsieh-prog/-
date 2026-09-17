// 點擊導覽列滑順捲動至指定區塊
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// 簡單控制台列印確認 JS 載入
console.log("Portfolio loaded successfully.");