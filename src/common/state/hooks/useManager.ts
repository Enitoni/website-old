import { useContext } from "react"
import { ManagerContext } from "../contexts/ManagerContext"

export const useManager = () => useContext(ManagerContext)!
