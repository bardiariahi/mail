'use client'
import React, { useMemo, useState } from 'react'
import { SearchNormal1 , ArrowDown2 , ArrowUp2 } from 'iconsax-react'

interface HTypes {
    setIsOpen: any;
    isOpen: any
    checkedList: any;
    setCheckedList: any;
    data: any
}

const ListHead : React.FC<HTypes> = ({
    setIsOpen,
    isOpen,
    checkedList,
    setCheckedList,
    data
}) => {

    const handleSearch = (e : any) =>{ 
      e.stopPropagation()
  
    }
  
    const handleCheckbox = (e : any) =>{ 
      e.stopPropagation()
      if (e.target.checked) {
        const allId = data.map( (item: any) => {
          return item.id
        } )
        setCheckedList(allId)
      } else {
        setCheckedList([])
      }
    }
    
    useMemo( ()=> {

    },[checkedList])

  return (
    <div className='flex w-full bg-[#233d9a] rounded-md px-2 h-10 py-1 justify-center' onClick={()=> setIsOpen(!isOpen)}>
              <div className='flex flex-1 items-center pr-2' ><input type="checkbox" className='h-4 w-4' onClick={ e => handleCheckbox(e)} name="" id="" /></div>
              <div className='text-white flex flex-1 items-center'>
                { isOpen ? <ArrowDown2 /> : <ArrowUp2 /> }
              </div>
              <label className='bg-white border border-white w-9/12 rounded-md flex px-2 justify-center' onClick={ e => handleSearch(e)} htmlFor="SearchBox">
                <div className="w-7 text-gray-400 border-l">
                <SearchNormal1 />
                </div>
                <input type="text" dir='ltr' id='SearchBox' name='SearchBox' placeholder='input search text' className='outline-none border-none justify-center flex' />
              </label>
          </div>
  )
}
export default ListHead 