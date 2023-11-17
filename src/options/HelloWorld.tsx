import { Outlet } from '@tanstack/react-router'

function Layout() {
  return (
    <main
      className="h-screen grid grid-cols-[auto_1fr]"
      style={{ backgroundColor: true ? 'var(--arc-palette-foregroundPrimary)' : '' }}
    >
      <div className="px-[15px] py-3 h-full overflow-hidden text-red-500">
        大向小布局---这回可以了吗
        <Outlet />
      </div>
    </main>
  )
}

export default Layout
