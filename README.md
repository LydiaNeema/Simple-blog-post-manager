# Simple-blog-post-manager
# 📰 Tuko Blog Site

A simple blog post manager built with HTML, CSS, and JavaScript. This project allows users to view, create, edit, and delete blog posts using a mock RESTful API powered by JSON Server.

---

## 📸 Demo

> ✨ A working demo shows:
>
> * Post list loads on the left
> * Clicking a title shows full post details on the right
> * Users can add new posts via a form
> * Posts can be edited or deleted

---

## 🚀 Features

* 📜 View a list of blog posts with titles and images
* 🔍 Click a post to view its full content
* ➕ Add a new blog post with title, author, image URL, and content
* ✏️ Edit an existing blog post in-place
* ❌ Delete a post with confirmation
* 🔄 Uses `fetch()` with GET, POST, PATCH, and DELETE requests

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Flexbox + Responsive Design)
* Vanilla JavaScript (ES6+)
* [Font Awesome](https://fontawesome.com/)
* [JSON Server](https://github.com/typicode/json-server)

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── css/
│   └── style.css
├── src/
│   └── index.js
└── db.json
```

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tuko-blog.git
cd tuko-blog
```

### 2. Install JSON Server

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
npm install -g json-server@0.17.4
```

### 3. Create Sample Data in `db.json`

Example format:

```json
{
  "Posts": [
    {
      "id": 1,
      "Title": "My First Blog",
      "Author": "Lydia",
      "Image": "https://via.placeholder.com/400x200",
      "Content": "This is the body of the blog post."
    }
  ]
}
```

### 4. Start JSON Server

```bash
json-server db.json
```

The API will run at:
`http://localhost:3000/Posts`

### 5. Launch the Frontend

Use Live Server in VS Code or any other static server:

```bash
live-server
```

Then navigate to:
`http://127.0.0.1:5500` (or the live-server URL)

---
You can also view the deployed project via the link 

## 📌 Endpoints Reference

* `GET /Posts` - Fetch all posts
* `GET /Posts/:id` - Get a single post by ID
* `POST /Posts` - Create a new post
* `PATCH /Posts/:id` - Update a post
* `DELETE /Posts/:id` - Delete a post

---



## 🙏 Acknowledgements

This project was built as part of a coding challenge at Moringa School.
### Author:Lydia Neema.
### Lecturer:Beatrice Wambui
---

## 📄 License

This project is licensed for educational and personal use.
