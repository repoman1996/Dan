import api from "./api";

export const casinoService = {
  createAccount: async (betsaveId: string, offerId: string, brandName: string) => {
    try {
      console.log({ betsaveId })
      const response = await api.post('casino/create-account', {
        betsaveId,
        offerId,
        brandName
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  checkJoined: async (offerId: string, betsaveId: string) => {
    try {
      const response = await api.get(`casino/check-user-joined-offer/${offerId}/${betsaveId}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
