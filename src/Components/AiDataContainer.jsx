
import React, { useState } from 'react'
import {MainContainer, ChatContainer, MessageList, Message, MessageInput} from '@chatscope/chat-ui-kit-react'
const API_KEY ='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' 
// {import.meta.VITE_REACT_APP_API_KEY;}


function AiDataContainer(){

  //  { const [count, setCount] = useState(0)}
  const [show, setShow] = useState(true);
//  { const messagesRef=useRef(null)}
  const [message1, setMessage1]=useState([
    {
      message:"e.g. an about us section with 3 columns of team members, centered text, rounded profile images",
      sender:"user"
    }
  ])
  const [messages, setMessages] = useState([
    {
      message:"Here is your Component!",
      sender: "ChatGPT"
    }
  ])
 
  const handleSend = async (message)=>{
    const newMessage ={
      message:message,
      sender: "user",
      direction: "outgoing"
    }
 
  const newMessages =[...messages,newMessage];//all the old messages,+ new messages
  const newMessages1=[...message1,newMessage]
    //update our messages state
    
    setMessages(newMessages);
    setMessage1(newMessages1);
    //process message to chatGpt (send it over and see the response)
    await processMessageToChatGPT(newMessages);
  
  }
  async function processMessageToChatGPT(chatMessages){
    //chatMessages {sender: "user" or "ChatGPT",message:" The message content here"}
  //apiMessages{role:"user" or "assistant", content :"The message content here"}
let apiMessages = chatMessages.map((messageObject)=>{
  let role = "";
  if(messageObject.sender === "ChatGPT"){
    role="assistant"
  } 
  else{
    role= "user"
  }
  return { role: role, content: messageObject.message}
});  
//role:"user"-> a message from the user ,"assistant"-> a response from chatGPT
//"System"-> generally one initial message defining How we want chatgpt to talk
const SystemMessage =
{
  role:"system",
  content:"return only code"
}
const apiRequestBody={
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      role: "user",
      content:
        "for example :- Please create html code with inline css that creates the following component, Material UI look and feel, return only code",
    }
   ,
   {
    role: "user",
    content:
      "for example : - Create tailwind css code with complete react component and show me how it will look too",
   }  
  ,
    
    { 
      role: "user", 
      content: "DO NOT wrap the returned code with ```" },SystemMessage,
      
    ...apiMessages//[message1,message2,message3]
  ]
}
await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers:{
    "Authorization":"Bearer " + API_KEY,
    "Content-Type":"application/json"
  },
  body:JSON.stringify(apiRequestBody)
}).then((data)=>{
  return data.json();
}).then((data)=>{
  console.log(data);
  console.log(data.choices[0].message.content);
  console.log(data.choices[0].message.role);
  setMessages(
    [...chatMessages,{
      message: data.choices[0].message.content,
      sender:"ChatGPT"
    }]
  );
})
console.log(messages.message)}
const handleCopy = ()=>{
  window.navigator.clipboard.writeText(messages.map((message)=>message.message))
  
}
// {const handleCopy = useCallback(()=>{
//     messagesRef.current?.select();
//     messagesRef.current?.setSelectionRange(0, 100);
//     window.navigator.clipboard.writeText(messages.map((message)=>message.message))
// },[messages])}
// {const handleCopy=()=>{
//   navigator.clipboard.writeText(messages); 
// { props.showAlert("Copied to clipboard","success");}   
//className="flex-auto bg-purple-200      
// }}
    return(
    
      <>
    <div 
    className='flex-autow-full h-full items-center bg-cover bg-no-repeat opacity-90'
    style={{backgroundImage : `url('https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=600')`}}
   >
    <br/>
   
    <hr className='animate-pulse border-[#531a4e]'/>
    <div className='flex flex-col mx-32 max-w-7xl border border-purple-60 rounded-lg backdrop-blur-sm bg-purple-/60'>
       <div className=' content-center'>
        <div className=" animate-pulse py-4 px-[41%] flex">
        <a href="https://github.com/KiranGadhavi/Ai_Comp_Generator_vite/tree/main/vite-react" className="flex px-4 py-2 text-white bg-gradient-to-r from-violet-800 to-fuchsia-500 rounded-3xl hover:bg-purple-800 active:bg-purple-500 " >
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
       <h1 className="px-4 py-2 text-3xl font-bold text-fuchsia-950 underline text-center">Ask for any <button className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-pink-500" onClick={() => setCount((count) => count + 1)}>
         Components...
         {/* {{count}} */}
        </button></h1>
        <h1 className="pb-10 justify-around font-bold  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl text-center">AI will generate it for you</h1>
        <h1 className="text-center pb-5 pt-4 px-4 py-2"><b className='p-2 bg-gradient-to-r from-fuchsia-800 to-fuchsia-600 text-white rounded-full ' >1&rarr;</b><span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold y-2'> Describe which component you need</span> </h1>
       
       <div className='text-center'>
       <MainContainer>
        <ChatContainer>
        <MessageList  scrollBehavior = 'smooth' >
        {message1.map((message,i)=>{
            return<Message className='px-4 py-2 bg-white max-w-screen-md mx-96 h-auto rounded-lg' key={i}  model={message}/>
          })}
        </MessageList>
        </ChatContainer>
        </MainContainer>
       </div>
        <div className="pt-4 flex  py-2 px-96">
       <div className='pt-2  flex-col'>
        <b className='p-2  animate-pulse rounded-[50%] bg-gradient-to-r from-fuchsia-800 to-fuchsia-600 text-white'> 2&rarr;</b>
        </div>
        {/* {<MessageInput onSend={handleSend}></MessageInput>} */}
        <div className='px-4 grid-flow-col w-[90%] '  >
        <MessageInput className='px-8 py-4  text-white bg-purple-900 hover:bg-purple-800 active:bg-purple-500 rounded-md'   placeholder='Type message here' onSend={handleSend} onClick={() => setShow(s => ! s)} >
        {/* {<button className="px-4 py-2  text-white bg-purple-900 rounded-md hover:bg-purple-800 active:bg-purple-500" onClick={ () => setShow(s => ! s) }  >Generate my Component !</button>} */}
        </MessageInput>
        {/* {<div className='absolute flex bg-white'>
        { messages.map((msg)=>
         {(<textarea readOnly className='h-full bg-white w-40' key={msg} value={msg.message}>
       {msg.message}
        </textarea>)})
        }
        </div>} */}
        </div>
        </div>
        
        </div>
        
        <div>
        <h1 className=' px-2 py-2 text-center  '>
        <b className="bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-pink-500">Click the element to copy the code</b> 👇</h1> 
        <div className="px-4 py-2">
       { show ? 
       <div className='bg-transparent px-96'>
        <p className='w-[100%]'>
       I have created a React component called <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-pink-500'>`AIChatComponentGenerator`</span> that generates various components like buttons, headers, footers, and navigation bars.
         The component is powered by AI ChatGpt technology, which allows you to customize and generate these components effortlessly.
        The <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-pink-500'>`AIChatComponentGenerator`</span> component is designed to be highly flexible and easy to use.
         You can specify the dimensions, styles, and content for each component using simple props. For example, to generate a button with a light purple background and the text "Generate", you can use the following code whichyou can get from here.

        </p>
       </div>
        :
        
       <div>
       <div className="pb-8 justify-center text-black whitespace-normal rounded-xl cursor-copy flex">
            <button disabled={messages.length===0} className="px-4 py-2 w-60 text-white bg-purple-900 rounded-md hover:bg-purple-800 active:bg-purple-500" onClick={handleCopy}>✂️ Copy Text</button>
         </div>
       <div className='h-96 text-center'>
        <MainContainer>
        <ChatContainer>
        <MessageList scrollBehavior='smooth'
        >
    {messages.map((message,i)=>{
            return<Message  className='px-4 py-2 bg-white max-w-screen-md mx-96 h-auto rounded-lg' key={i} model={message} />
           
          })}
        </MessageList>
        </ChatContainer> 
        </MainContainer>
        </div>
        </div>
       }
        </div>
        </div>

        </div>
      <hr className='animate-pulse border-[#531a4e]'/>
      <br/>
      </div>
      </> 
    )}

export default AiDataContainer