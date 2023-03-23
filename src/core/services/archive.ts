import HTTP from 'core/services/api';

export const nameService = {
  getArchive: async (url: string, config?: any) => {
    const response = await HTTP(url, config);
    return response.data;
  },
};
