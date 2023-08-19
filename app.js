
	   // Import the functions you need from the SDKs you need
       import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
       import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
       import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
       // TODO: Add SDKs for Firebase products that you want to use
       // https://firebase.google.com/docs/web/setup#available-libraries
 
       // Your web app's Firebase configuration
       // For Firebase JS SDK v7.20.0 and later, measurementId is optional
       const firebaseConfig = {
         apiKey: "AIzaSyB4Z71YW8OGtcsh-tiazaqYC7BS05pTxi4",
         authDomain: "shinerweb-auth.firebaseapp.com",
         projectId: "shinerweb-auth",
         storageBucket: "shinerweb-auth.appspot.com",
         messagingSenderId: "487776642853",
         appId: "1:487776642853:web:25b4821e77c6de7e90dccc",
         measurementId: "G-00FGRRF868"
       };
 
       // Initialize Firebase
       const app = initializeApp(firebaseConfig);
       const analytics = getAnalytics(app);
       const auth = getAuth();
       console.log(app);
 
       

	  //----- New Registration code start	  
	  document.getElementById("register").addEventListener("click", function() {
		  var email =  document.getElementById("email").value;
		  var password = document.getElementById("password").value;
		  //For new registration
		  createUserWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
		    alert("Registration successfully!!");
		    // ...
            
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    // ..
		    console.log(errorMessage);
		    alert(error);
		  });		  		  
	  });
	  //----- End





      /////////////////////////////////////////////////////////////////////////////////////////////

      
      const blogForm = document.getElementById('blogForm');
      const publishedBlogs = document.getElementById('publishedBlogs');
      
      blogForm.addEventListener('submit', function (event) {
        event.preventDefault();
      
        const blogTitle = document.getElementById('blogTitle').value;
        const blogDescription = document.getElementById('blogDescription').value;
      
        if (blogTitle && blogDescription) {
          const blogPost = document.createElement('div');
          blogPost.className = 'blog-post';
          blogPost.innerHTML = `
            <h3 class="blog-title">${blogTitle}</h3>
            <p>${blogDescription}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          `;
          
          publishedBlogs.appendChild(blogPost);
      
          // Clear input fields
          document.getElementById('blogTitle').value = '';
          document.getElementById('blogDescription').value = '';
        }
      });
      
      publishedBlogs.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
          event.target.parentNode.remove();
        } else if (event.target.classList.contains('edit-btn')) {
          const blogPost = event.target.parentNode;
          const blogTitle = blogPost.querySelector('.blog-title').textContent;
          const blogDescription = blogPost.querySelector('p').textContent;
      
          document.getElementById('blogTitle').value = blogTitle;
          document.getElementById('blogDescription').value = blogDescription;
          blogPost.remove();
        }
      });
      