import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ArtPiece {
  image: string;
  title?: string;
  artist?: string;
  description?: string;
  [key: string]: any;
}

interface ArtGallery3DProps {
  artPieces?: ArtPiece[];
  onArtClick?: (art: ArtPiece) => void;
}

class FirstPersonControls {
  camera: THREE.PerspectiveCamera;
  domElement: HTMLElement;
  movementSpeed = 5;
  lookSpeed = 0.002;
  
  moveForward = false;
  moveBackward = false;
  moveLeft = false;
  moveRight = false;
  
  phi = 0;
  theta = 0;
  
  constructor(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
    this.camera = camera;
    this.domElement = domElement;
    
    this.domElement.addEventListener('click', this.onClick.bind(this));
    document.addEventListener('pointerlockchange', this.onPointerlockChange.bind(this));
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
  }
  
  onClick() {
    this.domElement.requestPointerLock();
  }
  
  onKeyDown(event: KeyboardEvent) {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.moveForward = true;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.moveLeft = true;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.moveBackward = true;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.moveRight = true;
        break;
    }
  }
  
  onKeyUp(event: KeyboardEvent) {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.moveForward = false;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.moveLeft = false;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.moveBackward = false;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.moveRight = false;
        break;
    }
  }
  
  onMouseMove(event: MouseEvent) {
    if (document.pointerLockElement === this.domElement) {
      this.phi -= event.movementY * this.lookSpeed;
      this.theta -= event.movementX * this.lookSpeed;
      
      this.phi = Math.max(-Math.PI/2, Math.min(Math.PI/2, this.phi));
      
      this.camera.rotation.order = 'YXZ';
      this.camera.rotation.y = this.theta;
      this.camera.rotation.x = this.phi;
    }
  }
  
  update(delta: number, walls: THREE.Mesh[]) {
    const direction = new THREE.Vector3();
    
    if (this.moveForward) direction.z -= 1;
    if (this.moveBackward) direction.z += 1;
    if (this.moveLeft) direction.x -= 1;
    if (this.moveRight) direction.x += 1;
    
    if (direction.length() > 0) {
      direction.normalize();
      direction.applyQuaternion(this.camera.quaternion);
      direction.y = 0;
      direction.normalize();
      
      const newPosition = this.camera.position.clone();
      newPosition.add(direction.multiplyScalar(this.movementSpeed * delta));
      
      // Simple collision detection
      let collision = false;
      const playerBox = new THREE.Box3().setFromCenterAndSize(
        newPosition, 
        new THREE.Vector3(0.8, 2, 0.8)
      );
      
      for (const wall of walls) {
        const wallBox = new THREE.Box3().setFromObject(wall);
        if (playerBox.intersectsBox(wallBox)) {
          collision = true;
          break;
        }
      }
      
      if (!collision) {
        this.camera.position.copy(newPosition);
      }
    }
  }
  
  dispose() {
    document.removeEventListener('keydown', this.onKeyDown.bind(this));
    document.removeEventListener('keyup', this.onKeyUp.bind(this));
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
  }
}

const defaultArtPieces: ArtPiece[] = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    title: 'The Starry Night',
    artist: 'Vincent van Gogh',
    description: '1889 oil painting depicting a swirling night sky over a village'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/396px-Mona_Lisa.jpg',
    title: 'Mona Lisa',
    artist: 'Leonardo da Vinci',
    description: 'Portrait of Lisa Gherardini, painted between 1503-1519'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg',
    title: 'The Creation of Adam',
    artist: 'Michelangelo',
    description: 'Fresco painting from the Sistine Chapel ceiling'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/977px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg',
    title: 'Self-Portrait',
    artist: 'Vincent van Gogh',
    description: 'One of many self-portraits by van Gogh'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg/800px-Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg',
    title: 'Girl with a Pearl Earring',
    artist: 'Johannes Vermeer',
    description: 'Oil painting created around 1665'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/The_Great_Wave_off_Kanagawa.jpg/1280px-The_Great_Wave_off_Kanagawa.jpg',
    title: 'The Great Wave off Kanagawa',
    artist: 'Hokusai',
    description: 'Woodblock print from the series Thirty-six Views of Mount Fuji'
  }
];

