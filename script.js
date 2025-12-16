document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to the Flat-Footed Shoe Store website!");

    const articles = document.querySelectorAll("article");

    articles.forEach(article => {
        article.addEventListener("mouseenter", () => {
            article.style.backgroundColor = "#eef";
        });

        article.addEventListener("mouseleave", () => {
            article.style.backgroundColor = "#fff";
        });
    });
});