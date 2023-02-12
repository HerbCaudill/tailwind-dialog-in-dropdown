import { ReactElement } from 'react'
import Menu from './Menu'
import { SomeDialog } from './SomeDialog'
import cx from 'classnames'

function App(): ReactElement {
  return (
    <div className="flex flex-col space-y-4  text-sm border divide-y w-[30em]">
      <div className="p-10 space-y-4">
        <p>This button will open a dialog.</p>
        <SomeDialog
          className={cx([
            'inline-flex w-full justify-center rounded-md border px-4 py-2',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-100',
          ])}
        />
      </div>
      <div className="p-10 space-y-4">
        <div className="text-right">
          <Menu
            button={<span>Menu</span>}
            items={[
              //
              'Menu option 1',
              'Menu option 2',
              'Menu option 3',
              <SomeDialog />,
              'Menu option 4',
            ]}
          />
        </div>
        <p>
          This dropdown menu contains the same "Open dialog" button. But when you click it, the
          dialog flashes and disappears — presumably it's closed because the dropdown menu was
          closed.
        </p>
      </div>
    </div>
  )
}

export default App
