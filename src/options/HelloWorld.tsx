import { Outlet } from '@tanstack/react-router'

function Layout() {
  return (
    <div className="px-[15px] py-3 h-full overflow-hidden text-red-500">
      react+tsx布局+webext
      <Outlet />
    </div>
  )
}

export default Layout
