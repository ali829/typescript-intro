"use strict";
const authorOne = {
    name: "ali",
    avatar: `img/ali.png`,
};
const newPost = {
    title: `post title`,
    body: `body post goes here`,
    tags: [`tech`, `IT`],
    created_at: new Date(),
    author: authorOne,
};
/*========================
INTERFACES WITH FUNCTIONS
========================*/
const getPost = (post) => {
    console.log(`Post title is ${post.title} created by ${post.author.name}`);
};
/*========================
INTERFACES WITH ARRAYS
========================*/
const posts = [];
posts.push(newPost);
console.log(posts);
