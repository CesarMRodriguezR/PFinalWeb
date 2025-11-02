document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.getElementById('searchToggle');
    const searchContainer = document.getElementById('searchContainer');
    const categoryToggle = document.getElementById('categoryToggle');
    const categoryContainer = document.getElementById('categoryContainer');
    searchToggle.addEventListener('click', () => {
      if (categoryContainer.classList.contains('show')){
        categoryContainer.classList.remove('show');
      }
        searchContainer.classList.toggle('show');
    });
    categoryToggle.addEventListener('click', () => {
      if (searchContainer.classList.contains('show')){
        searchContainer.classList.remove('show');
      }
      categoryContainer.classList.toggle('show');
    });
  });