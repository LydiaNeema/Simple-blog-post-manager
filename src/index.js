 
//Initialized a variable to access my local server

const APIURL = "http://localhost:3000/Posts";

//initiaized a function  to display my exsiting database blogs
function displayPosts() {
    const blogs = document.getElementById('blogs');
    blogs.innerHTML = ""; // Clear existing posts

    fetch(APIURL)
        .then(response => response.json())
        .then(Posts => {
            Posts.forEach(post => {
                renderSinglePost(post);
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
// function to handle the event a blog is clicked.
function handlePostClick(post) {
    const yourblog = document.getElementById('yourblog');
    yourblog.innerHTML = "";
    const display = document.createElement('div');
    display.id = `post-${post.id}`; 

    display.innerHTML = `
        <h2>${post.Title}</h2>
        <p><strong>Author:</strong> ${post.Author}</p>
        <p >${post.Content}</p>
        <img src="${post.Image}" alt="${post.Title}" style="max-width: 100%; height: auto;">
        <div class="actions">
        <button onclick="showEditForm('${post.id}', \`${post.Title}\`, \`${post.Content}\`)" class="myButton">
    <i class="fas fa-edit"></i>
</button>
          <button class="delete-btn" data-id="${post.id}"><i class="fas fa-trash-alt"></i></button>
        </div>
    `;
     yourblog.appendChild(display);
    const deleteBtn = display.querySelector('.delete-btn');
deleteBtn.addEventListener('click', () => {
    deletePost(post.id);
});
 
}
// function to show fields of an exsiting post and allow editing
function showEditForm (postId, currentTitle,currentContent,post) {
    const postDiv = document.getElementById(`post-${postId}`);
    postDiv.innerHTML = `
    <form id="editForm">
        <input type="text" id="editTitle-${postId}" value="${currentTitle}"  style="width:250px; height=50px;"required>
        <br>
        <textarea id="edit-content-${postId}" cols="30"rows="10" required>${currentContent}</textarea>
        <br>
          <div class="form-buttons">
        <button type="button" onclick="saveEdit('${postId}')" class="myButton"> <i class="fas fa-edit" style="color: white;"></i></button>
        <button type="button" onclick='cancelEdit(${JSON.stringify(post)})' class ="myDeleteButton"><i class="fas fa-times" style="color: white;"></i></button>
        </div>
        </form>
        `;
}
//function to save changes made to a post.
function saveEdit(postId){
    const newTitle =document.getElementById(`editTitle-${postId}`).value;
    const newContent =document.getElementById(`edit-content-${postId}`).value;
    fetch(`${APIURL}/${postId}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(
            {Title: newTitle,
                 Content: newContent
                })
            })
        .then(response=>response.json())
        .then(data=>{
            alert("post updated successfully");
            console.log(data);
            displayPosts();
            document.getElementById("yourblog").innerHTML = ""; 
        })
    }
    // funtion to cancel editing of the post
function cancelEdit(post) {
    handlePostClick(post);
}

// function to delete a post from the database
function deletePost(postId){
      if (confirm("Are you sure you want to delete this post?")) {
        
      fetch(`${APIURL}/${postId}`,{
        method:'DELETE'
})
        .then(response=>{
            
            if (response.ok) {
                alert('Post has been successfully deleted');
            document.getElementById('yourblog').innerHTML = "";
                displayPosts();
            } else {
                console.error("Failed to delete post on the server.");
            }
        })
        
    
}}
// function for creating a new post as a user
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

function main() {
    displayPosts();
    addNewPostListener();
}
document.addEventListener("DOMContentLoaded", main);