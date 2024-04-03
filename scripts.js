function handleFileSelect(event) {
    const fileInput = event.target;
    const files = fileInput.files;
  
    for (const file of files) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
  
        reader.onload = function (e) {
          const imageSrc = e.target.result;
          displayImage(imageSrc);
        };
  
        reader.readAsDataURL(file);
      }
    }
  
    // Clear the file input after processing
    fileInput.value = null;
  }
  
  function displayImage(imageSrc) {
    const gallery = document.getElementById('gallery');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
  
    const img = document.createElement('img');
    img.src = imageSrc;
  
    const comments = document.createElement('div');
    comments.classList.add('comments');
    comments.innerHTML = '<p>Comments:</p>';
  
    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Add a comment...';
    
    const addCommentBtn = document.createElement('button');
    addCommentBtn.textContent = 'Add Comment';
    addCommentBtn.addEventListener('click', function () {
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        addComment(comments, commentText);
        commentInput.value = '';
      }
    });
  
    imgContainer.appendChild(img);
    imgContainer.appendChild(comments);
    imgContainer.appendChild(commentInput);
    imgContainer.appendChild(addCommentBtn);
    gallery.appendChild(imgContainer);
  }
  
  function addComment(commentsContainer, commentText) {
    const comment = document.createElement('p');
    comment.textContent = commentText;
    commentsContainer.appendChild(comment);
  }
  