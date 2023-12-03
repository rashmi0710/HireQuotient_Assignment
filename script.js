const image = document.querySelector('.bdo_imag');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      // You can adjust the scroll range and scale factor as needed
      const scaleFactor = 1 + scrollPosition / 7000;

      image.style.transform = `scale(${scaleFactor})`;
    });

    