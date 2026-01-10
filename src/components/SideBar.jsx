export default function SideBar({ handleOpenform, isShowfrom }) {
  return (
    <aside>
      <h2>Your Projects</h2>
      <div>
        <button className="regular-btn" onClick={handleOpenform}>
          {!isShowfrom ? "+ Add Project" : "Cancel Project"}
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
