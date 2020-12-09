import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => {
  let { totalPosts, postPerPage, handlePage } = props;
  let count = [];
  for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
    count.push(i + 1);
  }
  return (
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
  {count.map(count => (
    <li class="page-item"><a class="page-link" href="!#" onClick = {() => handlePage(count)} >{count} </a></li>

  ))}
   
  </ul>
</nav>
    );
};
