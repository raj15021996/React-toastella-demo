import { toaster } from "react-toastella"

export const handleToaster = () => {
  toaster.notify({
    message: 'something went right',
    type: 'success',
    duration:5000
  })
}