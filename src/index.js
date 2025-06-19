const APIURL = "http://localhost:3000/Posts";
// function to display my exsiting database blogs
function displayPosts() {
    const blogs = document.getElementById('blogs');
    blogs.innerHTML = ""; // Clear existing posts

    fetch(APIURL)
        .then(response => response.json())
        .then(Posts => {
            Posts.forEach(post => {
                renderSinglePost(post); // Reuse rendering logic
            });
        });
}
//function to render only a new created post and prevent duplication
function renderSinglePost(post) {
    const blogs = document.getElementById('blogs');

    const postlist = document.createElement("div");
    postlist.className = "post-list";
    postlist.style.padding = "10px";

    const orderedlist = document.createElement('ul');
    const list = document.createElement('li');
    list.className = "list";
    list.innerHTML = `<a href="#post-${post.id}">${post.Title}</a>`;

    list.addEventListener("click", (e) => {
        e.preventDefault();
        handlePostClick(post);
    });

    orderedlist.appendChild(list);
    postlist.appendChild(orderedlist);
    blogs.appendChild(postlist);
}

function handlePostClick(post) {
    const yourblog = document.getElementById('yourblog');
    yourblog.innerHTML = "";
    const display = document.createElement('div');

    display.innerHTML = `
        <h2>${post.Title}</h2>
        <p><strong>Author:</strong> ${post.Author}</p>
        <p>${post.Content}</p>
        <img src="${post.Image}" alt="${post.Title}" style="max-width: 100%; height: auto;">
    `;

    yourblog.appendChild(display);
}

function addNewPostListener() {
    const myform = document.getElementById('myform');
    const title = document.getElementById('Title');
    const author = document.getElementById('author');
    const image = document.getElementById('Image');
    const content = document.getElementById('post');

    myform.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log("Form was submitted!");

        fetch(APIURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Title: title.value,
                Author: author.value,
                Image: image.value,
                Content: content.value
            })
        })
        .then(response => response.json())
        .then(data => {
            alert("Post has been created");
            myform.reset();
            renderSinglePost(data);
        });
    });
}

displayPosts();
addNewPostListener();
