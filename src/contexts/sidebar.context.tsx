import { createContext, useState } from 'react'

interface SideBarContextInterface {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleClose: () => void
}

export const SidebarContext = createContext<SideBarContextInterface | null>(
  null
)

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
