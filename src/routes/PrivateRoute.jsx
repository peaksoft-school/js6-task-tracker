import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const PrivateRoute = ({ COMPONENT }) => {
   const navigate = useNavigate()
   const { jwt } = useSelector((state) => state.auth.userInfo)
   if (!jwt) {
      return navigate("/")
   }
   return COMPONENT
}

export default PrivateRoute
