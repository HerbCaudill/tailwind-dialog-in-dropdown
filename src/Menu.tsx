import { Fragment } from 'react'
import * as Headless from '@headlessui/react'
import cx from 'classnames'

export default function Menu({ button, header, items }: Props) {
  return (
    <Headless.Menu as="div" className="Menu relative inline-block text-left">
      <div>
        <Headless.Menu.Button
          className={cx([
            'inline-flex w-full justify-center rounded-md border px-4 py-2',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-100',
          ])}
        >
          {button}
        </Headless.Menu.Button>
      </div>

      <Headless.Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Headless.Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {header && <div className="px-4 py-3">{header} </div>}
          <div className="py-1">
            {items.map((item, i) => (
              <Headless.Menu.Item key={i}>
                {({ active }) => (
                  <span
                    className={cx(
                      'MenuItem',
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block cursor-pointer px-4 py-2 text-sm'
                    )}
                  >
                    {item}
                  </span>
                )}
              </Headless.Menu.Item>
            ))}
          </div>
        </Headless.Menu.Items>
      </Headless.Transition>
    </Headless.Menu>
  )
}

type Props = {
  button: React.ReactNode
  header?: React.ReactNode
  items: React.ReactNode[]
}
