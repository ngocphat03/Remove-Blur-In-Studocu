# Cách xóa blur trên Studocu.com
## Bước 1
Truy cập tài liệu ở [Studocu](https://www.studocu.com/) (Lưu ý nên mở bằng Chrome, Edge, Cốc Cốc)
## Bước 2
Copy toàn bộ code bên dưới
```markdown
setInterval(function() {
    var pageContents = document.querySelectorAll('.page-content');
    pageContents.forEach(function(pageContent) {
        var parentElement = pageContent.parentElement;
        Array.from(pageContent.children).forEach(function(child) {
            parentElement.insertBefore(child, pageContent);
        });
    });

    var bannerContents = document.querySelectorAll('._869f7c361ca9');
    bannerContents.forEach(function(item) {
        item.remove();
    });

    var elementsToRemove = document.querySelectorAll('._d090be426bcb');
    elementsToRemove.forEach(function(element) {
        element.remove();
    });
}, 1000);
```

## Bước 3
Bấm phím F12 hoặc tổ hợp phím Ctrl + Shift + I. Hoặc có thể xem video hướng dẫn tại [đây](https://www.youtube.com/watch?v=X65TAP8a530)

## Bước 4
Ở cửa sổ DevTools chuyển qua tab Console sau đó paste đoạn code ở Bước 2 vào rồi bấm Enter
![alt text](https://github.com/ngocphat03/Remove-Blur-In-Studocu/blob/release/Images/devTool.png?raw=true)
