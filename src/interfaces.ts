/*========================
INTERFACES
========================*/
interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = {
  name: "ali",
  avatar: `img/ali.png`,
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}

const newPost: Post = {
  title: `post title`,
  body: `body post goes here`,
  tags: [`tech`, `IT`],
  created_at: new Date(),
  author: authorOne,
};

/*========================
INTERFACES WITH FUNCTIONS
========================*/
const getPost = (post: Post): void => {
  console.log(`Post title is ${post.title} created by ${post.author.name}`);
};

/*========================
INTERFACES WITH ARRAYS
========================*/
const posts: Post[] = [];
posts.push(newPost);
console.log(posts);
