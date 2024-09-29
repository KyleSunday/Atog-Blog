const submission = document.querySelector('.subContent');
submission.addEventListener('click', (event) => {
    event.preventDefault();
    const mode = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const user = document.querySelector('#username').value;
    const newPost = {
        title: mode,
        content: content,
        name: user,
    };
    let posts = localStorage.getItem('posts');
    if (posts) {
        posts = JSON.parse(posts)
    }else{
        posts = []
    }
    posts.push(newPost)
    posts = JSON.stringify(posts);
    localStorage.setItem('posts', posts);
    window.location.href = "blog.html"
})