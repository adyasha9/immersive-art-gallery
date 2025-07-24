
import React, { useEffect, useState } from 'react';
import ArtGallery3D from './components/ArtGallery3D';
import { getFallbackArtworks, apiQueries, fetchArtworksByTitles } from './utils/artApi';


const eras = [
  "Prehistoric",
  "Ancient",
  "Medieval",
  "Renaissance",
  "Baroque",
  "Rococo",
  "Neoclassicism",
  "Romanticism",
  "Realism",
  "Impressionism",
  "Post-Impressionism",
  "Modern",
  "Contemporary"
];


const MainApp = () => {
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [selectedArt, setSelectedArt] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [artPieces, setArtPieces] = useState<any[]>([]);
  const [loadingStatus, setLoadingStatus] = useState('');
  const [fade, setFade] = useState(false);

useEffect(() => {
  const loadSelectedEraArt = async () => {
    if (!selectedEra) return;

    setIsLoading(true);
    setLoadingStatus(`Loading ${selectedEra} artworks...`);

    try {
      const eraQuery = apiQueries.find(q => q.era === selectedEra);
      if (!eraQuery || !eraQuery.titles) throw new Error("No titles found for era");

      const artworks = await fetchArtworksByTitles(eraQuery.titles, selectedEra, setLoadingStatus);
      setArtPieces(artworks);
      setLoadingStatus('Gallery ready.');
    } catch (err) {
      console.error("Failed to load era artworks:", err);
      setLoadingStatus('Error loading artworks. Showing fallback.');
      setArtPieces(getFallbackArtworks());
    }

    setIsLoading(false);
  };

  loadSelectedEraArt();
}, [selectedEra]);

  
  if (!selectedEra && !fade) {
    return (
      <div
        className="era-select"
        style={{
          opacity: fade ? 0 : 1,
          transition: 'opacity 0.6s',
          pointerEvents: fade ? 'none' : 'auto',
        }}
      >
        <h1>Welcome to the Immersive Art Gallery</h1>
        <p>
          Select an art era to explore a 3D gallery of authentic paintings.<br />
          <span className="gallery-instructions">
            Use <b>WASD</b> to move, <b>click</b> to look around, and click paintings for details.
          </span>
        </p>
        <div className="era-buttons">
          {eras.map(era => (
            <button
              key={era}
              className="era-btn"
              onClick={() => {
                setFade(true);
                setTimeout(() => setSelectedEra(era), 600);
              }}
            >
              {era}
            </button>
          ))}
        </div>
        <div className="gallery-instructions" style={{ marginTop: '0.5rem', fontSize: '0.98rem' }}>
          Powered by Art Institute of Chicago API
        </div>
      </div>
    );
  }

  if (fade && !selectedEra) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="loading-overlay">
        <div className="loading-text">
          <div style={{ fontSize: '2rem', marginBottom: '1.2rem' }}>Loading {selectedEra} Gallery...</div>
          <div style={{ fontSize: '1.1rem', color: '#bdbdbd', marginBottom: '1.5rem' }}>{loadingStatus}</div>
          <div style={{ width: '220px', height: '10px', background: '#23272f', borderRadius: '8px', margin: '0 auto 1.2rem auto', overflow: 'hidden' }}>
            <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, #f5e7b2 30%, #e0c3fc 70%)', borderRadius: '8px', animation: 'pulse 1.2s infinite alternate' }}></div>
          </div>
          <div style={{ fontSize: '0.95rem', color: '#888' }}>Fetching authentic artworks from museum collection...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <ArtGallery3D artPieces={artPieces.filter(p => p.period === selectedEra)} onArtClick={setSelectedArt}/>
      {selectedArt && (
        <div className="art-details">
          <h2>{selectedArt.title}</h2>
          <p>{selectedArt.artist}</p>
          <img src={selectedArt.image} alt={selectedArt.title} />
        </div>
      )}
    </div>
  );
};

export default MainApp;