import React, { useEffect, useState } from 'react';

const Business = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <img
            src="https://i.gifer.com/4V0b.gif" 
            alt="Loading..."
            style={{ width: '600px', height: '600px', marginLeft:'300px',marginBottom:'700px' }}
          />
          <p>Please Wait...</p>
        </div>
      ) : (
        <div >
          <h2 style={{textAlign:'center'}}>Blog Posts</h2>
          <ul>
            {posts.map((post) => (
              <li style={{color:'purple'}} key={post.id}>
                <h3 style={{color:'purple'}}>{post.title}</h3>
                <p style={{color:'black'}}>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Business;
