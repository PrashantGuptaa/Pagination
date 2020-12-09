import React from 'react';

export default (props) => {
  let {totalPosts, postPerPage, handlePage} = props;
let count = [];
  for(let i = 0 ; i < Math.ceil(totalPosts/postPerPage); i++)
  {
    count.push(i + 1);
  }
  return(
    <div className = "Paginate">
{count.map(count => (
<a  href = "#" className = "box" key = {count} onClick = {() => handlePage(count) } >{count}</a>
))}
    </div>
  )
}