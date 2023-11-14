'use client'
import {useMemo, useState} from "react"

interface MTypes {
    id: number;
    data: any;
    setCheckedList: any;
    checkedList: any;
}

const Mail:React.FC<MTypes> = ({
    id,
    data,
    checkedList,
    setCheckedList
}) => {

    // const [checked, setChecked] = useState(false)
    const handleCheckChange = (e:any) => {
        console.log(e.target.checked);
        
        if (e.target.checked) {
            // setChecked(true)
            setCheckedList([...checkedList,id])
        } else {
            // setChecked(false)
            setCheckedList( (prevedCheckedList:any) => prevedCheckedList.filter( (item:any) => item !== id ) )
            // console.log((checkedList:any) => checkedList.filter( (item:any) => item.id != id ) ,'aaaa');
            console.log('ali');
            
            
        }
    }

    const checked = useMemo(function () {
        return checkedList?.includes(id)
    }, [checkedList]) 

  return (
    <div className="py-1">
        <button className="flex w-full justify-between items-center gap-3 bg-white rounded-md p-3" >
        <div>
            <input type="checkbox" checked={checked} onChange={handleCheckChange} name="" id="" />
        </div>
        <div>
            <div>
                <p> linkedin </p>
            </div>
            <div>
                <span>
                    This massage
                </span>
            </div>
        </div>
        </button>
    </div>
  )
}

export default Mail