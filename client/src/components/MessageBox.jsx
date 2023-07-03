

export default function MessageBox(props) {
  return (
      <div className="w-full flex justify-center items-center flex-row gap-2 " >
          <input 
              type="text"
              placeholder="Type here"
              onChange={props.handleChange}
              className="input input-bordered w-5/6 bg-neutral-focus"
          />
          <button onClick={() => props.handleClick()}>send</button>
      </div>
  )
}
