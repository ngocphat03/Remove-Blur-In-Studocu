console.log("Auto remove blur background");
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