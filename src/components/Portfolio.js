import React, { useState } from 'react';
import HeartEmoji from '../img/T.jpg';  // Importing image statically
import OceanWaves from '../img/noteiq.png';  // Example static import
import SandDunes from '../img/T.jpg';  // Example static import
import MountainPeaks from '../img/T.jpg';  // Example static import

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const worksPerPage = 4;  // Number of works per page
  
  // Pagination logic
  const indexOfLastWork = currentPage * worksPerPage;
  const indexOfFirstWork = indexOfLastWork - worksPerPage;
  const currentWorks = works.slice(indexOfFirstWork, indexOfLastWork);
  
  const totalPages = Math.ceil(works.length / worksPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Works</h1>
      <p style={styles.description}>
        Witness the beauty of nature through our lens, as we showcase stunning landscapes that evoke wonder and appreciation for the environment.
      </p>
      <div style={styles.cardContainer}>
        {currentWorks.map((work, index) => (
          <div key={index} style={styles.card}>
            <img src={work.image} alt={work.title} style={styles.image} />
            <div style={styles.overlay}>
              <h3 style={styles.cardTitle}>{work.title}</h3>
              <p style={styles.cardDescription}>{work.description}</p>
              <div style={styles.tags}>
                {work.tags.map((tag, idx) => (
                  <span key={idx} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            style={styles.pageButton}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

const works = [
  {
    image: SandDunes,  // Using imported image
    title: 'Project 1',
    description:
      'Capturing the breathtaking beauty of sand dunes through artistic lensmanship.',
    tags: ['Photography', 'Art Direction'],
  },
  {
    image: OceanWaves,  // Using imported image
    title: 'Ocean Waves',
    description:
      'The mesmerizing dance of ocean waves, bringing life to the seascape.',
    tags: ['Nature', 'Sea'],
  },
  {
    image: MountainPeaks,  // Using imported image
    title: 'Mountain Peaks',
    description:
      'Majestic peaks that touch the sky, inviting explorers to witness their grandeur.',
    tags: ['Adventure', 'Landscape'],
  },
  {
    image: HeartEmoji,  // Using imported image
    title: 'Heart Emoji',
    description: 'A creative take on the heart emoji, symbolizing love and connection.',
    tags: ['Art', 'Design'],
  },
  // Add more works here if needed
];

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    position: 'relative',
    width: '300px',
    height: '400px',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  },
  overlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
    transform: 'translateY(100%)',
    transition: 'transform 0.3s',
  },
  cardTitle: {
    fontSize: '1.2rem',
    margin: '0',
  },
  cardDescription: {
    fontSize: '0.9rem',
    margin: '10px 0',
  },
  tags: {
    display: 'flex',
    gap: '5px',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '2px 6px',
    borderRadius: '4px',
    fontSize: '0.8rem',
  },
  pagination: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  pageButton: {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};
