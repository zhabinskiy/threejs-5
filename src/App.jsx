import { Canvas } from '@react-three/fiber'
import { Box } from './components'

export default function App() {
  return (
    <Canvas shadows camera={{ fov: 45, position: [0, 3, -10] }}>
      {/* <ambientLight intensity={0.5} /> */}
      <directionalLight position={[2, 2, 0]} intensity={1} />
      <group position={[0, -0.5, 0]}>
        <Box
          position={[1.5, 0, 0]}
          height={1.6}
          color="#fecf11"
          title="$27,000"
          description="May, MRR"
        />
        <Box
          position={[0, 0, 0]}
          height={1.4}
          color="#fe5011"
          title="$12,500"
          description="June, MRR"
        />
        <Box
          position={[-1.5, 0, 0]}
          height={1.8}
          color="#55df0b"
          title="$43,000"
          description="July, MRR"
        />
      </group>
    </Canvas>
  )
}
