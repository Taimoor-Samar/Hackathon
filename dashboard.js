
document.addEventListener("DOMContentLoaded", function() {
    const publishButton = document.getElementById("publishButton");
    const publishedBlogsList = document.getElementById("publishedBlogs");

    publishButton.addEventListener("click", function() {
        const title = document.getElementById("blogTitle").value;
        const description = document.getElementById("blogDescription").value;

        if (title && description) {
            const blogItem = document.createElement("li");
            blogItem.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
                <button class="editButton">Edit</button>
                <button class="deleteButton">Delete</button>
            `;

            publishedBlogsList.appendChild(blogItem);

            // Clear input fields
            document.getElementById("blogTitle").value = "";
            document.getElementById("blogDescription").value = "";

            // Save to local storage
            saveToLocalStorage();

            // Attach event listeners to the edit and delete buttons
            const editButton = blogItem.querySelector(".editButton");
            const deleteButton = blogItem.querySelector(".deleteButton");

            editButton.addEventListener("click", function() {
                // Implement edit functionality here
                // You can pre-fill the form with the saved values and update the blog in the list
            });

            deleteButton.addEventListener("click", function() {
                publishedBlogsList.removeChild(blogItem);
                saveToLocalStorage();
            });
        }
    });

    // Load blogs from local storage on page load
    loadFromLocalStorage();

    function saveToLocalStorage() {
        const blogs = [];
        const blogItems = publishedBlogsList.querySelectorAll("li");

        blogItems.forEach(blogItem => {
            const title = blogItem.querySelector("h3").textContent;
            const description = blogItem.querySelector("p").textContent;
            blogs.push({ title, description });
        });

        localStorage.setItem("blogs", JSON.stringify(blogs));
    }

    function loadFromLocalStorage() {
        const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

        savedBlogs.forEach(blog => {
            const blogItem = document.createElement("li");
            blogItem.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
                <button class="editButton">Edit</button>
                <button class="deleteButton">Delete</button>
            `;

            publishedBlogsList.appendChild(blogItem);

            const editButton = blogItem.querySelector(".editButton");
            const deleteButton = blogItem.querySelector(".deleteButton");

            editButton.addEventListener("click", function() {
                // Implement edit functionality here
            });

            deleteButton.addEventListener("click", function() {
                publishedBlogsList.removeChild(blogItem);
                saveToLocalStorage();
            });
        });
    }
});
