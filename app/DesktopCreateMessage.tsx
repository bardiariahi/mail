'use client'
import { useEffect, useState } from 'react'
import ListHead from './mail/ListHead'
import MailListContainer from './mail/MailListContainer'

const fakeData = [
  {
      name: "linkedin",
      id: '0',
      seen: true,
      date: "۱۶ شهریور",
      isFave: false
  },
  {
      name: "linkedin2",
      id: '1',
      seen: true,
      date: "۱۶ شهریور",
      isFave: true
  },
  {
      name: "linkedin3",
      id: '2',
      seen: false,
      date: "۱۶ شهریور",
      isFave: false
  },
]

export default function DesktopCreateMessage() {
  const [isOpen,setIsOpen] = useState(true)
  const [checkedList,setCheckedList] = useState([])

  useEffect( ()=> {
    console.log(checkedList,'checkedList');
    
  },[checkedList])

  
 

  return (
    <div className="hidden lg:flex gap-4 w-full rounded-md bg-[#F1F5F9] p-4">
        <div className="w-3/12 overflow-hidden">
          <ListHead isOpen={isOpen} setIsOpen={setIsOpen} data={fakeData} checkedList={checkedList} setCheckedList={setCheckedList} />
          <MailListContainer isOpen={isOpen} setIsOpen={setIsOpen} data={fakeData} checkedList={checkedList} setCheckedList={setCheckedList} />
        </div>
        <div>
        Main Page
        </div>
      </div>
  )
}
