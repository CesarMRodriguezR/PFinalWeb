document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.getElementById('searchToggle');
    const searchContainer = document.getElementById('searchContainer');

    searchToggle.addEventListener('click', () => {
      searchContainer.classList.toggle('show');
    });
  });