/* eslint-disable react/prop-types */
import { useStore } from '../app/store'



export default function SavedMessage(props) {
    return (
        <li className="bg-neutral-focus  w-5/6  m-1 text-center r-5 p-1 rounded ">
            {props.title}
        </li>
    )
}
