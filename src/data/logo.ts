const logoAnimationData: (string | null)[][][] = [
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '|', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '|', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '|', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  // 10
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  // 20
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  // 30
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  // 40
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', ';', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', ';', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  // 50
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', ';', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', ';', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', ';', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '|', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', ';', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', ';', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', ';', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '-', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', ';', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '-', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '-', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', ';', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  // 60
  [
    [ null, null, null, null, null, '-', null, null, '-', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '-', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '-', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '|', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '|', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ ';', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '-', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '}', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '|', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '-', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  // 70
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '+', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '|', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '-', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '|', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '|', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '|' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '-', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '|', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '|' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '-', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '-', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '|', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '|' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '-', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '|', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '|', null, null, null, null ],
    [ null, null, null, '-', '-', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '-', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  // 80
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '-', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '-', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '|', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '-', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '-', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '-', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '-', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '-', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '-', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '+', '+' ]
  ],
  // 90
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '-', '-', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '<', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '+' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  // 100
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '<', null, null, null, '+', '<', '<', null, '+', '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '+', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '+', '+', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', '+', null, '<', '<', '<', null, null, null, '<', '<', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  // 110
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '+', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '+', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '+', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  // 120
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '-', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '+', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  // 130
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '-', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '-', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '+', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '-', '-', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '-', '-', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '-', '-', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '|', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '-', null, '-', '-', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '|', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '-', null, '-', '-', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '|', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '-', null, '-', '-', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  // 140
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '+', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '<', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  // 150
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '<', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, ';', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '+', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, ';', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, ';', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, ';', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '<', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, ';', ';' ]
  ],
  // 160
  [
    [ null, null, null, null, null, '|', null, null, '|', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, ';', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, ';', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, ';', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, ';', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, ';', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '+', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '-', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  // 170
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '-', null, null, null, '-', '-', ';', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', ';' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '+', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '-', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '-', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '|', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  // 180
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '-', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '+', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '-', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '|', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '|', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '[', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '|', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '|', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '-', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  // 190
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '+', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '-', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '-', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '|', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '+', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '|', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '-', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '-', '-' ]
  ],
  // 200
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '-', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '-' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '|', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '-', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '-', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '-', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '-', '-', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '-', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '-', '-', null, null, null ],
    [ null, '|', '|', '|', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '-', null, null, null ],
    [ null, '|', '|', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, null ],
    [ null, '|', '|', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '-', '-', '-', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, null ],
    [ null, '|', '|', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  // 210
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '-', '-', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '+', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '-', '-', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '-', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '+', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '-', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '<', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '-', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '|', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '-', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '|', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '+', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '+', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '+', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  // 220
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '+', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '<', '<', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '<', '<' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '+', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '+', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '+', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '+', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '+', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '<', '<', '<', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '<', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '+', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '<', null, '<', '<', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '+', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '<', '<', null, null, '<', '<', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  // 230
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '+', '+', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '<', '<', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '+', '+', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '+', null, null, '+', '+', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '<', '<', null, '+', '+', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '+', '+', null, '+', '+', '<', null, null, '<', '+', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '+', '+', '+', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '<', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '<', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '+', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '<', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '<', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  // 240
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '<', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '+', '+', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '<', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '<', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '<', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '+', null, '<', '<', null, null, '<', '<', null, null, '<', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '<', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '<', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '+', '+' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '<', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  [
    [ null, null, null, null, null, '-', null, null, '-', '<', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '<', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  // 250
  [
    [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '+', '+', null, '+', null, null, null, null, null ],
    [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
    [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
    [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '+', null ],
    [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '+', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  ],
  // [
  //   [ null, null, null, null, null, '-', null, null, '-', '-', null, null, null, null, null, null, '<', '<', '<', null, null, '<', '<', '<', null, null, null, null, null, null, '<', '+', '+', null, '+', null, null, null, null, null ],
  //   [ null, null, null, null, '<', '<', '<', null, null, '<', '<', null, null, null, '+', '<', '<', null, '<', '<', '<', '<', null, '<', '<', '<', null, null, null, '+', '+', null, null, '+', '+', '+', null, null, null, null ],
  //   [ null, null, null, '<', '<', null, '<', '<', '<', null, '<', '<', null, '<', '<', '<', null, '<', '<', null, null, '<', '<', null, null, '+', '+', null, '+', '+', null, '+', '+', '+', null, '+', '+', null, null, null ],
  //   [ null, '<', '<', '<', null, null, null, '<', '<', '<', null, '<', '<', '<', null, null, '<', '<', null, null, null, null, '+', '+', null, null, '+', '+', '+', null, '+', '+', '+', null, null, null, '+', '+', '|', null ],
  //   [ '<', '<', null, null, null, null, null, null, null, '<', '<', null, null, null, null, '<', '+', null, null, null, null, null, null, '+', '+', null, null, null, null, '+', '+', null, null, null, null, null, null, null, '|', '|' ]
  // ]
]

export default logoAnimationData;
