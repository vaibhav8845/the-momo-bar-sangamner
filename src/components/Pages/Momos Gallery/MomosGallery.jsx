import React, { useEffect } from 'react';
import './MomosGallery.css';

const images = [
  { src: 'https://i.postimg.cc/bw8HcrM6/m1.jpg', link: '/item1' },
  { src: 'https://i.postimg.cc/K8N7ZFhm/m2.jpg', link: '/item2' },
  { src: 'https://i.postimg.cc/dtGmxrWk/m3.jpg', link: '/item3' },
  { src: 'https://i.postimg.cc/q7vsqYpy/m4.jpg', link: '/item4' },
  { src: 'https://i.postimg.cc/ydJ0XZgN/m5.jpg', link: '/item5' },
  { src: 'https://i.postimg.cc/G2ZGMmGx/m6.jpg', link: '/item6' },
  { src: 'https://i.postimg.cc/HLvQy2LK/m7.jpg', link: '/item7' },
  { src: 'https://i.postimg.cc/7h07jrN8/m8.jpg', link: '/item8' },
  { src: 'https://i.postimg.cc/bw8HcrM6/m1.jpg', link: '/item8' },

];

function MomosGallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mt-5'>      
        <h3 className="Momos-title container-fluid">Momos Gallery</h3>

    <div className="image-grid">
      {images.map((image, index) => (
        <a href={image.link} key={index}>
          <img src={image.src} alt={`Momo ${index + 1}`} />
        </a>
      ))}
    </div>
    </div>
  );
}

export default MomosGallery;