const ArtGallery3D: React.FC<ArtGallery3DProps> = ({ 
  artPieces = defaultArtPieces, 
  onArtClick 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isStarted, setStarted] = useState(false);
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  const controlsRef = useRef<FirstPersonControls>();
  const wallsRef = useRef<THREE.Mesh[]>([]);
  const clockRef = useRef<THREE.Clock>();

  useEffect(() => {
    if (!mountRef.current || !isStarted) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf0f0f0, 1, 100);
    scene.background = new THREE.Color(0xf5f5f5);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 1.6, 10);
    camera.rotation.set(0, Math.PI, 0);

    // Renderer with optimized shadow settings
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Limit the number of lights to avoid texture unit overflow
    renderer.capabilities.maxTextures = Math.min(renderer.capabilities.maxTextures, 8);
    mountRef.current.appendChild(renderer.domElement);

    // Clock for delta time
    const clock = new THREE.Clock();
    clockRef.current = clock;

    // Controls
    const controls = new FirstPersonControls(camera, renderer.domElement);
    controlsRef.current = controls;

    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0); 
    scene.add(ambientLight);

    // Main directional light for overall illumination
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(20, 50, 20);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Add a few strategic point lights instead of individual spotlights
    const pointLight1 = new THREE.PointLight(0xffffff, 1, 50);
    pointLight1.position.set(-15, 4, 0);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 50);
    pointLight2.position.set(15, 4, 0);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 1, 50);
    pointLight3.position.set(0, 4, -15);
    scene.add(pointLight3);

    const pointLight4 = new THREE.PointLight(0xffffff, 1, 50);
    pointLight4.position.set(0, 4, 15);
    scene.add(pointLight4);

    // Create textures with fallback colors
    const textureLoader = new THREE.TextureLoader();
    
    // Use solid colors as fallback for textures
    const wallMaterial = new THREE.MeshLambertMaterial({ color: 0xe8e8e8 });
    const floorMaterial = new THREE.MeshLambertMaterial({ color: 0xd0d0d0 });

    // Try to load textures but don't depend on them
    textureLoader.load(
      '/assets/wall.png',
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 1);
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        wallMaterial.map = texture;
        wallMaterial.needsUpdate = true;
      },
      undefined,
      (error) => console.log('Wall texture not found, using solid color')
    );

    textureLoader.load(
      '/assets/marble_texture.png',
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(20, 20);
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        floorMaterial.map = texture;
        floorMaterial.needsUpdate = true;
      },
      undefined,
      (error) => console.log('Floor texture not found, using solid color')
    );

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(100, 100);
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Ceiling
    const ceilingGeometry = new THREE.PlaneGeometry(100, 100);
    const ceilingMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x909090,
    });
    const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 6;
    scene.add(ceiling);

    // Gallery walls and rooms
    const walls: THREE.Mesh[] = [];
    const artworks: THREE.Mesh[] = [];

    const createWall = (width: number, height: number, depth: number, x: number, y: number, z: number, rotY = 0) => {
      const geometry = new THREE.BoxGeometry(width, height, depth);
      const wall = new THREE.Mesh(geometry, wallMaterial);
      wall.position.set(x, y, z);
      wall.rotation.y = rotY;
      wall.castShadow = true;
      wall.receiveShadow = true;
      scene.add(wall);
      walls.push(wall);
      return wall;
    };

    // Main gallery room
    const roomSize = 40;
    const wallHeight = 6;
    const wallThickness = 0.5;

    // Outer walls
    createWall(roomSize, wallHeight, wallThickness, 0, wallHeight/2, -roomSize/2); // North
    createWall(roomSize, wallHeight, wallThickness, 0, wallHeight/2, roomSize/2);  // South  
    createWall(wallThickness, wallHeight, roomSize, -roomSize/2, wallHeight/2, 0); // West
    createWall(wallThickness, wallHeight, roomSize, roomSize/2, wallHeight/2, 0);  // East

    // Create interior walls to form corridors and rooms
    const corridorWidth = 6;
    
    // Central corridor walls
    createWall(roomSize * 0.6, wallHeight, wallThickness, 0, wallHeight/2, -corridorWidth/2); // North corridor wall
    createWall(roomSize * 0.6, wallHeight, wallThickness, 0, wallHeight/2, corridorWidth/2);  // South corridor wall

    // Side room dividers
    createWall(wallThickness, wallHeight, roomSize * 0.3, -roomSize * 0.3, wallHeight/2, -roomSize * 0.25);
    createWall(wallThickness, wallHeight, roomSize * 0.3, roomSize * 0.3, wallHeight/2, -roomSize * 0.25);
    createWall(wallThickness, wallHeight, roomSize * 0.3, -roomSize * 0.3, wallHeight/2, roomSize * 0.25);
    createWall(wallThickness, wallHeight, roomSize * 0.3, roomSize * 0.3, wallHeight/2, roomSize * 0.25);

    wallsRef.current = walls;

    // Artwork positions
    const artworkPositions = [
      // North wall - main corridor
      { pos: [-8, 3, -19.7], rot: [0, 0, 0] },
      { pos: [0, 3, -19.7], rot: [0, 0, 0] },
      { pos: [8, 3, -19.7], rot: [0, 0, 0] },

      // West wall - main corridor
      { pos: [-19.7, 3, -8], rot: [0, Math.PI/2, 0] },
      { pos: [-19.7, 3, 0], rot: [0, Math.PI/2, 0] },
      { pos: [-19.7, 3, 8], rot: [0, Math.PI/2, 0] },    
      
      // South wall - main corridor  
      { pos: [-8, 3, 19.7], rot: [0, Math.PI, 0] },
      { pos: [0, 3, 19.7], rot: [0, Math.PI, 0] },
      { pos: [8, 3, 19.7], rot: [0, Math.PI, 0] },
      // East wall - main corridor
      { pos: [19.7, 3, -8], rot: [0, -Math.PI/2, 0] },
      { pos: [19.7, 3, 0], rot: [0, -Math.PI/2, 0] },
      { pos: [19.7, 3, 8], rot: [0, -Math.PI/2, 0] },
      // Corridor walls
      { pos: [-8, 3, -2.7], rot: [0, 0, 0] },
      { pos: [0, 3, -2.7], rot: [0, 0, 0] },
      { pos: [8, 3, -2.7], rot: [0, 0, 0] },      
    
      { pos: [-8, 3, 2.7], rot: [0, Math.PI, 0] },
      { pos: [0, 3, 2.7], rot: [0, Math.PI, 0] },
      { pos: [8, 3, 2.7], rot: [0, Math.PI, 0] },
      // Side rooms - left side
      { pos: [-19.7, 3, -8], rot: [0, Math.PI/2, 0] },
      { pos: [-19.7, 3, 0], rot: [0, Math.PI/2, 0] },
      { pos: [-19.7, 3, 8], rot: [0, Math.PI/2, 0] },
      // Side rooms - right side
      { pos: [19.7, 3, -8], rot: [0, -Math.PI/2, 0] },
      { pos: [19.7, 3, 0], rot: [0, -Math.PI/2, 0] },
      { pos: [19.7, 3, 8], rot: [0, -Math.PI/2, 0] },
      // Additional artworks in side rooms
      { pos: [-11.7, 3, -10], rot: [0, Math.PI/2, 0] },
      { pos: [11.7, 3, -10], rot: [0, -Math.PI/2, 0] },
      { pos: [-11.7, 3, 10], rot: [0, Math.PI/2, 0] },
      { pos: [11.7, 3, 10], rot: [0, -Math.PI/2, 0] },
      // Side rooms
      { pos: [-11.7, 3, -10], rot: [0, Math.PI/2, 0] },
      { pos: [11.7, 3, -10], rot: [0, -Math.PI/2, 0] },
      { pos: [-11.7, 3, 10], rot: [0, Math.PI/2, 0] },
      { pos: [11.7, 3, 10], rot: [0, -Math.PI/2, 0] },

    ];


    // Load textures and create artwork
    const loader = new THREE.TextureLoader();
    
    artworkPositions.forEach((artPos, index) => {
      if (index < artPieces.length) {
        const art = artPieces[index];

        loader.load(
          art.image,
          (texture) => {
            const geometry = new THREE.PlaneGeometry(7, 3);
            const material = new THREE.MeshLambertMaterial({ map: texture, side: THREE.FrontSide });

            const artwork = new THREE.Mesh(geometry, material);
            artwork.position.set(...artPos.pos);
            artwork.rotation.set(...artPos.rot);
            (artwork as any).userData = art;
            artwork.castShadow = true;
            artwork.receiveShadow = true;
            scene.add(artwork);
            artworks.push(artwork);
          },
          undefined,
          (error) => {
            console.warn('Failed to load texture:', art.image, error);
            const geometry = new THREE.PlaneGeometry(7, 3);
            const material = new THREE.MeshLambertMaterial({ color: 0x888888 });
            const placeholder = new THREE.Mesh(geometry, material);

            placeholder.position.set(...artPos.pos);
            placeholder.rotation.set(...artPos.rot);
            (placeholder as any).userData = art;
            scene.add(placeholder);
            artworks.push(placeholder);
          }
        );
      }
    });

    // Raycaster for artwork interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(0, 0); // Center of screen

    const handleClick = () => {
      if (document.pointerLockElement !== renderer.domElement) return;
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(artworks);
      
      if (intersects.length > 0) {
        const artwork = intersects[0].object as any;
        if (artwork.userData) {
          setSelectedArt(artwork.userData);
          if (onArtClick) {
            onArtClick(artwork.userData);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      controls.update(delta, walls);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = mountRef.current?.clientWidth || width;
      const h = mountRef.current?.clientHeight || height;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      controls.dispose();
      document.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement.parentNode) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [artPieces, onArtClick, isStarted]);

  const handleStart = () => {
    setStarted(true);
  };

  const closeArtModal = () => {
    setSelectedArt(null);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#000' }}>
      {!isStarted && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          zIndex: 10
        }}>
          <h1 style={{ 
            fontSize: '4rem', 
            marginBottom: '1rem', 
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            fontWeight: 'bold'
          }}>
            Virtual Art Gallery
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '3rem', 
            textAlign: 'center',
            opacity: 0.9 
          }}>
            Explore masterpieces in an immersive 3D environment
          </p>
          <button
            onClick={handleStart}
            style={{
              fontSize: '1.5rem',
              padding: '1rem 3rem',
              backgroundColor: '#fff',
              color: '#333',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              marginBottom: '3rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              transform: 'scale(1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }}
          >
            Enter Gallery
          </button>
          <div style={{ 
            textAlign: 'center', 
            lineHeight: '1.8',
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}><strong>Controls:</strong></p>
            <p><strong>WASD</strong> or <strong>Arrow Keys</strong> - Move around</p>
            <p><strong>Mouse</strong> - Look around</p>
            <p><strong>Click</strong> on artwork to view details</p>
            <p style={{ fontSize: '0.9rem', color: '#ddd', marginTop: '1rem' }}>
              Press <strong>ESC</strong> to exit pointer lock
            </p>
          </div>
        </div>
      )}

      {selectedArt && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '10px',
            maxWidth: '200px',
            maxHeight: '80vh',
            overflow: 'auto',
            position: 'relative'
          }}>
            <button
              onClick={closeArtModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ×
            </button>
            <h2 style={{ marginBottom: '0.5rem', color: '#333' }}>{selectedArt.title}</h2>
            {selectedArt.artist && (
              <p style={{ color: '#666', marginBottom: '1rem', fontStyle: 'italic' }}>
                by {selectedArt.artist}
              </p>
            )}
            <img 
              src={selectedArt.image} 
              alt={selectedArt.title}
              style={{ 
                width: '100%', 
                maxHeight: '300px', 
                objectFit: 'contain',
                marginBottom: '1rem',
                borderRadius: '5px'
              }}
            />
            {selectedArt.description && (
              <p style={{ color: '#444', lineHeight: 1.6 }}>{selectedArt.description}</p>
            )}
          </div>
        </div>
      )}

      <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};

export default ArtGallery3D;