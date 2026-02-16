      document.getElementById("regForm").addEventListener("submit", async function (e) {
          e.preventDefault();

          let valid = true;


          const fields = [
              "name", "email", "phone", "programme"
          ];


          fields.forEach(id => {
              const input = document.getElementById(id);

              if (input.value.trim() === "" || (id === "programme" && input.value === "")) {
                  input.classList.add("input-error");
                  valid = false;
                  setTimeout(() => input.classList.remove("input-error"), 800);
              }
          });

          if (!valid) return;


          document.getElementById("loadingOverlay").style.display = "flex";


          const progressBarWrapper = document.getElementById("progressBarWrapper");
          const progress = document.getElementById("progressBar");

          progressBarWrapper.style.display = "block";

          let width = 0;
          let interval = setInterval(() => {
              if (width >= 100) {
                  clearInterval(interval);
              } else {
                  width += Math.random() * 18;
                  progress.style.width = width + "%";
              }
          }, 200);


          let name = document.getElementById("name").value;
          let email = document.getElementById("email").value;
          let phone = document.getElementById("phone").value;
          let programme = document.getElementById("programme").value;


          let message =
              `NEW REGISTRATION:%0A%0A` +
              `Name: ${name}%0A` +
              `Email: ${email}%0A` +
              `Phone: ${phone}%0A` +
              `Programme: ${programme}%0A`;


          setTimeout(() => {
              window.open(`https://wa.me/2348105030950?text=${message}`, "_blank");
          }, 1200);


          setTimeout(() => {
              document.getElementById("regForm").submit();
          }, 1500);


          setTimeout(() => {
              document.getElementById("loadingOverlay").style.display = "none";
              document.getElementById("popupSuccess").style.display = "flex";
          }, 2000);

      });


      document.getElementById("closePopup").onclick = () => {
          document.getElementById("popupSuccess").style.display = "none";
      };


      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              }
          });
      }, {
          threshold: 0.2
      });

      document.querySelectorAll('.scroll-animate').forEach(el => {
          observer.observe(el);
      });


      window.addEventListener("DOMContentLoaded", function () {

    // 15th February 2026, 2:00 PM
    const target = new Date("2026-02-18T14:00:00").getTime();

    function updateCountdown() {
        const now = Date.now();
        const diff = target - now;

        if (diff <= 0) {
            document.getElementById("yn-countdown-wrapper").innerHTML =
                "<h2>The Digital Hub is LIVE 🎉</h2>";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("cd-days").textContent = d;
        document.getElementById("cd-hours").textContent = h;
        document.getElementById("cd-min").textContent = m;
        document.getElementById("cd-sec").textContent = s;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

});



      const words = ["Personal Developement Skills", "Core Finance Skills", "Digital Enterprenuership Skills",
          "Video Editing", "Content Creation", "Visual Branding", "Freelancing"
      ];
      let t = 0,
          i = 0,
          txt = '';
      const typeEl = document.querySelector('.typewriter');

      function type() {
          if (!typeEl) return;
          let word = words[i];
          txt = word.substring(0, t + 1);
          typeEl.innerHTML = `<span class="wrap">${txt}</span>`;
          t++;

          if (t === word.length) {
              setTimeout(() => {
                  t = 0;
                  i = (i + 1) % words.length;
                  type();
              }, 1200);
          } else setTimeout(type, 120);
      }
      type();


      const faders = document.querySelectorAll('.fade-in');
      const obs = new IntersectionObserver(entries => {
          entries.forEach(e => {
              if (e.isIntersecting) {
                  e.target.classList.add('visible');
                  obs.unobserve(e.target);
              }
          });
      }, {
          threshold: 0.12
      });
      faders.forEach(f => obs.observe(f));


      function animateCounter(id, end, duration = 1500) {
          const el = document.getElementById(id);
          if (!el) return;

          let start = 0;
          const step = Math.ceil(end / (duration / 20));

          const iv = setInterval(() => {
              start += step;

              if (start >= end) {
                  el.innerText = end;
                  clearInterval(iv);
              } else el.innerText = start;
          }, 20);
      }

      setTimeout(() => {
          // animateCounter('counter-students', 0);
          animateCounter('counter-projects', +10);
      }, 800);


      const menuBtn = document.getElementById('menuBtn');
      const navList = document.getElementById('navList');

      menuBtn.addEventListener('click', () => {
          menuBtn.classList.toggle('open');

          if (window.innerWidth <= 900) {
              navList.style.display = (navList.style.display === 'flex') ? 'none' : 'flex';
          }
      });


      document.querySelectorAll('#navList a[href^="#"]').forEach(link => {
          link.addEventListener('click', e => {
              e.preventDefault();

              document.querySelector(link.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });

              if (window.innerWidth <= 900) {
                  navList.style.display = 'none';
                  menuBtn.classList.remove('open');
              }
          });
      });


      const regForm = document.getElementById('regForm');

      regForm.addEventListener('submit', ev => {
          ev.preventDefault();

          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          const phone = document.getElementById('phone').value.trim();
          const age = document.getElementById('age').value.trim();
          const occupation = document.getElementById('occupation').value.trim();
          const experience = document.getElementById('experience').value.trim();
          const goal = document.getElementById('goal').value.trim();
          const programme = document.getElementById('programme').value;

          if (!name || !email || !phone) {
              alert('Please fill name, email and phone');
              return;
          }

          const subject = encodeURIComponent(`New Application: ${name}`);

          const body = encodeURIComponent(`
Name: ${name}
Email: ${email}
Phone: ${phone}
Age: ${age}
Occupation: ${occupation}
Experience: ${experience}
Goal: ${goal}
Programme: ${programme}
    `);

          window.location.href = `mailto:yansnetacademy@gmail.com?subject=${subject}&body=${body}`;

          document.getElementById('regMsg').style.display = 'block';
          regForm.reset();
      });


      const targetDate = new Date("2025-01-01T00:00:00").getTime();

      function updateCountdown() {
          const now = new Date().getTime();
          const diff = targetDate - now;

          if (diff <= 0) {
              document.querySelector(".circle-wrapper").innerHTML =
                  "<h3 style='color:white;'>Registration Closed</h3>";
              return;
          }

          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);

          document.getElementById("days").innerText = days;
          document.getElementById("hours").innerText = hours;
          document.getElementById("minutes").innerText = minutes;
          document.getElementById("seconds").innerText = seconds;

          const circleLength = 283;

          document.getElementById("days-circle").style.strokeDashoffset =
              circleLength - (days / 365) * circleLength;

          document.getElementById("hours-circle").style.strokeDashoffset =
              circleLength - (hours / 24) * circleLength;

          document.getElementById("minutes-circle").style.strokeDashoffset =
              circleLength - (minutes / 60) * circleLength;

          document.getElementById("seconds-circle").style.strokeDashoffset =
              circleLength - (seconds / 60) * circleLength;
      }

      setInterval(updateCountdown, 1000);
      updateCountdown();


document.getElementById("newsletterForm").addEventListener("submit", function () {

  const email = document.getElementById("newsletter").value.trim();
  if (!email) return;

  // Show success message
  document.getElementById("subMsg").style.display = "block";

  // WhatsApp auto message
  const whatsappMessage = encodeURIComponent(
    `Hello Yan’s Net Academy 👋

A new user just subscribed to the newsletter.

📧 Email: ${email}
🌐 Source: Website`
  );

  const whatsappURL = `https://wa.me/2348105030950?text=${whatsappMessage}`;

  // Open WhatsApp AFTER form submits
  setTimeout(() => {
    window.open(whatsappURL, "_blank");
  }, 1200);
});
