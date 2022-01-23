import { create } from 'axios';

class AutoRiaApi {
  constructor(url, apiKey) {
    this.client = create({
      baseURL: url,
      params: {
        api_key: apiKey,
      },
    });
  }

  async getMarks(categoryId) {
    const url = `/auto/categories/${categoryId}/marks`;

    try {
      const { data } = await this.client.get(url);

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getModelsByMark(categoryId, markId) {
    const url = `/auto/categories/${categoryId}/marks/${markId}/models`;

    try {
      const { data } = await this.client.get(url);

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async search(params = {}) {
    const url = `/auto/search`;

    try {
      const { data } = await this.client.get(url, { params });

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAdById(adId) {
    const url = `/auto/info`;

    try {
      const { data } = await this.client.get(url, {
        params: { auto_id: adId },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const autoRiaApi = new AutoRiaApi(
  'https://developers.ria.com',
  'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A'
);

export async function marks() {
  const marks = await autoRiaApi.getMarks(1);
  return marks;
}

export async function models(markValue) {
  const models = await autoRiaApi.getModelsByMark(1, markValue);
  return models;
}

export async function autoCard({ mark, model, page }) {
  const autos = await autoRiaApi.search({
    category_id: 1,
    page: page,
    marka_id: [model],
    model_id: [mark],
  });

  const carCards = autos.result.search_result.ids.map((id) => {
    return autoRiaApi.getAdById(id);
  });

  const autosArr = Promise.all(carCards);

  return autosArr;
}
