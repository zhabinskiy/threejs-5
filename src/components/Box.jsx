import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box as BoxMesh, Html, useCursor } from '@react-three/drei'
import { Vector3 } from 'three'

// Components
import { Popup } from './Popup'

export function Box(props) {
  const { position, height, color, title, description } = props

  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const scale = hovered ? height : 1

  const scaleVector = new Vector3(1, scale, 1)
  const positionVector = new Vector3(0, scale / 2, 0)
  const interpolation = 0.1

  useFrame(() => {
    ref.current.children[0].scale.lerp(scaleVector, interpolation)
    ref.current.position.lerp(positionVector, interpolation)
  })

  useCursor(hovered)

  return (
    <group position={position}>
      <mesh
        ref={ref}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <BoxMesh>
          <meshToonMaterial color={color} />
        </BoxMesh>
        <Html position={[0.825, height * 0.95, 0]}>
          <Popup visible={hovered} title={title} description={description} />
        </Html>
      </mesh>
    </group>
  )
}
