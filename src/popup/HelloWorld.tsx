import { Outlet } from '@tanstack/react-router'
function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
function Layout() {
  return (
    <div className="px-[15px] py-3 h-full overflow-hidden text-red-500" onClick = {
      () => {
        openOptionsPage()
      }
    }>
      open options
      <Outlet />
    </div>
  )
}

export default Layout
