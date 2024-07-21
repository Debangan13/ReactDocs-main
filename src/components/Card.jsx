import React, { useRef } from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
  const reff = useRef(null)
  console.log(data.tag.tagColor)
  return (
    <motion.div ref={reff} drag dragConstraints={reference} whileDrag={{scale:"1.2"}} dragTransition={{bounceStiffness:100,bounceDamping:10}} className='overflow-hidden relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10'>
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full  left-0'>
        <div className='flex items-center justify-between px-8 py-3 md-3'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>
            {data.close ? <IoClose /> : <LuDownload size=".7rem" />}

          </span>
        </div>
        {
          data.tag.isOpen && <div className={`tag w-ful h-10 ${data.tag.tagColor} flex items-center justify-center font-semiboldk`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        }

      </div>
    </motion.div>
  )
}

export default Card
