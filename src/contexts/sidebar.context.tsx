import { createContext, useState } from 'react'

interface SideBarContextInterface {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleClose: () => void
}

const initialSiderContext: SideBarContextInterface = {
  isOpen: Boolean(),
  setIsOpen: () => null,
  handleClose: () => null
}

export const SidebarContext =
  createContext<SideBarContextInterface>(initialSiderContext)

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, handleClose, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
