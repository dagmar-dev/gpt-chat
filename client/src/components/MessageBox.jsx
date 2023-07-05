



import { RxPaperPlane} from "react-icons/rx";

export default function MessageBox(props) {
  return (
      <div className="w-5/6 flex py-3 justify-center items-center flex-row gap-2 " >
          <input 
              type="text"
              placeholder="Type here"
              onChange={props.handleChange}
              className="input input-bordered w-full bg-neutral"
          />
          
          <RxPaperPlane className="text-primary  text-4xl cursor-pointe" onClick={() => props.handleClick()} />
      </div>
  )
}
