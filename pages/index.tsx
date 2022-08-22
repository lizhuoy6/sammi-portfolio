import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Typed from 'react-typed';
import {AiFillInstagram, AiFillLinkedin, AiFillMail} from 'react-icons/ai';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sammi Li</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Allura&family=IBM+Plex+Sans:wght@400;500;700&family=Jost:wght@400;500;700&family=Sacramento&family=WindSong:wght@500&display=swap" rel="stylesheet" /> 
      </Head>
      <div className="border-b py-4">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex place-content-between items-center">
            <div className='text-5xl font-medium signature'>Sammi</div>
            <div>
              <ul className="flex space-x-4">
                <li>Home</li>
                <li>Work</li>
                <li>Study</li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className='text-6xl pb-4'>Hi I'm Sammi Li!</div>
          <div className='text-4xl text-gray-600'>
            <Typed
              strings={[
                'I am a student',
                'I am a designer',
                'I am a bunny lover',
                'I am an angel']}
              typeSpeed={40}
              backSpeed={50}
              loop 
            />
          </div>
          <div className="pt-6 text-gray-500 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div className="border-t py-12">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className='text-gray-400 text-xl'>Let's get connected!</div>
          <ul className='flex space-x-4 text-3xl text-gray-400 justify-center pt-6'>
            <li className="hover:text-gray-500"><AiFillInstagram /></li>
            <li className="hover:text-gray-500"><a href="mailto:lizhuoy6@gmail.com"><AiFillMail /></a></li>
            <li className="hover:text-gray-500">
              <a href="https://linkedin.com/in/zhuoying-l-117399152/" target="__blank">
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
          <div className='pt-6 text-gray-400'>
            Copyright &copy; 2022 Sammi Li, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
