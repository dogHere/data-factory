function requireDir(requireContext) {
  return requireContext.keys().reduce((ret, key) => {
    if (key !== './index.js') {
      const k = key.replace(/\.\/(.*)\.js/, '$1');
      ret[k] = requireContext(key).default;
    }
    return ret;
  }, {});
}

export default requireDir;
