import { useState } from 'react'

import { Dialog } from './Dialog'

export const SomeDialog = ({ className = '' }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button
        className={className}
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Open dialog
      </button>
      <Dialog
        isOpen={isOpen}
        title="Some dialog"
        confirmText="OK"
        onConfirm={() => {
          setIsOpen(false)
        }}
        onCancel={() => {
          setIsOpen(false)
        }}
      >
        <div className="flex flex-col space-y-4">Hello I am a dialog</div>
      </Dialog>
    </div>
  )
}
