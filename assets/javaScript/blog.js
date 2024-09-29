let blogs = localStorage.getItem('posts');
blogs = JSON.parse(blogs);
blogs.forEach(post => {
    const blog = document.querySelector(".posts")
    blog.insertAdjacentHTML("afterbegin", `
        <div class="postBox postBoxLight">
            <h2 class="postTitle postTitleLight">
                ${post.title}
            </h2>
            <p class="postContent postContentLight">
                ${post.content}
            </p>
            <div class="postUser postUserLight">
                <p>
                    Posted by: ${post.name}
                </p>
            </div>
        </div>`
    );
});