import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated, config, easings } from '@react-spring/three'

export function Box(props) {
  const ref = useRef()

  const [hovered, hover] = useState(false)

  const { scale } = useSpring({
    scale: hovered ? 1.35 : 1,
    config: config.stiff,
  })

  const { emissiveIntensity } = useSpring({
    emissiveIntensity: hovered ? 1 : 0.1,
    config: { duration: 150 },
  })

  useFrame(() => {
    if (!hovered) {
      ref.current.rotation.x += 0.01
      ref.current.rotation.z += 0.01
    }
  })

  return (
    <animated.mesh
      {...props}
      ref={ref}
      scale={scale}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <animated.meshStandardMaterial
        color="#333"
        emissive="white"
        emissiveIntensity={emissiveIntensity}
      />
    </animated.mesh>
  )
}
