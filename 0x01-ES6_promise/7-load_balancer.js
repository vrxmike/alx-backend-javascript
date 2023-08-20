export default loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .return((value) => value);
}
