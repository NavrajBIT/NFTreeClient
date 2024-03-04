export const fetchSolBalance = async publicKey => {
  try {
    const bal = (await connection.getBalance(publicKey)) / 10 ** 9;
    return bal;
  } catch (error) {
    console.log(`Error occured while fetching balance:${error}`);
    return error;
  }
};
