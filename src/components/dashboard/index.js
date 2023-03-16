import { useEffect } from "react";
import { getDatabase, ref, onValue} from "firebase/database";

export const Dashboard = () => {

  const getDashboardData = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'posts/' + postId + '/starCount');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      updateStarCount(postElement, data);
    });
  }

  useEffect(() => {
    getDashboardData()
  }, []);



  return (
    <section
      className='w-full h-60 bg-[#333] flex flex-col items-center justify-center'
    >
      <div className="container">
        <h1 className="text-3xl text-white text-left font-bold pl-8 lg:pl-1 mb-5">Automatizacion - Proyecto Web</h1>

        <div className="flex flex-col items-center justify-center">

        </div>
      </div>
    </section>
  )
}