import {Link} from 'react-router-dom'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import portugalSpain from '../../data/captions/portugalSpain'


const PortugalSpain = () => {
  return (
    <main className='min-h-screen w-full flex flex-col'>
      <section className='min-h-screen flex flex-col lg:flex-row gap-4'>
        <div className='w-full lg:w-2/3 flex items-start justify-start my-5'>
          <div className='flex flex-col my-5 lg:my-10 mx-5 lg:mx-0 lg:ml-[7.5rem]'>
            <Link to='/' className='hover:text-[#5a524b] uppercase text-[#a5a3a0]'>
              back
            </Link>
            <VideoPlayer videoSrc='https://github.com/sharonwav/portfolio/releases/download/v2.0-assets/portugal_spain.mp4' captions={portugalSpain}/>
          </div>
        </div>
        <div className='w-full lg:w-1/3 flex items-start lg:justify-end my-5'>
          <div className='flex flex-col my-5 lg:my-10 mx-5 lg:mx-0 lg:mr-[2.5rem]'>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='text-right whitespace-pre-line uppercase text-[#5a524b] font-medium text-sm lg:text-base'>
                  {`sports journalism
                  portugal vs spain fifa 2026`}
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  audio production
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-5'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  duration
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  01.38 minutes
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  {/* empty */}
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  4 channel strips
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-5'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  long term
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  -24 lufs
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-5'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  daw
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  ableton live 11
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  preamp
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  dl mackie
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  mixing console
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  master fader
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-5'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  audio balancing
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  balancing
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  audio operation
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  setup & routing
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  {/* empty */}
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  gain staging
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  {/* empty */}
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  monitoring
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  audio engineering
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  recording
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  audio mixing
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  equalization
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  {/* empty */}
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  compression
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  {/* empty */}
                </p>
              </div>
              <div className='flex'>
                <p className='uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  audio effect (reverb)
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  additional
                </p>
              </div>
              <div className='flex'>
                <p className='whitespace-pre-line uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  {`kits ai
                  (convert audio into
                  a mans' voice)`}
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-5'>
              <div className='flex justify-end'>
                <p className='uppercase text-[#a5a3a0] text-sm lg:text-base'>
                  {/* empty */}
                </p>
              </div>
              <div className='flex'>
                <p className='whitespace-pre-line uppercase text-[#a5a3a0] font-light text-sm lg:text-base'>
                  {`an interviewer
                  have an
                  interview with
                  a spannish fan in
                  the shocking
                  aftermath of
                  portugal vs
                  spain with spain
                  making it into
                  the quarterfinals
                  this years fifa
                  world cup.
                  `}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PortugalSpain