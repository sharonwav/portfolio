import {Link} from 'react-router-dom'
import cv from '../../assets/files/cv.pdf';

const Home = () => {
  return (
    <main className='relative min-h-screen w-full flex flex-col'>
        {/* <img src='/src/assets/pictures/front_cover.png' className='absolute inset-0 w-full h-full object-cover -z-10'/> */}
        <section className='min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:h-screen gap-8 lg:gap-0'>
          <div className='flex flex-col mx-5 lg:mx-20 pl-0 lg:pl-10 my-5 lg:my-10 pt-5'>
            <p className='uppercase text-[#5a524b] text-sm lg:text-base'>
              sharon venicia
            </p>
            <a href={cv} target='_blank' className="hover:text-[#5a524b] uppercase text-[#a5a3a0]">
              cv
            </a>
          </div>
          <div className='flex flex-col lg:flex-row items-start lg:justify-end mx-5 lg:mx-0 my-5'>
            <div className='flex my-5 lg:my-10 px-0 lg:px-5'>
              <p className='uppercase text-[#5a524b] text-sm lg:text-base'>
                my works
              </p>
            </div>
            <div className='flex flex-col my-5 lg:my-10 px-0 lg:px-10'>
              <div className='grid grid-cols-2 gap-3'>
                <div className='flex justify-end'>
                  <Link to='/public-transport-ad' className='hover:text-[#5a524b] uppercase text-[#a5a3a0] font-medium text-right'>
                    public transport ad
                  </Link>
                </div>
                <div className='flex'>
                  <p className='uppercase text-[#a5a3a0] font-light'>
                    audio production
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <div className='flex justify-end'>
                  <Link to='/portugal-vs-spain-interview' className='hover:text-[#5a524b] uppercase text-[#a5a3a0] font-medium text-right'>
                    portugal vs spain interview
                  </Link>
                </div>
                <div className='flex'>
                  <p className='uppercase text-[#a5a3a0] font-light'>
                    audio production
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <div className='flex justify-end'>
                  <Link to='/unicon-find-app' className='hover:text-[#5a524b] uppercase text-[#a5a3a0] font-medium text-right'>
                    unicon find app
                  </Link>
                </div>
                <div className='flex'>
                  <p className='uppercase text-[#a5a3a0] font-light'>
                    ui/ux
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <div className='flex justify-end'>
                  <Link to='/medinote-app' className='hover:text-[#5a524b] uppercase text-[#a5a3a0] font-medium text-right'>
                    medinote app
                  </Link>
                </div>
                <div className='flex'>
                  <p className='uppercase text-[#a5a3a0] font-light'>
                    web app
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='flex items-end justify-start mb-5'>
            <div className='grid grid-rows-2 my-10 mx-20'>
              <div className='flex items-end py-5'>
                <p className='uppercase text-[#5a524b] pl-10 mx-5'>
                  certifications
                </p>
              </div>
              <div className='flex flex-col mx-10'>
                <button className='hover:text-[#5C69AA] uppercase text-[#959FC7] pl-20'>
                  management of fashion and luxury companies <span>2026</span>
                </button>
                <p className='hover:text-[#5C69AA] uppercase text-[#959FC7] pl-10'>
                  foundations of sports marketing <span>2026</span>
                </p>
                <p className='hover:text-[#5C69AA] uppercase text-[#959FC7] pl-20'>
                  inbound marketing <span>2026</span>
                </p>
                <p className='hover:text-[#5C69AA] uppercase text-[#959FC7]'>
                  wells fargo - software engineer <span>2026</span>
                </p>
                <p className='hover:text-[#5C69AA] uppercase text-[#959FC7] pl-20'>
                  full stack web development <span>2026</span>
                </p>
                <p className='hover:text-[#5C69AA] uppercase text-[#959FC7] pl-20 ml-10'>
                  it specialist <span>2026</span>
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className='flex items-end justify-end mb-5'>
  
          </div> */}
        </section>
    </main>
  )
}

export default Home
