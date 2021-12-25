import SRMap from './SRMap'

const Drawer = () => {
  return (
    <div className="drawer drawer-mobile rounded-lg shadow bg-base-200 h-full">
      <input id="the-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-center drawer-content">
        {/* <label htmlFor="the-drawer" className="btn btn-primary drawer-button lg:hidden">
          open menu
        </label> */}
        <SRMap />
      </div>
      <div className="drawer-side">
        <label htmlFor="the-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <div className="flex flex-row">Safe Restrooms</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Drawer
