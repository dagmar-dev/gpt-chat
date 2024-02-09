/* eslint-disable react/prop-types */

import { RxPaperPlane } from 'react-icons/rx'
export default function MessageBox(props) {
    return (
        <div className=" w-full flex p-1 lg:py-3 justify-center items-center flex-row gap-2 ">
            
            
            <input
                type="text"
                placeholder={props.errorPlaceholder}
                onChange={props.handleChange}
                onKeyDown={props.handleKeyDown}
                className="input input-bordered w-full bg-neutral"
                value={props.newMessage}
                
            />

            <RxPaperPlane
                className="text-primary  text-4xl cursor-pointe"
                onClick={() => props.handleClick()}
            />
        </div>
    )
}
