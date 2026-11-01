// ======================================================
// MARIO PLUS COMPANION
// CONFIGURACIÓN DE LA API SIMULADA
// ======================================================

// URL del Mock Server creado anteriormente en Postman
export const API_URL =
  'https://7ab793f1-2a92-44ff-8e96-4bf32cd71df6.mock.pstmn.io';


// ======================================================
// FUNCIÓN GENERAL PARA CONSULTAR LA API
// ======================================================

export async function getApiData(endpoint, signal) {

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      method: 'GET',

      headers: {
        Accept: 'application/json'
      },

      signal
    }
  );


  if (!response.ok) {

    throw new Error(
      `Error al consultar la API: ${response.status}`
    );

  }


  return response.json();
}