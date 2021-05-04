import * as _ from "../../style/components/SideBar.Style";

const CategoryData = ({ name, props }) => {
  return (
    <_.DataBar
      id={name.id}
      onDragEnd={() => props.setDetect(false)}
      onDrop={(e) => props.UpdateDragWay(e)}
      onDragStart={(e) => props.DragControl(e, name)}
      draggable
      onClick={() => props.handleClick(name.id)}
    >
      <span>
        <div>
          <div id={name.id}>
            <_.P id={name.id}>{name.name}</_.P>
          </div>
        </div>
      </span>
    </_.DataBar>
  );
};
export default CategoryData;
