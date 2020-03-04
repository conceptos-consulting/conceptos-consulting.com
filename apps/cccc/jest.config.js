module.exports = {
  name: 'cccc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cccc',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
