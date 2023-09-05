import Error from './alerts/Error'
import Success from './alerts/Success'
import Warning from './alerts/Warning'
import { useStore } from '../app/store'

export default function Alerts() {
    const alert = useStore((store) => store.alert)

    return (
        <div className="m-3">
            {alert.map((alert, index) => {
                if (alert.response === 'success') {
                    return <Success key={index} message={alert.message} />
                } else if (alert.response === 'warning') {
                    return <Warning key={index} message={alert.message} />
                } else if (alert.response === 'error') {
                    return <Error key={index} message={alert.message} />
                }
            })}
        </div>
    )
}
