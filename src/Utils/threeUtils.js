import * as THREE from 'three'
import { proxy } from 'valtio'


export const damp = THREE.MathUtils.damp
export const material = new THREE.LineBasicMaterial({ color: 'white' })
export const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -0.5, 0), new THREE.Vector3(0, 0.5, 0)])
export const state = proxy({
  clicked: null,
  urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((u) => `/${u}.avif`)
})