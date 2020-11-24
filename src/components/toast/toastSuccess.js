import { toast } from "react-toastify";

export default function toastSuccess(message) {
  toast.success(message, {
    position: "top-left",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
