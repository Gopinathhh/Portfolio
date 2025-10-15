
      const menuToggle = document.querySelector('.menu-toggle');
      const navbar = document.querySelector('.navbar');

      menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
       if (navbar.classList.contains('active')) {
          menuToggle.innerHTML = '<i class="ri-close-line"></i>';
       } else{
          menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
       }
      });

       const moonIcon = document.querySelector('.moon-icon');
      moonIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
          moonIcon.innerHTML = ' <i class="ri-sun-line"></i>';
        } else {
          moonIcon.innerHTML = '<i class="ri-moon-line"></i>';
        }
      });

     /*
      const textTarget = document.querySelector('.text-target');
      const roles = ['dynamic', 'modern', 'interactive'];
      let roleIndex = 0;
      let charIndex = 0;

      function typeRole() {
        if (charIndex < roles[roleIndex].length) {
          textTarget.textContent += roles[roleIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeRole, 150);
        } else {
          setTimeout(eraseRole, 2000);
        }
      }

      function eraseRole() {
        if (charIndex > 0) {
          textTarget.textContent = roles[roleIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(eraseRole, 100);
        } else {
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(typeRole, 500);
        }
      }

      document.addEventListener('DOMContentLoaded', () => {
        if (roles.length) setTimeout(typeRole, 500);
      }); */
