import * as THREE from "three";

let RADIAL_SEGMENTS = 8
let HEIGHT = 2

const regeneratingItems = {
  treeList: []
}

class Tree {
  hp = 10
  treeType = TreeType.FULL_TREE
  position = {
    x: 0,
    y: 0,
    z: 0
  }
}

function createTreeMetaData(x,y,z) {
  const tree = new Tree()
  tree.position.x = x
  tree.position.y = y
  tree.position.z = z
  return tree
}

export class TreeType {
  SAPLING = 'SAPLING'
  FULL_TREE = 'FULL_TREE'
  
}

export function createTree() {
  const geo = new THREE.Geometry();
  const level1 = new THREE.ConeGeometry(1.5, HEIGHT, RADIAL_SEGMENTS);

  level1.faces.forEach(f => f.color.set(0x00ff00));
  level1.translate(0, 4, 0);
  geo.merge(level1);
  
  const level2 = new THREE.ConeGeometry(2, HEIGHT, RADIAL_SEGMENTS);
  level2.faces.forEach(f => f.color.set(0x00ff00));
  level2.translate(0, 3, 0);
  geo.merge(level2);

  const level3 = new THREE.ConeGeometry(2.5, HEIGHT, RADIAL_SEGMENTS);
  level3.faces.forEach(f => f.color.set(0x00ff00));
  level3.translate(0, 2, 0);
  geo.merge(level3);

  const trunk = new THREE.CylinderGeometry(0.5, 0.5, 2);
  trunk.faces.forEach(f => f.color.set(0xbb6600));
  trunk.translate(0, 0, 0);
  geo.merge(trunk);

  const tree =  new THREE.Mesh(
    geo,
    new THREE.MeshLambertMaterial({
      vertexColors: THREE.VertexColors
    })
  );
  
  regeneratingItems.treeList.push(createTreeMetaData(tree.position.x, tree.position.y, tree.position.z))
  console.log(regeneratingItems)

  return tree;
}
