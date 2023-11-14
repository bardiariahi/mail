import React from 'react'
import Mail from './Mail';

interface MTypes {
    setIsOpen: any;
    isOpen: boolean;
    setCheckedList: any;
    checkedList: any;
    data: any;
}

const MailListContainer:React.FC<MTypes> = ({
    setIsOpen,
    isOpen,
    setCheckedList,
    checkedList,
    data
}) => {
  return (
    <div className="pt-3 h-full">
            <div className={` duration-300 overflow-hidden bg-red-400 ${isOpen ? "h-full p-3" : "h-0 "}`}> 
                { data.map( (item : any) => {
                    return <Mail key={item.id} id={item.id} data={item} checkedList={checkedList} setCheckedList={setCheckedList} />
                })}
              </div>
          </div>
  )
}

export default MailListContainer