import { toast } from "react-toastify"

const toastError = {
   type: "error",
   position: "top-right",
   autoClose: 2000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
   isLoading: false,
}

const toastSuccess = {
   type: "success",
   position: "top-right",
   autoClose: 2000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
   isLoading: false,
}
const toastWarning = {
   type: "warning",
   position: "top-right",
   autoClose: 2000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
   isLoading: false,
}

export function successToastify(idToast, successMessage) {
   return toast.update(idToast, {
      ...toastSuccess,
      render: successMessage,
   })
}

export function errorToastify(idToast, errorMessage) {
   return toast.update(idToast, {
      ...toastError,
      render: errorMessage,
   })
}

export function warningToastify(idToast, warningMessage) {
   return toast.update(idToast, {
      ...toastWarning,
      render: warningMessage,
   })
}
