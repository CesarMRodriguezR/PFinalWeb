document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.getElementById('searchToggle');
    const searchContainer = document.getElementById('searchContainer');
    const categoryToggle = document.getElementById('categoryToggle');
    const categoryContainer = document.getElementById('categoryContainer');
    searchToggle.addEventListener('click', () => {
      searchContainer.classList.toggle('show');
    });
    categoryToggle.addEventListener('click', () => {
      categoryContainer.classList.toggle('show');
    });
  });