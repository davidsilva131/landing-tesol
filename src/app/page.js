'use client'
import { Canvas } from '@react-three/fiber'
import { state } from '@/Utils/threeUtils'
import Items from '@/components/Items'

export default function Home () {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
      <Items />
    </Canvas>
  )
}
