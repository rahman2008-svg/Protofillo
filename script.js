document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Interactive Like Button Logic
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("liked");
            if (button.classList.contains("liked")) {
                button.innerHTML = `<i class="fas fa-thumbs-up text-blue-600"></i> Liked`;
            } else {
                button.innerHTML = `<i class="far fa-thumbs-up"></i> Like`;
            }
        });
    });

    // 2. Category Filter Tab Logic
    const filterButtons = document.querySelectorAll(".filter-btn");
    const postCards = document.querySelectorAll(".post-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove("active", "text-blue-600", "border-b-2", "border-blue-600");
            });

            // Add active class to clicked button
            button.classList.add("active", "text-blue-600", "border-b-2", "border-blue-600");

            const filterValue = button.getAttribute("data-filter");

            // Show / Hide Posts Based on Category
            postCards.forEach(post => {
                if (filterValue === "all" || post.getAttribute("data-category") === filterValue) {
                    post.style.display = "block";
                } else {
                    post.style.display = "none";
                }
            });
        });
    });
});
