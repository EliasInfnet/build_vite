import { expose } from "comlink"
import cv from "./opencv-lib"
const cvInstance = cv()

function getResultado() {
  return 'resultado'
}

expose({
  getResultado
})