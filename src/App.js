import { useEffect, useState } from 'react';
import './App.css'


function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <Distric name= {'Noakhali'} special = {'Bivhag'} ></Distric>
      <Distric name= {'Dhaka'} special = {'Lalbag Kolla'} ></Distric>
      <Distric name= {'ASH'} special = {'School'} ></Distric>
    </div>
  );
}


//Load

function LoadPost (){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  return (
    <div className="newPost">
      <h1>Post: {posts.length} </h1>
      {
        posts.map (post => <Post title={post.title} description={post.body} ></Post> )
      }
    </div>
  )
}
//
function Post (props){
  return(
    <div className="post">
      <h2>Title: {props.title} </h2>
      <p>Body:{props.description}</p>
      
    </div>
  )
}

// load end
function Distric (props) {
  const [power, setPower] = useState(1);

  const boosPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  } 
  return (
    <div className="distric">
      <h2>Name: {props.name} </h2>
      <h3>Special: {props.special} </h3>
      <h4>Power: {power} </h4>
      <button onClick={boosPower}> Boost The Power</button>
    </div>
  )
}

export default App;
