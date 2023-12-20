import Image from 'next/image';

export default function Card({ data, onClick }) {
  return (
    <div
      onClick={() => onClick(data)}
      className=' mx-auto mb-4 flex h-fit w-96  cursor-pointer flex-col overflow-hidden rounded-xl bg-zinc-800 shadow-lg shadow-zinc-800/40 transition-shadow duration-150 ease-in hover:shadow-zinc-700/80 '>
      <div className='flex items-center  gap-x-4 border-b border-b-zinc-600 p-6'>
        <div className='relative h-14 w-14 overflow-hidden rounded-full'>
          <Image
            src={data?.imageUrl ?? `https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg`}
            layout='fill'
            objectFit='cover'
            alt='profile image'
          />
        </div>
        <div className='w-fit text-left'>
          <h6 className='text-base font-medium text-indigo-500 '>{data.name}</h6>
          <p className='font-thin text-zinc-400'>{data.title}</p>
        </div>
      </div>
      <div className='h-full bg-zinc-900 px-6 py-2'>
        <p className='text-md text-zinc-600 '>Knows about</p>
        <p className='text-sm text-zinc-400'>{data.skills}</p>
      </div>
    </div>
  );
}
