import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }}>
      <Spline
        scene="https://prod.spline.design/QMUY2xcSN6bqU1LR/scene.splinecode" 
        style={{ transform: "scale(0.9) translateX(-30vw) translateY(-50vh)" }} // Added translateY(-10vh)
      />
    </main>
  );
}
