import * as Headless from '@headlessui/react'
import cx from 'classnames'
import { Fragment, useRef } from 'react'
import { Button } from './Button'

export const Dialog = ({
  isOpen,
  title,
  confirmText = 'OK',
  cancelText = 'Cancel',
  onConfirm = () => {},
  onCancel = () => {},
  children,
}: Props) => {
  const confirmButtonRef = useRef(null)

  return (
    <Headless.Transition.Root show={isOpen} as={Fragment}>
      <Headless.Dialog
        as="div"
        className="Dialog"
        onClose={onCancel}
        initialFocus={confirmButtonRef}
      >
        <Backdrop />
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Headless.Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Headless.Dialog.Panel
                className={cx([
                  'my-8 w-full max-w-lg p-6',
                  'relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all',
                ])}
              >
                <div className="flex flex-col">
                  <Headless.Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 border-b pb-4 -mx-6 px-6"
                  >
                    {title}
                  </Headless.Dialog.Title>
                  <div className="mt-4 text-sm text-gray-500">{children}</div>
                </div>
                <div className="mt-5 flex flex-row justify-end space-x-2">
                  <Button
                    color="white"
                    onClick={() => {
                      onCancel()
                    }}
                  >
                    {cancelText}
                  </Button>
                  <Button
                    ref={confirmButtonRef}
                    color="primary"
                    onClick={() => {
                      onConfirm()
                    }}
                  >
                    {confirmText}
                  </Button>
                </div>
              </Headless.Dialog.Panel>
            </Headless.Transition.Child>
          </div>
        </div>
      </Headless.Dialog>
    </Headless.Transition.Root>
  )
}

type Props = {
  isOpen: boolean
  title: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  children?: React.ReactNode
}

const Backdrop = () => {
  return (
    <Headless.Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    </Headless.Transition.Child>
  )
}
