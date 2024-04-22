// import React, { useState, useEffect } from 'react';
// import Post from '../Post.js';
// import DeletePost from './DeletePost';

// // Example parent component
// export default function PostContainer() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch posts or set them in some way
//     // Example fetch:
//     fetch('http://localhost:4000/post')
//       .then(response => response.json())
//       .then(data => setPosts(data))
//       .catch(error => console.error('Error fetching posts:', error));
//   }, []);

//   const handleDelete = (postId) => {
//     // Remove the deleted post from the state
//     setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
//   };

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post._id}>
//           <Post {...post} />
//           <DeletePost postId={post._id} onDelete={handleDelete} />
//         </div>
//       ))}
//     </div>
//   );
// }
