import {
  useEffect,
  useState
} from 'react';

import {
  getApiData
} from '../services/api';


function useApiData(endpoint) {

  const [data, setData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);


  useEffect(() => {

    const controller =
      new AbortController();


    async function cargarDatos() {

      try {

        setLoading(true);
        setError(null);


        const resultado =
          await getApiData(
            endpoint,
            controller.signal
          );


        setData(resultado);

      }

      catch (error) {

        if (
          error.name !==
          'AbortError'
        ) {

          console.error(
            'Error consultando API:',
            error
          );

          setError(error.message);

        }

      }

      finally {

        if (
          !controller.signal.aborted
        ) {

          setLoading(false);

        }

      }

    }


    cargarDatos();


    return () => {

      controller.abort();

    };


  }, [endpoint]);


  return {
    data,
    loading,
    error
  };

}


export default useApiData;