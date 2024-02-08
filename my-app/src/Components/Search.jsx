import React  from "react";
function Search()
{
    let search = document.querySelector('#search');
    
function search1()
{
    console.log("clicked")
  document.querySelector('#search').onclick=() =>{
      search.classList.toggle('active');
  }
}
   return  <div class="search">
            <input type="search" onClick={search1}  placeholder="search..."/>
        </div>
}
export default Search