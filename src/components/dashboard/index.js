import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, query, ref, limitToLast } from "firebase/database";
import { formatData } from './formatData';
import { ChartApp } from './chart';

const firebaseConfig = {
  apiKey: "AIzaSyCVOb_5-msij8KSTAOvFkF6mF8KG5mWvRE",
  authDomain: "automatizacioni2023.firebaseapp.com",
  databaseURL: "https://automatizacioni2023-default-rtdb.firebaseio.com",
  projectId: "automatizacioni2023",
  storageBucket: "automatizacioni2023.appspot.com",
  messagingSenderId: "878834311737",
  appId: "1:878834311737:web:aad1d14a2a708c2515e3e8",
  measurementId: "G-L04G9RJSG2"
};

const app = initializeApp(firebaseConfig);

export const Dashboard = () => {
  const [data, setData] = useState()

  useEffect(() => {
    getDashboardData()
  }, [])

  
  const getDashboardData = async () => {
    const database = getDatabase(app);
    
    const todo = query(ref(database, "/"), limitToLast(100));
    onValue(todo, (snapshot) => {
      setData(formatData(snapshot.val()))
    });
  }

  return (
    <section
      className='w-full h-auto mt-20 mb-6 bg-[#333] flex flex-col items-center justify-center'
    >
      <div className="container">
        <h1 className="text-3xl text-white text-left font-bold pl-8 lg:pl-1 mb-5">Automatizacion - Proyecto Web</h1>

        <h1 className="text-3xl text-white text-center underline mt-12 font-bold pl-8 lg:pl-1 mb-8">Dashboard - Temperaturas Thermistores (DB)</h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col items-center justify-center">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                          Thermistor 1
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Thermistor 2
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Thermistor 3
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Año
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Mes
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Dia
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hora
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {
                    Object.keys(data ?? {})?.map((_, index) => (
                      <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" className="px-6 py-4">
                            {data?.t1[index - 1] ?? ' - '}
                          </th>
                          <td className="px-6 py-4">
                            {data?.t2[index - 1] ?? ' - '}
                          </td>
                          <td className="px-6 py-4">
                            {data?.t3[index - 1] ?? ' - '}
                          </td>
                          <td className="px-6 py-4">
                            {data?.year[index - 1] ?? ' - '}
                          </td>
                          <td className="px-6 py-4">
                            {data?.month[index - 1] ?? ' - '}
                          </td>
                          <td className="px-6 py-4">
                            {data?.day[index - 1] ?? ' - '}
                          </td>
                          <td className="px-6 py-4">
                            {data?.hours[index - 1] ?? ' - '}
                          </td>
                      </tr>
                    ))
                  }
                </tbody>
            </table>
        </div>

        <h2 className="text-3xl text-white text-center underline mt-12 font-bold pl-8 lg:pl-1 mb-8">Simulador - Temperaturas Thermistores</h2>
          <ChartApp />
      </div>
    </section>
  )
}