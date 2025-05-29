document.addEventListener('DOMContentLoaded', (event) => {

    const homeMain = document.getElementById('homeMain');
    const solutionsMain = document.getElementById('solutionsMain');
    const faqsMain = document.getElementById('faqsMain');

    const homePageButton = document.getElementById('homePageButton');
    const solutionsPageButton = document.getElementById('solutionsPageButton');
    const faqsPageButton = document.getElementById('faqsPageButton');
    
    homeMain.style.display = "flex";
    solutionsMain.style.display = "none";
    faqsMain.style.display = "none";

    homePageButton.addEventListener('click', function() {
        console.log('homeButton eventListener triggered');

        homeMain.style.display = "flex";
        solutionsMain.style.display = "none";
        faqsMain.style.display = "none";
    });

    solutionsPageButton.addEventListener('click', function() {
        console.log('solutionsButton eventListener triggered');

        homeMain.style.display = "none";
        solutionsMain.style.display = "flex";
        faqsMain.style.display = "none";
    });

    faqsPageButton.addEventListener('click', function() {
        console.log('faqsButton eventListener triggered');

        homeMain.style.display = "none";
        solutionsMain.style.display = "none";
        faqsMain.style.display = "flex";
    });
});