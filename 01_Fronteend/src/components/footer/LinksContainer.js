
const LinksContainer = ({heading, obj})=>{
     return(
          <div>
               <p className="font-bold mb-[12px] mt-[6px]">{heading}</p>

               <ul>
                    {
                         obj.map(({id,text})=>(
                              <li 
                                   key={id}
                                   className="mb-[6px] hover:underline cursor-pointer"
                              >{text}</li>
                         ))
                    }
               </ul>
          </div>
     )
}

export default LinksContainer;