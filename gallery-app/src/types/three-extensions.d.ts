declare module 'three/examples/jsm/controls/PointerLockControls' {
  import { Camera } from 'three';
  import { EventDispatcher } from 'three';

  export interface PointerLockChangeEvent {}
  export interface PointerLockErrorEvent {}

  export class PointerLockControls extends EventDispatcher {
    constructor(camera: Camera, domElement: HTMLElement);

    domElement: HTMLElement;
    isLocked: boolean;

    connect(): void;
    disconnect(): void;
    dispose(): void;
    getObject(): any;
    lock(): void;
    unlock(): void;
    moveForward(distance: number): void;
    moveRight(distance: number): void;

    addEventListener(type: 'lock', listener: () => void): void;
    addEventListener(type: 'unlock', listener: () => void): void;
    removeEventListener(type: 'lock', listener: () => void): void;
    removeEventListener(type: 'unlock', listener: () => void): void;
  }
}
