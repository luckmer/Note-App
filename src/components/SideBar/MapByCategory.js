import { useMemo } from "react";
import * as _ from "../../style/components/SideBar.Style";
import CategoryData from "./CategoryData";

const MapByCategory = (props) => {
  const FilterByCategory = useMemo(
    () =>
      props.notes.filter((item) => item.category.trim() === props.data.trim()),
    [props.data, props.notes]
  );

  return (
    <_.Main
      key={props.data}
      onDragLeave={(e) => props.Style(e)}
      onDragOver={(e) => props.onDragOver(e)}
      onDrop={(e) => props.onDrop(e, props.data)}
    >
      <_.HeaderDiv>
        <_.HeaderBar>{props.data}</_.HeaderBar>
      </_.HeaderDiv>
      <_.SectionBar>
        {FilterByCategory.map((name, i) => (
          <CategoryData props={props} name={name} key={i} />
        ))}
      </_.SectionBar>
    </_.Main>
  );
};

export default MapByCategory;
