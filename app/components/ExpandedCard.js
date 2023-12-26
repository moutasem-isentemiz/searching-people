import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ExpandedCard({ data, onClose }) {
  const [showmore, setShowMore] = useState(false);

  return (
    <>
      <span className='ms-14 cursor-pointer text-xl' onClick={() => onClose()}>
        <svg xmlns='http://www.w3.org/2000/svg' height='20' width='18' viewBox='0 0 448 512'>
          <path
            className='fill-gray-400'
            d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'
          />
        </svg>
      </span>
      <div className=' mx-auto mb-4 flex h-fit w-10/12 cursor-pointer  flex-col overflow-hidden rounded-xl bg-zinc-800 p-6 shadow-lg shadow-zinc-800/40 '>
        {/* Upper Part */}
        <div className='mb-6 flex  items-start gap-x-4 border-b border-b-zinc-600 pb-6'>
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
            <span className='relative h-[20px] w-[20px] inline-flex gap-2'>
              {
                data.score <= 40 ?
                  (
                    <Image
                      src={`https://cdn-icons-png.flaticon.com/512/3563/3563393.png`}
                      layout='fill'
                      objectFit='cover'
                      alt='profile image'
                    />
                  )
                  :
                  data.score <= 70 ?
                    (
                      <Image
                        src={`https://cdn-icons-png.flaticon.com/512/3563/3563394.png`}
                        layout='fill'
                        objectFit='cover'
                        alt='profile image'
                      />
                    )
                    :
                    (
                      <Image
                        src={`https://cdn-icons-png.flaticon.com/512/3563/3563395.png`}
                        layout='fill'
                        objectFit='cover'
                        alt='profile image'
                      />
                    )
              }

              <span className={`font-thin text-zinc-200 ps-6 ${data.score <= 40 ? 'text-green-500' : data.score <= 70 ? 'text-yellow-500' : 'text-red-500'}`}>{data.score}</span>
            </span>
            <p className='font-thin text-zinc-400'>{data.title}</p>
            <p className='font-thin text-zinc-400'>{data.country}</p>
            <p className='inline-flex items-center gap-2 pb-2 text-sm text-indigo-400'>
              <svg xmlns='http://www.w3.org/2000/svg' height='16' width='16' viewBox='0 0 512 512'>
                <path
                  className='fill-indigo-400'
                  d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'
                />
              </svg>
              <a href={`mailto:${data.metadata.social_media.email}`}>{data.metadata.social_media.email}</a>
            </p>
            {/* Social Icons */}
            <div className='flex items-center gap-x-2'>
              <Link href={data.metadata.social_media.github} target='_blank'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-full  bg-zinc-600/50' title='github'>
                  <Image
                    src={`https://cdn-icons-png.flaticon.com/512/733/733609.png?ga=GA1.1.791291719.1703064946`}
                    width={0}
                    height={0}
                    style={{ width: '50%', height: '50%' }}
                    alt='profile image'
                  />
                </span>
              </Link>
              <Link href={data.metadata.social_media.linkedin} target='_blank'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-full  bg-zinc-600/50' title='linkedin'>
                  <Image
                    src={`https://cdn-icons-png.flaticon.com/512/3536/3536505.png?ga=GA1.1.791291719.1703064946`}
                    width={0}
                    height={0}
                    style={{ width: '50%', height: '50%' }}
                    alt='profile image'
                  />
                </span>
              </Link>
              <Link href={data.metadata.social_media.slack} target='_blank'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-full  bg-zinc-600/50' title='slack'>
                  <Image
                    src={`https://cdn-icons-png.flaticon.com/512/5968/5968929.png?ga=GA1.1.791291719.1703064946`}
                    width={0}
                    height={0}
                    style={{ width: '50%', height: '50%' }}
                    alt='profile image'
                  />
                </span>
              </Link>
              <Link href={data.metadata.social_media.teams} target='_blank'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-full  bg-zinc-600/50' title='teams'>
                  <Image
                    src={`https://cdn-icons-png.flaticon.com/512/906/906349.png?ga=GA1.1.791291719.1703064946`}
                    width={0}
                    height={0}
                    style={{ width: '50%', height: '50%' }}
                    alt='profile image'
                  />
                </span>
              </Link>
              <Link href={data.metadata.social_media.twitter} target='_blank'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-full  bg-zinc-600/50' title='twitter'>
                  <Image
                    src={`https://cdn-icons-png.flaticon.com/512/168/168802.png?ga=GA1.1.791291719.1703064946`}
                    width={0}
                    height={0}
                    style={{ width: '50%', height: '50%' }}
                    alt='profile image'
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Collaborations */}
        <div>
            <h6 className='pb-4 text-sm font-medium text-gray-200'>Collaborations Instances</h6>
            <div className='flex items-center gap-x-2 mb-4'>
              <Link href={data.metadata.collaborations.github.link} target='_blank'>
                <span className='inline-flex gap-x-2 h-8 w-8 items-center justify-center rounded-md  bg-zinc-600/50 w-fit px-3' title='github'>
                  <Image
                    src={`https://cdn-icons-png.flaticon.com/512/733/733609.png?ga=GA1.1.791291719.1703064946`}
                    width={0}
                    height={0}
                    style={{ width: '50%', height: '50%' }}
                    alt='profile image'
                  />
                  <p>{data.metadata.collaborations.github.number_of_collaborations}</p>
                </span>

              </Link>
              <Link href={data.metadata.collaborations.jira.link} target='_blank'>
                <span className='inline-flex gap-x-2 h-8 w-8 items-center justify-center rounded-md  bg-zinc-600/50 w-fit px-3' title='jira'>
                  <Image
                    src={`https://cdn-icons-png.flaticon.com/512/5968/5968875.png`}
                    width={0}
                    height={0}
                    style={{ width: '50%', height: '50%' }}
                    alt='profile image'
                  />
                  <p>{data.metadata.collaborations.jira.number_of_collaborations}</p>
                </span>
              </Link>
              <Link href={data.metadata.collaborations.confluence.link} target='_blank'>
                <span className='inline-flex gap-x-2 h-8 w-8 items-center justify-center rounded-md  bg-zinc-600/50 w-fit px-3' title='confluence'>
                  <Image
                    src={`https://cdn-icons-png.flaticon.com/512/5968/5968793.png`}
                    width={0}
                    height={0}
                    style={{ width: '50%', height: '50%' }}
                    alt='profile image'
                  />
                  <p>{data.metadata.collaborations.confluence.number_of_collaborations}</p>
                </span>
              </Link>
              <Link href={data.metadata.collaborations.backyard.link} target='_blank'>
                <span className='inline-flex gap-x-2 h-8 w-8 items-center justify-center rounded-md  bg-zinc-600/50 w-fit px-3' title='backyard'>
                  <Image
                    src={`https://theme.zdassets.com/theme_assets/2229755/6501df32d04196490aee2fb377cf0dbbe2eb6916.png`}
                    width={0}
                    height={0}
                    style={{ width: '50%', height: '50%' }}
                    alt='profile image'
                  />
                  <p>{data.metadata.collaborations.backyard.number_of_collaborations}</p>
                </span>
              </Link>
              <Link href={data.metadata.collaborations.email.link} target='_blank'>
                <span className='inline-flex gap-x-2 h-8 w-8 items-center justify-center rounded-md  bg-zinc-600/50 w-fit px-3' title='email'>
                  <Image
                    src={`https://cdn-icons-png.flaticon.com/512/5968/5968534.png`}
                    width={0}
                    height={0}
                    style={{ width: '50%', height: '50%' }}
                    alt='profile image'
                  />
                  <p>{data.metadata.collaborations.email.number_of_collaborations}</p>
                </span>
              </Link>
            </div>

        </div>

        {/* About part */}
        <div className='flex flex-col gap-y-4'>
          {/* Title */}
          <div>
            <h6 className='pb-2 text-sm font-medium text-gray-200'>About</h6>
            <p className='text-cl text-sm text-gray-300/70'>
              {!showmore ? (
                <>
                  {data.metadata.about.slice(0, 500)}...
                  <span className='cursor-pointer text-xs text-gray-500 hover:underline-offset-0' onClick={() => setShowMore(true)}>
                    &nbsp; show more
                  </span>
                </>
              ) : (
                <>
                  {data.metadata.about}
                  <span className='cursor-pointer text-xs text-gray-500 hover:underline-offset-0' onClick={() => setShowMore(false)}>
                    &nbsp;show less
                  </span>
                </>
              )}
            </p>
          </div>
          {/* Reports to */}
          <div className='reportsTo'>
            <h6 className='pb-4 text-sm font-medium text-gray-200'>Reports to</h6>
            <div className='flex  items-start gap-x-4'>
              <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                <Image
                  src={`https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg`}
                  layout='fill'
                  objectFit='cover'
                  alt='profile image'
                />
              </div>
              <div className='w-fit text-left'>
                <h6 className='text-base font-medium text-indigo-500 '>{data.metadata.reports_to.name}</h6>
                <p className='pb-2 font-thin text-zinc-400'>{data.metadata.reports_to.title}</p>
              </div>
            </div>
          </div>
          {/* Direct Reports */}
          {data.metadata.direct_reports.length ? (
            <div>
              <h6 className='pb-4 text-sm font-medium text-gray-200'>
                Direct Reports
                <span className='text-xs text-gray-500 '> ({data.metadata.direct_reports.length})</span>
              </h6>
              {data.metadata.direct_reports.map((di) => (
                <div key={di.name} className='flex  items-start gap-x-4'>
                  <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                    <Image
                      src={`https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg`}
                      layout='fill'
                      objectFit='cover'
                      alt='profile image'
                    />
                  </div>
                  <div className='w-fit text-left'>
                    <h6 className='text-base font-medium text-indigo-500 '>{di.name}</h6>
                    <p className='pb-2 font-thin text-zinc-400'>{di.title}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
