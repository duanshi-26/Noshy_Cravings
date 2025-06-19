
import {useRouteError} from 'react-router-dom'
function Error() {
    const error = useRouteError();
  return (
    <div>
        <h1>ERROR PAGE</h1>
        <h1>Status: {error.status} - {error.statusText} - {error.data}</h1>
    </div>
  )
}

export default Error