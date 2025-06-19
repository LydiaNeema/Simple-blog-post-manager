const APIURL="http://localhost:3000/Posts";
function displayPost(){
    fetch(APIURL)
        .then(response=>response.json())
        .then(Posts=>{
            Posts.forEach(post=>{
                const postlist=document.createElement("div");
                postlist.id="post-list";
                postlist.style.padding="10px";
                const blogs=document.getElementById('blogs');
                blogs.appendChild(postlist);

                const orderedlist=document.createElement('ul');
                const list=document.createElement('li');
                postlist.appendChild(orderedlist);
                orderedlist.appendChild(list);
                list.id="list";

                list.innerHTML=`<a href="#post-${post.id}">${post.Title}</a>`;

                list.addEventListener("click", (e) => {
                    e.preventDefault();
                    displayBlog(post);
                });
               


            })
        })
    
}
displayPost();

function displayBlog(post){
        const yourblog=document.getElementById('yourblog');
        yourblog.innerHTML="";
        const display=document.createElement('div');
       
        display.innerHTML=`<h2>${post.Title}</h2>
        <p><strong>Author:</strong> ${post.Author}</p>
        <p>${post.Content}</p>
        <img src="${post.Image}alt="${post.Title}" style="max-width: 100%; height: auto;">
        `;
 yourblog.appendChild(display);
       
      
        
        
    }

