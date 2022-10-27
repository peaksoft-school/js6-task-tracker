import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const PrivateRoute = ({ ROLES, COMPONENT }) => {
   const navigate = useNavigate()
   const { jwt, role } = useSelector((state) => state.auth.userInfo)
   const RegisteredUser = jwt && role && ROLES.includes(role)
   if (!RegisteredUser) {
      return navigate("/")
   }
   return COMPONENT
}

export default PrivateRoute
