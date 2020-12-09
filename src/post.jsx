import React from 'react';

export default (props) => {
  let {posts, allow} = props;
  return(
    <>
    {allow ? <table>
    <tr>
  <th>User Id</th>
  <th>Id</th>
  <th>Title</th>
  <th>Body</th>
  </tr>
  {posts.map((each) => (
    <tr key = {each.id}>
      <td>{each.userId} </td>
      <td>{each.id} </td>
      <td>{each.title} </td>
      <td>{each.body} </td>
    </tr>
  ))}
   </table>: <h1>Loading....</h1> }
 
    </>

  )
}