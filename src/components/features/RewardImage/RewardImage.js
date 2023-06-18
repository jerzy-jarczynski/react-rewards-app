import styles from './RewardImage.module.scss';
import React, { useEffect, useRef, useState } from 'react';

const RewardImage = ({ source, altText }) => {
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);

  const placeholderImage = `${process.env.PUBLIC_URL}/images/placeholders/reward-placeholder.png`;
  
  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    const img = imgRef.current;

    const checkImageVisibility = () => {
      if (img && img.offsetWidth === 0 && img.offsetHeight === 0) {
        setImageError(true);
      }
    };

    checkImageVisibility();
    window.addEventListener('resize', checkImageVisibility);

    return () => {
      window.removeEventListener('resize', checkImageVisibility);
    };
  }, []);

  return (
    <div className={styles.imageWrapper}>
      {imageError ? (
        <img src={placeholderImage} alt="Placeholder" className={styles.image} />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}${source}`}
          alt={altText}
          className={styles.image}
          ref={imgRef}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default RewardImage;
