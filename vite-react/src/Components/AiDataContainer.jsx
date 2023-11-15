import { useState } from 'react'
function AiDataContainer(){
    const [count, setCount] = useState(0)
    return(
    <>
    <div className=" max-h-screen bg-purple-200">
    <br/>
    <hr className=' border-purple-600'/>
      <div className="py-4 px-4 flex">
        <a className="flex px-4 py-2 text-white bg-purple-900 rounded-2xl hover:bg-purple-800 active:bg-purple-500" >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-6 ">
         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <span className='mx-2 text-center'> Star on Github</span> 
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="red" 
          viewBox="0 0 24 24"
          strokeWidth={1.5} 
          stroke="red" 
          className="w-4 h-7 ">
         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
         </a>
      </div>
       <h1 className="px-4 py-2 text-3xl font-bold text-black underline ">Ask for any <button className=" text-purple-900" onClick={() => setCount((count) => count + 1)}>
         Components...{count}
        </button></h1>
        <h1 className="px-4 py-2">AI will generate it for you 
    
</h1>
        <h1 className="px-4 py-2"> Describe which component you need</h1>
        <div className="px-4 py-2">
        <textarea className='h-20 w-4/12'></textarea></div>
        <div className="p-6">
        <button className="px-4 py-2  text-white bg-purple-900 rounded-md hover:bg-purple-800 active:bg-purple-500 focus:outline-red-800" >Generate my Component ! &rarr;</button>
      </div>
      <hr className='border-purple-600'/>
      <br/>
      </div>
     
      </>
    )
}
export default AiDataContainer