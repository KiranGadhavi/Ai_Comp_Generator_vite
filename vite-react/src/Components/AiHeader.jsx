import imgUrl from '../airt.jpeg'
function AiHeader(){
    return(
        
      <nav className=" px-4 py-4 bg-orange-400 sm:bg-yellow-400 md:bg-blue-950 lg:bg-green-700 xl:bg-red-600 2xl:bg-purple-900 text-white">
        <ul className="flex ">
        <img className=" h-8" src={imgUrl}/>
        <li className="mx-2 cursor-pointer hover:rounded-sm hover:border-2 hover:border-purple-300 hover:bg-fuchsia-400 font-bold text-xl">
        ChatGPT AI component generator</li>
        </ul>
        
        </nav>
      
     
    )
}
export default AiHeader