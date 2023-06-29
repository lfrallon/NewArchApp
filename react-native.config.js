module.exports = {
  project: {
    android: {
      unstable_reactLegacyComponentNames: [
        // list of conponents that needs to be wrapped by the interop layer
        'CameraView',
      ],
    },
    ios: {
      unstable_reactLegacyComponentNames: [
        // list of conponents that needs to be wrapped by the interop layer
      ],
    },
  },
};
