import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {
  const data = [{
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    filesize: ".9mb", close: true,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-500" }
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula augue sit amet mi condimentum, in rutrum elit tincidunt.",
    filesize: "700kb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download File", tagColor: "bg-blue-500" }
},{
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  filesize: "2.5mb",
  close: false,
  tag: { isOpen: true, tagTitle: "Get It Now", tagColor: "bg-purple-500" }
},{
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget velit aliquam, lobortis lectus a, tempor justo.",
  filesize: "1.8mb",
  close: true,
  tag: { isOpen: true, tagTitle: "Download Here", tagColor: "bg-sky-500" }
},{
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend risus non felis tincidunt tristique.",
  filesize: "500kb",
  close: false,
  tag: { isOpen: true, tagTitle: "Free Download", tagColor: "bg-green-500" }
}]

const ref = useRef(null)

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'>
     {data.map((item,index)=>(
      <Card data={item} key={index} reference={ref}/>
     ))}
    </div>
  )
}

export default Foreground
