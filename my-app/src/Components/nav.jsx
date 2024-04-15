function nav()
{   
  const auth = localStorage.getItem('user')
  return   <nav class="navbar"  >
    <a href="/#home">Home</a>
    <a href="/product">Product</a>
    <a href="/blogs">Blogs</a>
    {
      auth ?
      <a href="/review">Review</a>
      : null
    }
        {/* <a href="/admin-product">Admin Product List</a> */}
    <a href="/contact">Contact</a>
    <a href="/about">About Us</a>
</nav>
}
export default nav