import React from 'react';
import './MomosGallery.css';

const images = [
  { src: 'm1.jpg', link: '/item1' },
  { src: 'm2.jpg', link: '/item2' },
  { src: 'm3.jpg', link: '/item3' },
  { src: 'm4.jpg', link: '/item4' },
  { src: 'm5.jpg', link: '/item5' },
  { src: 'm6.jpg', link: '/item6' },
  { src: 'm7.jpg', link: '/item7' },
  { src: 'm8.jpg', link: '/item8' },
  { src: 'm1.jpg', link: '/item8' },

];

function MomosGallery() {
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
