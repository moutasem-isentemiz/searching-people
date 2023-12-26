export default function SearchAs({ searchAsArray, selectSearchAs, searchAs }) {
  return (
    <div className='flex h-fit w-full items-center gap-x-2'>
      {searchAsArray.map((sa) => (
        <span
          key={sa}
          className={`box-border cursor-pointer rounded-full p-2  text-sm text-white outline-none ${
            searchAs === sa ? 'bg-indigo-400 ring-2 ring-indigo-700 ' : 'border-2 border-zinc-700 bg-zinc-500'
          }`}
          onClick={() => selectSearchAs(sa)}>
          {sa}
        </span>
      ))}
    </div>
  );
}
