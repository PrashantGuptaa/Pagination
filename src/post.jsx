import React from 'react';

export default (props) => {
  let {posts, allow} = props;
  return(
    <>
    {allow ? 
    <div className = 'padding'>
      <table class="table">
         <thead class="thead-dark">
    <tr>
  <th style = {{width:"100px"}}>User Id</th>
  <th>Id</th>
  <th>Title</th>
  <th>Body</th>
  </tr>
  </thead>
  {posts.map((each) => (
    <tr key = {each.id}>
      <td scope="row">{each.userId} </td>
      <td scope="col">{each.id} </td>
      <td scope="col">{each.title} </td>
      <td scope="col">{each.body} </td>
    </tr>
  ))}
   </table>
   </div>: <h1>Loading...</h1> 
  }

    </>

  )
}