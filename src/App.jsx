
import { Suspense } from 'react';
import './App.css'
import Batsman from './batsman';
import Users from './user';
import Friends from './freinds';
import Posts from './posts';
import Players from './players';
import Addcounter from './practice';
import Test from './test';


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
  
// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   return res.json();
//   }


// const fetchPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }


function App() {
  // const friendsPromise= fetchFriends()
  // const postsPromise = fetchPosts();
 
  // const handelClick5 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // }  

  return (
    <>
     
      <h1>Vite + React</h1>
      <Test></Test>
     {/* <Addcounter></Addcounter> */}
      


      {/* <Players>s

      </Players> */}

      {/* <Suspense fallback={<h3>Posts are comming....</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}


      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      
      {/* <Suspense fallback={<h3>Friends are comming for treat</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
{/*       
      <Batsman></Batsman>

      <Counter></Counter>
      
      <button onClick={handelClick}>Click Me</button>
      <button onClick={() => handelClick5(5)}>Click Me 5</button> */}
     
    </>
  )
}

export default App
