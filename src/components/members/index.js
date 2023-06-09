import { memberData } from './data'

export const Members = () => {
  return (
    <section
      className='w-full h-auto bg-[#333] flex flex-col items-center justify-center border-b-4 border-[#73c3ce]'
    >
      <div className='container my-12'>
        <h2 className='text-white font-bold text-3xl pl-8 lg:pl-1 mb-5'>
          Estudiantes
        </h2>
        <div className='w-full flex items-center justify-around flex-wrap'>
          {memberData.map((member, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center mt-8 lg:mt-0'
            >
              <div className='rounded-full w-[250px] h-[250px] border-4 border-[#73c3ce]'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full object-cover rounded-full h-full'
                />
              </div>
              <span className='mt-5 text-white font-bold text-3xl'>
                {member.name}
              </span>
              <span className='mt-2 text-white font-bold'>{member.cedula}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full bg-black h-auto py-5 text-white flex items-center justify-center'>
        <div className='container flex items-center justify-between lg:flex-wrap flex-col lg:flex-row text-center px-3 lg:px-0'>
          <span className='mt-3 lg:mt-0'>
            Universidad Nacional Experimental del Tachira - San Cristobal -
            Tachira - Venezuela
          </span>
          <span className='mt-3 lg:mt-0'> Automatizacion</span>
          <span className='mt-3 lg:mt-0'> Prof Cesar Contreras</span>
          <span className='mt-3 lg:mt-0'> 16 de Marzo del 2023</span>
        </div>
      </div>
    </section>
  )
}