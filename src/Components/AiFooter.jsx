import imgUrl from '../dev.png'
function AiFooter(){
    return(
        <>
        <nav className="fixed inset-x-0 bottom-0 px-4 py-4 bg-orange-400 sm:bg-yellow-400 md:bg-blue-950 lg:bg-green-700 xl:bg-red-600 2xl:bg-purple-900 text-white">
     <div className=''>
        <ul className="flex justify-start">
            <li className="mx-2 cursor-pointer hover:rounded-sm hover:border-2 hover:border-purple-300 hover:bg-fuchsia-400 ">ChatGPT AI component generator</li>
            {/* {<img src=''></img>} */}
              </ul>
        <ul className="flex justify-end">
             <img className="h-6 " src={imgUrl}></img>
              <li className="mx-2 cursor-pointer hover:rounded-sm hover:border-2 hover:border-purple-300 hover:bg-fuchsia-400 "> :- Kiran gadhavi </li>
        </ul>
        </div>
        </nav>
    
      </>

    )
}
export default AiFooter