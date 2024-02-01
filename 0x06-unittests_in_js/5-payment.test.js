function getPaymentTokenFromAPI(success) {
    if (success) {
      return new Promise((resolve) => {
        resolve({data: 'Succesful response from the API' });
      });
    }
}

module.exports = getPaymentTokenFromAPI;
